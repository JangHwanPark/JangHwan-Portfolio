import { Logo } from "../../components";
import Navigation from "../Navigation/Navigation";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
import DarkModeSwitch from "../../components/DarkModeSwitch/DarkModeSwitch";

const navbar = [
  {href: "/", title: 'About'},
  {href: "/skills", title: 'Skills'},
  {href: "/project", title: 'Project'},
];

/*const iconNavbar  = [
  {href: '/', icon: <FaGithub className='w-6 h-6'/>},
  {href: '/', icon: <FaLinkedin className='w-6 h-6'/>}
];*/

const Header = () => {
  return (
    <header className='w-full pb-5'>
      <div className='pt-5 px-10 flex justify-between items-center'>
        <Logo/>
        <Navigation items={navbar} className='w-full max-w-xs'/>
        {/*<Navigation items={iconNavbar} className='w-16 max-w-sm'/>*/}
        <DarkModeSwitch/>
      </div>
    </header>
  );
};

export default Header;