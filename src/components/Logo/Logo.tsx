import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <h1 className="text-md xs:text-lg dark:hover:text-h-yellow font-bold md:text-xl">
      <Link to="/about">japark.dev</Link>
    </h1>
  );
};

export default Logo;
