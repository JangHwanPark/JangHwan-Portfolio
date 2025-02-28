import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <h1 className='text-md md:text-xl font-bold'>
      <Link to='/'>japark.dev</Link>
    </h1>
  );
};

export default Logo;