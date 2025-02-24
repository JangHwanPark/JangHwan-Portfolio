import { MouseEvent } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  // setTheme: Dispatch<SetStateAction<Theme>>;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}