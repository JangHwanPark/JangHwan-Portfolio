import clsx from "clsx";
import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

const Title = ({
  children,
  as: Heading = "h2", className }
: TitleProps) => {
  const baseClass = clsx(
    "font-bold text-4xl lg:text-5xl 2xl:text-7xl leading-10 lg:leading-14 xl:leading-[70px]",
    "bg-gradient-to-b dark:from-[#F4B400] dark:to-white bg-clip-text dark:text-transparent",
    className
  );

  return (
    <Heading className={baseClass}>
      {children}
    </Heading>
  );
};

export default Title;