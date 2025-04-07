"use client";

import type React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import { cn } from "@/lib/cn";
import { type ReactNode, useRef, useState, useEffect } from "react";
import Spinner from "./spinner";

/** Represents a single ripple instance in the button */
type RippleInstance = {
  x: number;
  y: number;
  size: number;
  id: number;
  color: string;
  opacity: number;
};

/** Default configuration for ripple effect */
const DEFAULT_RIPPLE = {
  duration: 0.65, // in seconds for framer-motion
  opacity: 0.25
} as const;

type ButtonRippleOptions = typeof DEFAULT_RIPPLE &
  Partial<{
    color: string;
  }>;

const DEFAULT_SCALE_ON_ACTIVE = 0.97;

/** Style variants for the button component */
const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-default [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        "destructive-outline": "border border-destructive hover:bg-destructive/10 text-destructive",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 underline hover:text-muted-foreground"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10"
      },
      radius: {
        none: "rounded-none",
        default: "rounded-md",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default"
    }
  }
);

type ButtonBaseProps = Omit<
  HTMLMotionProps<"button">,
  keyof VariantProps<typeof buttonVariants>
>;

/** Props for the Button component */
type ButtonProps = ButtonBaseProps &
  VariantProps<typeof buttonVariants> & {
    /** Enable/disable ripple effect with optional configuration */
    ripple?: ButtonRippleOptions | boolean;
    /** Enable/disable scale effect on press with optional scale amount */
    scaleOnActive?: number | boolean;
    /** Show loading state with optional custom loading indicator */
    loading?: boolean | ReactNode;
    /** Additional className for the content wrapper */
    wrapperClassName?: string;
  };

/** Interactive button component with ripple and scale effects */
function Button({
  className,
  variant,
  size,
  ripple = true,
  scaleOnActive = true,
  disabled,
  loading,
  onMouseDown,
  onTouchStart,
  onMouseUp,
  onTouchEnd,
  onMouseLeave,
  children,
  radius,
  wrapperClassName,
  ...props
}: ButtonProps) {
  const [ripples, setRipples] = useState<RippleInstance[]>([]);
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);
  const [lastButtonWidth, setLastButtonWidth] = useState<number | null>(null);
  const nextId = useRef(0);
  const isDisabled = disabled || Boolean(loading);

  // Preserve button width during loading state
  useEffect(() => {
    if (!buttonRef.current) return;

    if (loading) {
      setButtonWidth(lastButtonWidth);
    } else {
      setLastButtonWidth(buttonRef.current.offsetWidth);
    }
  }, [lastButtonWidth, loading]);

  const rippleEnabled = ripple !== false && variant !== "link" && !isDisabled;
  const scaleEnabled = scaleOnActive !== false && variant !== "link" && !isDisabled;
  const rippleOptions: ButtonRippleOptions = typeof ripple === "object" ? { ...DEFAULT_RIPPLE, ...ripple } : DEFAULT_RIPPLE;
  const scaleAmount = typeof scaleOnActive === "number" ? scaleOnActive : DEFAULT_SCALE_ON_ACTIVE;
  const durationMs = (rippleOptions.duration || DEFAULT_RIPPLE.duration) * 1000;

  /** Creates and adds a new ripple effect */
  const addRipple = (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    if (!rippleEnabled || !buttonRef.current) return;

    const { clientX, clientY } = "touches" in event ? event.touches[0] : event;
    const button = buttonRef.current;
    const computedStyle = window.getComputedStyle(button);
    const textColor = rippleOptions.color || computedStyle.color;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.5;

    const newRipple: RippleInstance = {
      x: clientX - rect.left,
      y: clientY - rect.top,
      size,
      id: nextId.current++,
      color: textColor,
      opacity: rippleOptions.opacity || DEFAULT_RIPPLE.opacity
    };

    setRipples(prevRipples => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples(currentRipples => currentRipples.filter(ripple => ripple.id !== newRipple.id));
    }, durationMs + 100);
  };

  const handlePress = (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    if (rippleEnabled) addRipple(event);
    if (scaleEnabled) setIsPressed(true);
  };

  const handleRelease = () => {
    if (scaleEnabled) setIsPressed(false);
  };

  return (
    <motion.button
      className={cn("relative overflow-hidden", buttonVariants({ variant, size, className, radius }))}
      animate={{ scale: isPressed ? scaleAmount : 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.8 }}
      onClick={props.onClick}
      ref={buttonRef}
      style={{ ...(buttonWidth ? { minWidth: `${buttonWidth}px` } : {}) }}
      onMouseDown={(e) => {
        handlePress(e);
        onMouseDown?.(e);
      }}
      onTouchStart={(e) => {
        handlePress(e as unknown as React.TouchEvent<HTMLButtonElement>);
        onTouchStart?.(e as unknown as React.TouchEvent<HTMLButtonElement>);
      }}
      onMouseUp={(e) => {
        handleRelease();
        onMouseUp?.(e);
      }}
      onMouseLeave={(e) => {
        handleRelease();
        onMouseLeave?.(e);
      }}
      onTouchEnd={(e) => {
        handleRelease();
        onTouchEnd?.(e as unknown as React.TouchEvent<HTMLButtonElement>);
      }}
      disabled={isDisabled}
      {...props}
    >
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            initial={{ scale: 0, opacity: ripple.opacity }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: rippleOptions.duration || DEFAULT_RIPPLE.duration,
              ease: [0.4, 0, 0.2, 1]
            }}
            style={{
              position: "absolute",
              left: ripple.x - ripple.size / 2,
              top: ripple.y - ripple.size / 2,
              width: ripple.size,
              height: ripple.size,
              borderRadius: "50%",
              backgroundColor: ripple.color,
              pointerEvents: "none",
              zIndex: 0
            }}
          />
        ))}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.span
          key={loading ? "loading" : "content"}
          className={cn("relative z-10 inline-flex gap-2", wrapperClassName)}
        >
          {!loading ? children : typeof loading === "boolean" ? <Spinner /> : loading}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

export { Button, type ButtonProps, buttonVariants };
