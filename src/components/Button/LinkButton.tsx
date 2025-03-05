import { ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const LinkButton = ({
  title,
  href,
  className,
  children
}: {
  title: string;
  href: string;
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <Link
      to={href}
      className={clsx(
        "px-6 py-3 rounded-md text-lg font-semibold flex items-center gap-3 transition-all",
        "bg-[#F4B400] text-white hover:bg-[#E6A700] shadow-md",
        className
      )}
    >
      {children && <span className="text-xl">{children}</span>}
      <span>{title}</span>
    </Link>
  );
};

export default LinkButton;