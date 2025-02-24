import React from "react";
import { Outlet } from 'react-router-dom';
import { Footer, Header } from "../layout";
import { ThemeProvider } from "../providers/ThemeProvider";
import clsx from "clsx";

const RootLayout: React.FC = () => {
  const classes = clsx(
    'container mx-auto w-full',
    'min-h-[calc(100vh-124px)]');

  const dark = clsx(
    'text-gray-800 bg-white',
    'dark:bg-gray-800 dark:text-white');

  return (
    <ThemeProvider>
      <div className={dark}>
        <Header/>
        <main className={classes}>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
  )
};

export default RootLayout;