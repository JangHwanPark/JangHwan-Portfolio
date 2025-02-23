import { Link } from "react-router-dom";

const navbar = [
  {href: "/skills", title: 'Skills'},
  {href: "/portfolio", title: 'Portfolio'},
];

const Navigation = () => {
  return (
    <nav>
      <ul className='flex'>
        {navbar.map((item, index) => (
          <li key={index}><Link to={item.href}>{item.title}</Link></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;