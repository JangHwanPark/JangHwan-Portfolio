import React from 'react';

interface ProjectProps {
  project?: never
}

const Project = ({project}: ProjectProps) => {
  console.log(project)
  return (
    <div>

    </div>
  );
};

export default Project;