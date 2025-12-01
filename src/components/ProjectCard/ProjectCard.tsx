import { Link } from 'react-router-dom';

const ProjectCard = ({
  isModal,
  project,
  onSelectProject,
}: {
  isModal: boolean;
  project: ProjectsType;
  onSelectProject?: (project: ProjectsType | null) => void;
}) => {
  // h-[860px] lg:h-[904px] xl:h-[1024px]
  return (
    /* w-[350px] md:w-[600px] py-10 */
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
      {/* 프로젝트 이미지 (모달 페이지로 출력) */}
      <figure className="flex w-full justify-center">
        <Link
          to={`/projects/${project.id}`}
          state={{ modal: isModal, project: project }}
          onClick={() => onSelectProject?.(project)}
          className="relative"
        >
          <img src="/images/p2.webp" alt="" className="max-h-[250px] w-full lg:max-h-[300px]" />
        </Link>
      </figure>
    </li>
  );
};

export default ProjectCard;
