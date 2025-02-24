import { ReactNode } from "react";

const PageHeader = ({
  title = '',
  children,
} : {
  title: string,
  children?: ReactNode,
}) => {
  return (
    <header className='py-10'>
      <h2 className='mb-5 text-4xl font-bold'>{title}</h2>
      <p className='text-xl leading-8'>{children}</p>
    </header>
  );
};

export default PageHeader;