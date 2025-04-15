"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/base/dialog";
import useRequestFullScreen from "@/hooks/use-request-full-screen";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../base/button";
import { FullscreenIcon, MinimizeIcon } from "lucide-react";

type Props = {
  children: React.ReactNode;
  title: string;
  trigger: {
    className: string;
  };
  src: string;
};
const ImageViewer = ({ children, src, title, trigger }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { exitFullScreen, isFullScreen, requestFullScreen } = useRequestFullScreen(
    ref as React.RefObject<HTMLElement>
  );
  return (
    <Dialog>
      <DialogTrigger className={trigger.className}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription
            ref={ref}
            className="relative max-h-[70vh] overflow-hidden overflow-y-auto"
          >
            <Image
              src={src}
              alt={title}
              width={1500}
              height={1000}
              className={
                isFullScreen
                  ? "m-auto h-full max-h-screen w-auto object-contain object-center"
                  : "h-auto w-full object-contain object-center"
              }
            />
            {isFullScreen ? (
              <Button
                onClick={exitFullScreen}
                variant={"outline"}
                size={"sm"}
                className="absolute right-4 bottom-4"
              >
                <MinimizeIcon size={24} />
              </Button>
            ) : (
              <Button
                onClick={requestFullScreen}
                variant={"ghost"}
                size={"sm"}
                className="absolute right-0 bottom-0"
              >
                <FullscreenIcon size={24} />
              </Button>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default ImageViewer;
