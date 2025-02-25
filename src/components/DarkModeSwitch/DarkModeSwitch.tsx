import { useTheme } from "../../providers/ThemeProvider";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import clsx from "clsx";

const DarkModeSwitch = () => {
  const { theme, handleClick } = useTheme();
  const value = theme === "light" ? "dark" : "light";

  const switchClasses = clsx(
    'w-6 h-6 rounded-full flex items-center justify-center',
    'transform transition-all duration-300',
    theme === "dark" ? "translate-x-7 bg-gray-700" : "translate-x-1 bg-white");
  const btnClass = clsx('w-5 h-5');

  return (
    <button
      role="button"
      data-theme={value}
      className='w-14 h-7 flex items-center cursor-pointer bg-gray-500 rounded-full transition duration-300'
      onClick={(e) => handleClick(e)}>
      <div className={switchClasses}>
        {theme === "dark"
          ? <MdOutlineDarkMode className={btnClass}/>
          : <MdOutlineLightMode className={btnClass}/>}
      </div>
    </button>
  );
};

export default DarkModeSwitch;