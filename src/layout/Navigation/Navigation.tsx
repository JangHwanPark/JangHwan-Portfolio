import MenuItem from "../../components/MenuItem/MenuItem";

interface Navbar {
  href: string;
  title?: string;
  icon?: React.ReactNode;
}

interface NavigationProps {
  items: Navbar[];
  className?: string;
}

const Navigation = ({
  items,
  className
}: NavigationProps) => {
  return (
    <nav className={` ${className}`}>
      <ul className='flex justify-between'>
        {items.map((item, index) => (
          <MenuItem key={index} href={item.href} title={item.title}>
            {item.icon}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;