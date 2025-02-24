import React from "react";
import { Outlet } from 'react-router-dom';
import { Footer, Header } from "../layout";

const RootLayout: React.FC = () => {
  return (
    <div className='w-full min-h-screen'>
      <Header/>
      <main className='container mx-auto w-full min-h-screen'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
};

export default RootLayout;