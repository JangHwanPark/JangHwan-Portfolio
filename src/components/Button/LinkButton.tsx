import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

const LinkButton = ({
  title,
  href,
  className,
  children,
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
        'flex items-center gap-3 rounded-md px-6 py-3 text-lg font-semibold transition-all',
        'bg-[#F4B400] text-white shadow-md hover:bg-[#E6A700]',
        className
      )}
    >
      {children && <span className="text-xl">{children}</span>}
      <span>{title}</span>
    </Link>
  );
};

export default LinkButton;
