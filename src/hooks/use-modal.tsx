"use client";
import React from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useBoolean } from "./use-boolean";
type PropsWithoutComponent = {
  title?: React.ReactNode;
  body?: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

type PropWithComponent = (data: {
  close: () => void;
  open: () => void;
  toggleModal: () => void;
  value: boolean;
}) => React.ReactNode;

const useModal = (props: PropsWithoutComponent | PropWithComponent) => {
  const {
    setFalse: close,
    setTrue: open,
    setValue,
    toggle: toggleModal,
    value,
  } = useBoolean(false);

  const Comp = (
    <AlertDialog open={value} onOpenChange={setValue}>
      <AlertDialogContent>
        {typeof props === "object" ? (
          <>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {props.title ?? "Are you absolutely sure?"}
              </AlertDialogTitle>
              {props.body && (
                <AlertDialogDescription>{props.body}</AlertDialogDescription>
              )}
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={props.onCancel} className="min-w-24">
                {props.cancelText ?? "No"}
              </AlertDialogCancel>
              <AlertDialogAction onClick={props.onConfirm} className="min-w-28">
                {props.confirmText ?? "Yes"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </>
        ) : (
          props({
            close,
            open,
            toggleModal,
            value,
          })
        )}
      </AlertDialogContent>
    </AlertDialog>
  );

  return {
    Comp,
    close,
    open,
    toggleModal,
  };
};

export default useModal;
