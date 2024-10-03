import { useState } from "react";

export const useBoolean = (defaultValue: boolean = false) => {
  const [value, setValue] = useState(defaultValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  const toggle = () => setValue((prev) => !prev);

  const resetToDefault = () => setValue(defaultValue);

  return {
    value,
    setValue,
    setTrue,
    setFalse,
    toggle,
    resetToDefault,
  };
};
