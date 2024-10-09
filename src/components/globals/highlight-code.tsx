"use client";
import React, { useState } from "react";
import { Highlight, HighlightProps, themes } from "prism-react-renderer";
import { Button } from "../ui/button";
import {
  CheckCheckIcon,
  ClipboardCopyIcon,
  WrapTextIcon,
  X,
} from "lucide-react";
import toast from "react-hot-toast";
import { cn } from "@/helpers/cn";
import { getLocalStorage, setLocalStorage } from "@/helpers/localstorage";

type Props = Omit<HighlightProps, "theme" | "children" | "prism"> & {
  wrapButton?: boolean;
};

const HighlightCode = (props: Props) => {
  const [icon, setIcon] = useState(<ClipboardCopyIcon className="size-3.5" />);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [lineWrap, setLineWrap] = useState(() =>
    getLocalStorage("code-wrap", false)
  );
  const onCopy = () => {
    setIsBtnDisabled(true);
    try {
      window.navigator.clipboard.writeText(props.code);
      toast.success("Code copied to clipboard!");
      setIcon(<CheckCheckIcon className="size-3.5 text-green-500" />);
    } catch (err) {
      toast.error("Failed to copy code!");
      setIcon(<X className="size-3.5 text-destructive" />);
    } finally {
      setTimeout(() => {
        setIsBtnDisabled(false);
        setIcon(<ClipboardCopyIcon className="size-3.5" />);
      }, 2000);
    }
  };

  return (
    <div className="relative">
      <Button
        size={"sm"}
        variant={"secondary"}
        disabled={isBtnDisabled}
        onClick={onCopy}
        className="absolute top-2 right-2 h-fit w-fit aspect-square p-1 bg-muted max-h-full"
      >
        {icon}
      </Button>
      {props.wrapButton && (
        <Button
          size={"sm"}
          variant={"secondary"}
          onClick={() => {
            setLineWrap((prev) => {
              const val = !prev;
              setLocalStorage("code-wrap", val);
              return val;
            });
          }}
          className="absolute top-9 right-2 h-fit w-fit aspect-square p-1 bg-muted max-h-full"
        >
          <WrapTextIcon className="size-3.5" />
        </Button>
      )}
      <Highlight theme={themes.shadesOfPurple} {...props}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={style}
            className={cn(
              "font-bricolage-grotesque p-2 rounded-lg text-left tracking-normal overflow-x-auto my-4 pr-10",
              lineWrap ? "text-wrap" : "text-nowrap"
            )}
          >
            {tokens.map((line, i) => {
              const { className, ...props } = getLineProps({ line });
              return (
                <div key={i} className={cn("table-row", className)} {...props}>
                  {tokens.length > 1 && (
                    <span className="text-sm opacity-60 table-cell pr-3 text-right select-none">
                      {i + 1}.
                    </span>
                  )}
                  <div className="table-cell">
                    {line.map((token, key) => {
                      const { className, ...props } = getTokenProps({ token });
                      return (
                        <span key={key} className={cn(className)} {...props} />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default HighlightCode;
