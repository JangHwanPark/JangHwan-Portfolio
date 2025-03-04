import { Link } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  stack,
  isModal,
  project
} : {
  index: number;
  name: string;
  stack: readonly string[];
  isModal: boolean;
  project: ProjectsType;
}) => {
  return (
    <li className='w-[350px] md:w-[600px] py-10 p-6 bg-white border-r flex flex-col items-center justify-start gap-6 h-[860px] lg:h-[904px] xl:h-[1024px]'>
      {/* 프로젝트 헤더 */}
      <div className='w-full'>
        <header className='w-full my-10 flex items-center justify-between'>
          <h3 className='text-3xl font-semibold'>0{String(index + 1)}.</h3>
          <div className='text-end'>
            <h4 className='text-xl font-semibold'>{name}</h4>
            <p>웹 애플리케이션</p>
          </div>
        </header>
        <div className='mb-10'>
          <h4 className='mb-2 text-xl font-semibold'>Tools and features</h4>
          <div className='flex flex-wrap gap-3'>
            {stack.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      {/* 프로젝트 이미지 */}
      <figure className="w-full flex justify-center">
        <Link to={`/projects/${name}`} state={{ modal: isModal, project}}>
          <img src="/src/assets/images/p2.webp" alt="" className='w-96 h-36 lg:w-full lg:h-96'/>
        </Link>
      </figure>
    </li>
  );
};

export default ProjectCard;