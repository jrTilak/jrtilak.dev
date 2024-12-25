"use client";

import { CheckCheckIcon, ClipboardCopyIcon, PlayIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import HighlightCode from "./highlight-code";
import { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";
import { executeCode } from "@/services/execute-code";



type Props = {
  code: string;
  lang: string;
};


type Output = {
  stdout: string;
  stderr: string;
  code: 0 | 1;
  signal: string;
  output: string;
}


const CodeExecutor = ({ code, lang }: Props) => {
  const [output, setOutput] = useState<Output | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [icon, setIcon] = useState(<ClipboardCopyIcon className="size-3.5" />);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null)


  const execute = useCallback(async (code: string) => {
    setIsLoading(true); // Set loading state
    // Clear previous output before executing new code
    setOutput(null);

    const output = await executeCode({ code, lang });
    setOutput(output);

    console.log(output);
    setIsLoading(false); // Reset loading state

  }, []);


  const onCopy = () => {
    if (typeof window === "undefined" || !("localStorage" in window)) return;
    setIsBtnDisabled(true);
    try {
      window.navigator.clipboard.writeText(outputRef?.current?.innerText ?? "");
      toast.success("Output copied to clipboard!");
      setIcon(<CheckCheckIcon className="size-3.5 text-green-500" />);
    } catch (err) {
      toast.error("Failed to copy output!");
      setIcon(<X className="size-3.5 text-destructive" />);
    } finally {
      setTimeout(() => {
        setIsBtnDisabled(false);
        setIcon(<ClipboardCopyIcon className="size-3.5" />);
      }, 2000);
    }
  };


  return (
    <>
      <HighlightCode code={code} language={lang} wrapButton />
      {!isLoading && output && <div
        ref={outputRef}
        className="w-full flex flex-col mb-2.5 bg-muted rounded-md max-h-52 overflow-auto border border-muted-foreground/30 p-2 relative ">
        <Button
          size={"sm"}
          variant={"outline"}
          disabled={isBtnDisabled}
          onClick={onCopy}
          className="absolute top-2 right-2 h-fit w-fit aspect-square p-1 bg-muted max-h-full font-fira-code"
        >
          {icon}
        </Button>
        {
          output.stderr && <div className="rounded-lg min-h-6 text-destructive break-all pr-8">
            {output.stderr.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        }
        {
          output.stdout && <div className="rounded-lg min-h-6 text-foreground break-all pr-8">
            {output.stdout.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
        }
      </div>}
      <div className="flex justify-end gap-2.5 mb-4">
        <Button
          disabled={!output}
          onClick={() => setOutput(null)}
          variant={"secondary"}
          size={"sm"}
        >
          Clear Output
        </Button>
        <Button
          onClick={() => execute(code)}
          variant={"secondary"}
          size={"sm"}
          isLoading={isLoading}
          className="min-w-32"
        >
          Execute <PlayIcon className="size-3.5 ml-2.5" />
        </Button>
      </div>
    </>
  );
};

export default CodeExecutor;
