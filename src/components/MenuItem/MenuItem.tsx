import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

interface MenuItemProps {
  title?: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
  type?: 'link' | 'nav';
}

const MenuItem = ({
  title,
  href,
  className,
  children,
  type = 'link',
}: MenuItemProps) => {
  const Component = type === 'nav' ? NavLink : Link;
  const classes = clsx('p-0', className);
  return (
    <li className={classes}>
      {children ? (
        // 아이콘만 클릭 가능하도록 구현
        <Component to={href}>
          {children}
        </Component>
      ) : (
        // 기본적으로 텍스트 링크
        <Component to={href}>
          {title}
        </Component>
      )}
    </li>
  );
};

export default MenuItem;