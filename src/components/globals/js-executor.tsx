"use client";

import { CheckCheckIcon, ClipboardCopyIcon, PlayIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import HighlightCode from "./highlight-code";
import { useCallback, useRef, useState } from "react";
import toast from "react-hot-toast";

type Props = {
  code: string;
};

type Output = { type: "log" | "error"; result: string }

const JSExecutor = ({ code }: Props) => {
  const [output, setOutput] = useState<Array<Output>>([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isLoadingTimeout, setIsLoadingTimeout] = useState(false);
  const [icon, setIcon] = useState(<ClipboardCopyIcon className="size-3.5" />);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null)

  function stringify(obj: unknown) {
    return JSON.stringify(
      obj,
      (key, value) => (value === undefined ? "__undefined__" : value),
      2 // For pretty printing, can be removed or adjusted
    ).replace(/"__undefined__"/g, "undefined");
  }


  const formatArgs = (arg: unknown) => {
    if (arg instanceof Boolean) {
      return `[Boolean: ${arg.valueOf()}]`;          // Boolean wrappers
    } else if (arg instanceof Number) {
      return `[Number: ${arg.valueOf()}]`;           // Number wrappers
    } else if (arg instanceof String) {
      return `[String: "${arg.valueOf()}"]`;         // String wrappers
    } else if (typeof arg === "symbol") {
      return arg.toString();                         // Symbol
    } else if (typeof arg === "bigint") {
      return arg.toString() + "n";                   // BigInt
    } else if (typeof arg === "function") {
      return `[Function${arg.name ? `: ${arg.name}` : ""}]`; // Functions, with names if available
    } else if (arg === undefined) {
      return "undefined";                            // undefined
    } else if (arg === null) {
      return "null";                                 // null
    } else if (arg instanceof Error) {
      return `${arg.name}: ${arg.message}`;          // Error objects with name and message
    } else if (arg instanceof Date) {
      return arg.toISOString();                      // Date objects in ISO format
    } else if (Array.isArray(arg)) {
      return stringify(arg);           // Arrays in pretty JSON
    } else if (typeof arg === "object") {
      return stringify(arg);           // Objects in pretty JSON
    } else {
      return String(arg);                            // Fallback for all other primitives
    }
  }

  const executeCode = useCallback((code: string) => {
    setIsLoading(true); // Set loading state
    setIsLoadingTimeout(true)

    setTimeout(() => {
      setIsLoadingTimeout(false)
    }, 200);

    // Clear previous output before executing new code
    setOutput([]);

    // Save the original console functions
    const previousConsoleLog = console.log;
    const previousConsoleError = console.error;

    // Override console.log to push each argument as a separate log entry
    console.log = (...args) => {
      previousConsoleLog(...args);
      setOutput(prev => [
        ...prev,
        ...args.map<Output>(arg => ({ type: "log", result: formatArgs(arg) }))
      ]);
    };

    // Override console.error to push each argument as a separate error entry
    console.error = (...args) => {
      setOutput(prev => [
        ...prev,
        ...args.map<Output>(arg => ({ type: "error", result: formatArgs(arg) }))
      ]);
    };

    try {
      // Evaluate the code
      eval(code);
    } catch (error) {
      setOutput(prev => [...prev, { type: "error", result: `Error: ${(error as Error)?.message}` }]);
    } finally {
      // Restore the original console functions
      console.log = previousConsoleLog;
      console.error = previousConsoleError;
      setIsLoading(false); // Reset loading state after execution
    }
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
      <HighlightCode code={code} language="js" wrapButton />
      {!isLoadingTimeout && output?.length > 0 && <div
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
        {output.map((log, index) => (
          <div
            key={index}
            className={`rounded-lg min-h-6 ${log.type === "log" ? "text-foreground" : "text-destructive"}`}
          >
            {log.result}
          </div>
        ))}
      </div>}
      <div className="flex justify-end gap-2.5 mb-4">
        <Button
          disabled={output?.length === 0}
          onClick={() => setOutput([])}
          variant={"secondary"}
          size={"sm"}
        >
          Clear Output
        </Button>
        <Button
          onClick={() => executeCode(code)}
          variant={"secondary"}
          size={"sm"}
          isLoading={isLoading || isLoadingTimeout}
          className="min-w-32"
        >
          Execute <PlayIcon className="size-3.5 ml-2.5" />
        </Button>
      </div>
    </>
  );
};

export default JSExecutor;
