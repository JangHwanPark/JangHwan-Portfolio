import React from "react";
import { Outlet } from 'react-router-dom';
import { Footer, Header } from "../layout";

const RootLayout: React.FC = () => {
  return (
    <div className='w-full h-full'>
      <Header/>
      <main className='container mx-auto w-full h-full'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
};

export default RootLayout;