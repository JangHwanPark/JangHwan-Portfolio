import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const icon = [
  { href: 'https://github.com/JangHwanPark', icon: <FaGithub className="h-6 w-6" /> },
  {
    href: 'https://www.linkedin.com/in/%EC%9E%A5%ED%99%98-%EB%B0%95-b8259a198/',
    icon: <FaLinkedin className="h-6 w-6" />,
  },
];

const AsideMenu = () => {
  return (
    <nav className="fixed right-3 bottom-1/12 flex w-fit flex-col justify-center gap-5 md:right-5 lg:left-5">
      {/*<p className='rotate-270'>{pathName}</p>*/}
      <ul className="flex w-full flex-col gap-5">
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
