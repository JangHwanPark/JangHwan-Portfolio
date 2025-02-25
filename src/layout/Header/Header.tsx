import { Logo } from "../../components";
import Navigation from "../Navigation/Navigation";
import DarkModeSwitch from "../../components/DarkModeSwitch/DarkModeSwitch";

const navbar = [
  {href: "/", title: 'About'},
  {href: "/skills", title: 'Skills'},
  {href: "/project", title: 'Project'},
];

const Header = () => {
  return (
    <header className='w-full pb-5'>
      <div className='pt-5 px-10 flex justify-between items-center'>
        <Logo/>
        <Navigation
          className='w-full max-w-xs'
          items={navbar}
          type='nav'/>
        <DarkModeSwitch/>
      </div>
    </header>
  );
};

export default Header;