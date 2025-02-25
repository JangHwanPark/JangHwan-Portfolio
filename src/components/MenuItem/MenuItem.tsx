import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

interface MenuItemProps {
  href: string;
  className?: string;
  children?: ReactNode;
  type?: 'link' | 'nav' | 'icon';
}

const MenuItem = ({
  href,
  className,
  children,
  type = 'link',
}: MenuItemProps) => {
  const itemClass = clsx(
    ' p-0',
    type !== 'icon' && 'w-20 text-lg text-center',
    type === 'icon' && 'w-fit',
    className);

  return (
    <li className={itemClass}>
      {type === 'nav' ? (
        <NavLink
          to={href}
          className={({ isActive }) => clsx(
            'relative w-full h-full flex items-center justify-center pb-1',
            'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500',
            'after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100',
            isActive && 'active font-semibold after:scale-x-100')}>
          {children}
        </NavLink>
      ) : (
        <Link to={href}>
          {children}
        </Link>
      )}
    </li>
  );
};

export default MenuItem;