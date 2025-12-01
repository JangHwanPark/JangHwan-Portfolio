import { cva } from "class-variance-authority";

export const bulletVariants = cva("", {
  variants: {
    size: {
      sm: "h-1.5 w-1.5",
      md: "h-2 w-2",
      lg: "h-2.5 w-2.5",
    },
    color: {
      neutral: "bg-slate-400",
      primary: "bg-emerald-400",
      danger: "bg-rose-400",
      info: "bg-sky-400",
    },
    rounded: {
      full: "rounded-full",
      sm: "rounded-sm",
    },
  },
  defaultVariants: {
    size: "md",
    color: "neutral",
    rounded: "full",
  },
});
