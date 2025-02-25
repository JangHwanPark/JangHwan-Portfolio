import { ReactNode } from "react";
import MenuItem from "../../components/MenuItem/MenuItem";
import clsx from "clsx";

interface Navbar {
  href: string;
  title?: string;
  icon?: ReactNode;
}

interface NavigationProps {
  items: Navbar[];
  className?: string;
  type?: 'link' | 'nav' | 'icon';
}

const Navigation = ({
  items,
  className,
  type = 'link'
}: NavigationProps) => {
  const listClass = clsx(
    'flex gap-5',
    type !== 'icon' && 'flex-row justify-between',
    type === 'icon' && 'flex-col');

  return (
    <nav className={className}>
      <ul className={listClass}>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            href={item.href}
            type={type}>
            {item.icon}
            {item.title}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;