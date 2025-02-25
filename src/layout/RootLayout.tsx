// import { useState } from "react";
import { Outlet } from 'react-router-dom';
import { Footer, Header } from "../layout";
import { ThemeProvider } from "../providers/ThemeProvider";
import clsx from "clsx";
// import Preloader from "../components/Preloader/Preloader";

const RootLayout = () => {
  /*const [complete, setComplete] = useState(false);*/

  const classes = clsx(
    'container mx-auto w-full',
    'min-h-[calc(100vh-132px)]');

  const dark = clsx(
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
          <Footer/>
        </div>
      {/*)}*/}
    </ThemeProvider>
  )
};

export default RootLayout;