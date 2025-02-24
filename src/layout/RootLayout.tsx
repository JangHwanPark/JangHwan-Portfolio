import React from "react";
import { Outlet } from 'react-router-dom';
import { Footer, Header } from "../layout";
import clsx from "clsx";

const RootLayout: React.FC = () => {
  const classes = clsx(
    'container mx-auto w-full',
    'min-h-[calc(100vh-124px)]'
  )
  return (
    <>
      <Header/>
      <main className={classes}>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
};

export default RootLayout;