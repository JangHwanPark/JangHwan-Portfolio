import React from "react";
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  // Todo: 12col or f layout
  return (
    <div className='container'>
      <Outlet/>
    </div>
  )
};

export default Layout;