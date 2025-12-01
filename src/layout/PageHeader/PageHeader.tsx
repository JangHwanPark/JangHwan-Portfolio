import { ReactNode } from 'react';

const PageHeader = ({ title = '', children }: { title: string; children?: ReactNode }) => {
  return (
    <header className="py-16">
      <h2 className="mt-10 mb-14 text-6xl font-bold">{title}</h2>
      <p className="text-xl leading-10">{children}</p>
    </header>
  );
};

export default PageHeader;
