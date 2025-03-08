import { Link } from "react-router-dom";

const ProjectCard = ({
  isModal,
  project,
  onSelectProject
} : {
  isModal: boolean;
  project: ProjectsType;
  onSelectProject?: (project: ProjectsType | null) => void;
}) => {
  // h-[860px] lg:h-[904px] xl:h-[1024px]
  return (
    /* w-[350px] md:w-[600px] */
    <li className='w-[600px] py-10 p-6 border-r flex flex-col items-center justify-start gap-6'>
      {/* 프로젝트 헤더 */}
      <div className='w-full'>
        <header className='w-full my-10 flex items-center justify-between'>
          <h3 className='text-3xl font-semibold'>
            0{String(project.id)}.
          </h3>
          <div className='text-end'>
            <h4 className='text-xl font-semibold'>{project.name}</h4>
            <p>웹 애플리케이션</p>
          </div>
        </header>
        <div className='mb-10'>
          <h4 className='mb-2 text-xl font-semibold'>Tools and features</h4>
          <div className='flex flex-wrap gap-3'>
            {project.stack.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      {/* 프로젝트 이미지 (모달 페이지로 출력) */}
      <figure className="w-full flex justify-center">
        <Link to={`/projects/${project.id}`} state={{ modal: isModal, project:project }} onClick={() => onSelectProject?.(project)} className='relative'>
          <img src="/src/assets/images/p2.webp" alt="" className='w-full max-h-[250px] lg:max-h-[300px]'/>
        </Link>
      </figure>
    </li>
  );
};

export default ProjectCard;