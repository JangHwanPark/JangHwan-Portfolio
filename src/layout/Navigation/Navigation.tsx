import { ReactNode } from "react";
import MenuItem from "../../components/MenuItem/MenuItem";

interface Navbar {
  href: string;
  title?: string;
  icon?: ReactNode;
}

interface NavigationProps {
  items: Navbar[];
  className?: string;
  type?: 'link' | 'nav';
}

const Navigation = ({
  items,
  className,
  type = 'link'
}: NavigationProps) => {
  return (
    <nav className={`${className}`}>
      <ul className='flex justify-between gap-5'>
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