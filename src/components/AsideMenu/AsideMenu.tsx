import { Link } from "react-router-dom";
//import clsx from "clsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const icon = [
  { href: "/", icon: <FaGithub className="w-6 h-6" /> },
  { href: "/", icon: <FaLinkedin className="w-6 h-6" /> },
];

/*interface AsideMenu {
  href: string;
  icon?: ReactNode;
}

interface AsideMenuProps {
  items?: AsideMenu[];
  className?: string;
}*/

const AsideMenu = () => {
 //const listClass = clsx('flex gap-5 flex-col');
  return (
    <nav className='flex flex-col gap-5 justify-center fixed bottom-1/12 left-10'>
      <p className='rotate-270'>test</p>
      <ul className='flex gap-5 flex-col'>
        {icon.map((item, index) => (
          <li key={index}>
            <Link to={item.href}>{item.icon}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AsideMenu;