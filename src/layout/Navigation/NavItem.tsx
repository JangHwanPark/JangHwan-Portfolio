import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

interface MenuItemProps {
  href: string;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const NavItem = ({ href, children, onClick }: MenuItemProps) => {
  return (
    <li className={clsx('md:font-base p-0 text-center text-5xl font-semibold md:text-lg')}>
      <NavLink
        to={href}
        onClick={onClick}
        className={({ isActive }) =>
          clsx(
            'relative flex h-full w-full items-center justify-center pb-1',
            'after:bg-c-yellow after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:content-[""]',
            'after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-120',
            isActive && 'active font-semibold after:scale-x-120'
          )
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default NavItem;
