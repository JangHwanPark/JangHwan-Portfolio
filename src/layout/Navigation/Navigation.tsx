import NavItem from "./NavItem";
import clsx from "clsx";

interface Navbar {
  href: string;
  title?: string;
}

interface NavigationProps {
  items: Navbar[];
  className?: string;
}

const Navigation = ({
  items,
  className,
}: NavigationProps) => {
  const navbarClass = clsx(
    'w-full max-w-xs lg:max-w-xl', className);
  return (
    <nav className={navbarClass}>
      <ul className='flex gap-5 flex-row justify-between'>
        {items.map((item, index) => (
          <NavItem
            key={index}
            href={item.href}>
            {item.title}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;