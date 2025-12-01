import { FaGithub, FaLink } from 'react-icons/fa';
import LinkButton from '../components/Button/LinkButton';
import { MdCloseFullscreen } from 'react-icons/md';
import { useScrollLock } from '@/shared';
import { TechStackList } from '@/widgets/project-viewer/ui';

interface ProjectDetailProps {
  project?: ProjectsType;
  onClose?: () => void;
}

const ProjectDetail = ({ project, onClose }: ProjectDetailProps ) => {
  useScrollLock(!!project);

  if (!project) return null;

  return (
    <section className="fixed inset-0 z-[60] flex justify-center items-center bg-black/60 backdrop-blur-md p-4 sm:p-8 animate-fadeIn" onClick={onClose}>
      {/* 모달 본문 */}
      <article
        className="modal-content relative w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800 text-slate-100 shadow-2xl max-h-full overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 버튼 */}
        <div className="mb-10 flex justify-end text-primary">
          <button onClick={onClose} className="px-2 py-2 cursor-pointer">
            <MdCloseFullscreen size={20} />
          </button>
        </div>

        {/* 프로젝트 이미지 */}
        <figure className="w-full h-96">
          <img
            src="/images/p4.webp"
            alt={project.name}
            className="w-full h-full rounded-lg shadow-md"
          />
        </figure>

        {/* 프로젝트 정보 */}
        <div className="mt-10">
          {/* 프로젝트 상태 */}
          {/*<p className="text-primary">{project.status}</p>*/}
          {/* 프로젝트 타입 및 제목 */}
          <h2 className="mb-2 text-left text-4xl font-bold text-primary">
            {project.name} <span className="text-xl">({project.projectType} 프로젝트)</span>
          </h2>

          {/* 프로젝트 정보 (날짜, 설명) */}
          <div className="mb-6 text-gray-700">
            <p className="text-sm text-gray-500">{project.dateRange}</p>
            <p className="mt-2 max-w-xl">{project.description}</p>
          </div>

          {/* 프로젝트 정보 페이지로 이동 */}
          <div className="w-full my-5 flex justify-center gap-10">
            <LinkButton href="/" title="Live Demo">
              <FaLink />
            </LinkButton>
            <LinkButton href="/" title="Source Code">
              <FaGithub />
            </LinkButton>
          </div>
        </div>

        {/* 프로젝트 주요 정보 (과제 & 기능, 기술 스택 및 협업 도구) */}
        <div className="grid grid-cols-2 grid-rows-3 gap-8 text-primary">
          {/* 과제 */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">과제</h3>
            <ul className="list-disc list-inside">
              {project.challenges?.map((challenge: string, index: number) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          {/* 주요 기능 */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">주요 기능</h3>
            <ul className="list-disc list-inside">
              {project.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* 기술 스택 (하단 전체) */}
          <div className="row-start-2 col-span-2">
            <h3 className="text-lg font-semibold">사용한 기술</h3>
            <TechStackList stack={project.stack} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProjectDetail;
