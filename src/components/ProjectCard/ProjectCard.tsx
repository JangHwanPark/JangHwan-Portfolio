import { memo } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = memo(({ project }: { project: ProjectsType }) => {
  return (
    <li className="flex w-[350px] flex-col items-center justify-start gap-6 border-r p-6 lg:w-[500px]">
      {/* 프로젝트 헤더 */}
      <div className="w-full">
        <header className="my-10 flex w-full items-center justify-between">
          <h3 className="text-3xl font-semibold">0{String(project.id)}.</h3>
          <div className="text-end">
            <h4 className="text-xl font-semibold">{project.name}</h4>
            <p>웹 애플리케이션</p>
          </div>
        </header>
        <div className="mb-10">
          <h4 className="mb-2 text-xl font-semibold">Tools and features</h4>
          <div className="flex flex-wrap gap-3">
            {project.stack.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      {/* 프로젝트 이미지 */}
      <figure className="flex w-full justify-center">
        <Link
          to={`/projects/${project.id}`}
          className="relative"
          aria-label={`${project.name} 프로젝트 상세 보기`}
        >
          <img src="/images/p2.webp" alt={project.name} className="max-h-[250px] w-full lg:max-h-[300px]" />
        </Link>
      </figure>
    </li>
  );
});

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
