import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import clsx from "clsx";
// import { useEffect, useState } from "react";

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
  /*const pathMap: { [key: string]: string } = {
    "/": "Home",
    "/about": "About",
    "/skills": "Skills",
    "/projects": "Projects",
    "/experience": "Experience",
  };*/

  /*const location = useLocation();
  const [pathName, setPathName] = useState("메인 페이지");
  console.log(location.pathname);
  useEffect(() => {
    setPathName(pathMap[location.pathname] || "페이지 없음");
  }, [location.pathname])*/

  const asideClass = clsx(
    'flex flex-col gap-5 justify-center fixed bottom-1/12 lg:left-10',
    'right-3 md:right-5');

  return (
    <nav className={asideClass}>
      {/*<p className='rotate-270'>{pathName}</p>*/}
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