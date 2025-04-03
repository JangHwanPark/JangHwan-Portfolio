import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h1 className='text-md xs:text-lg md:text-xl font-bold dark:hover:text-h-yellow'>
      <Link to='/about'>japark.dev</Link>
    </h1>
  );
};

export default Logo;