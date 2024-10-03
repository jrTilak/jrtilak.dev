import { useTheme } from "next-themes";

export const useAppTheme = () => {
  const { setTheme: setTh, theme, ...rest } = useTheme();

  const toggleTheme = () => {
    console.log("toggleTheme");
    setTh(theme === "dark" ? "light" : "dark");
  };

  const setTheme = (theme: "dark" | "light" | "system") => {
    setTh(theme);
  };

  return {
    toggleTheme,
    setTheme,
    theme,
    ...rest,
  };
};
