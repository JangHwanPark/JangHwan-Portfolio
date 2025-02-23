import { Logo } from "../../components";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <header className='w-full flex justify-between'>
      <Logo/>
      <Navigation/>
      {/* 아이콘 추가 예정 */}
    </header>
  );
};

export default Header;
