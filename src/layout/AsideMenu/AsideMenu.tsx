import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const icon = [
  { href: "https://github.com/JangHwanPark", icon: <FaGithub className="w-6 h-6" /> },
  { href: "https://www.linkedin.com/in/%EC%9E%A5%ED%99%98-%EB%B0%95-b8259a198/", icon: <FaLinkedin className="w-6 h-6" /> },
];

const AsideMenu = () => {
  return (
    <nav className='w-fit flex flex-col gap-5 justify-center fixed bottom-1/12 lg:left-5 right-3 md:right-5'>
      {/*<p className='rotate-270'>{pathName}</p>*/}
      <ul className='w-full flex gap-5 flex-col'>
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