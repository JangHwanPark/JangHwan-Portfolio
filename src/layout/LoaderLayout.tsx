import { Outlet } from "react-router-dom";

const LoaderLayout = () => {
  return (
    <div className='bg-dark-bg'>
      <Outlet/>
    </div>
  );
};

export default LoaderLayout;