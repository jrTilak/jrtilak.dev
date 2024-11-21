"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useRequestFullScreen from "@/hooks/use-request-full-screen";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "../ui/button";
import { FullscreenIcon, MinimizeIcon } from "lucide-react";

type Props = {
  children: React.ReactNode;
  title: string;
  trigger: {
    className: string;
  }
  src: string;

}
const ImageViewer = ({ children, src, title, trigger }: Props) => {
  const ref = useRef(null)
  const { exitFullScreen, isFullScreen, requestFullScreen } = useRequestFullScreen(ref)
  return (
    <Dialog
    >
      <DialogTrigger
        className={trigger.className}
      >
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription
            ref={ref}
            className="max-h-[70vh] overflow-hidden overflow-y-auto relative">
            <Image
              src={src}
              alt={title}
              width={1200}
              quality={100}
              height={800}
              className={isFullScreen ? "h-full max-h-screen object-contain object-center w-auto m-auto" : "w-full h-auto object-contain object-center"}
            />
            {isFullScreen ?
              <Button
                onClick={exitFullScreen}
                variant={"outline"} size={"sm"} className="absolute bottom-4 right-4">
                <MinimizeIcon size={24} />
              </Button>
              :
              <Button
                onClick={requestFullScreen}
                variant={"ghost"} size={"sm"} className="absolute bottom-0 right-0">
                <FullscreenIcon size={24} />
              </Button>
            }
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
export default ImageViewer