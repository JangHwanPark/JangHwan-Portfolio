import React from 'react';

interface ProjectProps {
  title: string;
}

const Project: React.FC<ProjectProps> = ({title}) => {
  const date = new Date();
  const dateYear = date.getFullYear()
  const dateMonth = date.getMonth()
  const dateDay = date.getDay()

  return (
    <div className='project-info'>
      {dateYear}.{dateMonth}.{dateDay}
      <hr/>
      {title}
    </div>
  );
};

export default Project;
