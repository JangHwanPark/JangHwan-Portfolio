import { useTheme } from "../../providers/ThemeProvider";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import clsx from "clsx";

const DarkModeButton = () => {
  const { theme, handleClick } = useTheme();
  const value = theme === "light" ? "dark" : "light";

  const btnClass = clsx('w-full h-full');

  return (
    <button
      role="button"
      data-theme={value}
      className='w-6 h-6 cursor-pointer'
      onClick={(e) => handleClick(e)}>
      {theme === "dark" ? <MdOutlineDarkMode className={btnClass}/> : <MdOutlineLightMode className={btnClass}/>}
    </button>
  );
};

export default DarkModeButton;