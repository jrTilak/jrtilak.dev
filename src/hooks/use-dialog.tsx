"use client";
import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { useBoolean } from "./use-boolean";
import { Button } from "@/components/ui/button";

type Props = (data: {
  close: () => void;
  open: () => void;
  toggle: () => void;
  value: boolean;
}) => {
  title?: React.ReactNode;
  description?: React.ReactNode;
  confirmText?: string;
  onConfirm?: () => void;
  body?: React.ReactNode;
};

const useDialog = (fn: Props) => {
  const {
    setFalse: close,
    setTrue: open,
    setValue,
    toggle: toggle,
    value,
  } = useBoolean(false);

  const props = fn({
    close,
    open,
    toggle,
    value,
  });

  const Comp = (
    <Dialog open={value} onOpenChange={setValue}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{props.title ?? "Are you absolutely sure?"}</DialogTitle>
          {props.description && (
            <DialogDescription>{props.description}</DialogDescription>
          )}
        </DialogHeader>
        {props.body}
        {props.onConfirm && (
          <DialogFooter>
            <Button
              onClick={() => {
                if (props.onConfirm) props.onConfirm();
                close();
              }}
              className="min-w-28"
            >
              {props.confirmText ?? "Yes"}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );

  return {
    Comp,
    close,
    open,
    toggle,
  };
};

export default useDialog;
