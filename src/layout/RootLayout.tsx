// import { useState } from "react";
import { Outlet } from 'react-router-dom';
import { Footer, Header, Navigation } from "../layout";
import { ThemeProvider } from "../providers/ThemeProvider";
import clsx from "clsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import Preloader from "../components/Preloader/Preloader";

const iconNavbar  = [
  {href: '/', icon: <FaGithub className='w-6 h-6'/>},
  {href: '/', icon: <FaLinkedin className='w-6 h-6'/>}
];

const RootLayout = () => {
  /*const [complete, setComplete] = useState(false);*/

  const classes = clsx(
    'container mx-auto w-full',
    'min-h-[calc(100vh-132px)]');

  const dark = clsx(
    'relative',
    'text-gray-800 bg-white',
    'dark:bg-gray-800 dark:text-white');

  return (
    <ThemeProvider>
     {/* <Preloader setComplete={setComplete}/>
      {complete && (*/}
        <div className={dark}>
          <Header/>
          <main className={classes}>
            <Outlet/>
          </main>
          <Navigation
            items={iconNavbar}
            type='icon'
            className='absolute top-10/12 left-12'/>
          <Footer/>
        </div>
      {/*)}*/}
    </ThemeProvider>
  )
};

export default RootLayout;