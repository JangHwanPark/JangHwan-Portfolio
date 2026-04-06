import { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProjectCard = memo(({ project }: { project: ProjectsType }) => {
  const [showModal, setShowModal] = useState(false);
  const isInProgress = project.status === 'INPROGRESS';

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
      ScrollTrigger.getAll().forEach((st) => st.disable());
      return () => {
        document.body.style.overflow = '';
        ScrollTrigger.getAll().forEach((st) => st.enable());
      };
    }
  }, [showModal]);

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
        {isInProgress ? (
          <button
            onClick={() => setShowModal(true)}
            className="relative cursor-pointer"
            aria-label={`${project.name} 프로젝트 정보 보기`}
          >
            <img src={project.thumbnail ?? '/images/p2.webp'} alt={project.name} width={500} height={300} className="max-h-[250px] w-full lg:max-h-[300px]" />
          </button>
        ) : (
          <Link
            to={`/projects/${project.id}`}
            className="relative"
            aria-label={`${project.name} 프로젝트 상세 보기`}
          >
            <img src={project.thumbnail ?? '/images/p2.webp'} alt={project.name} width={500} height={300} className="max-h-[250px] w-full lg:max-h-[300px]" />
          </Link>
        )}
      </figure>

      {/* 진행 중 프로젝트 모달 */}
      {showModal && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="mx-4 max-w-sm rounded-2xl border border-white/10 bg-[#1a1a1a] px-8 py-10 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-3 text-xl font-bold text-white">{project.name}</h3>
            <p className="mb-6 text-base leading-relaxed text-slate-300">
              지금 이 프로젝트에서 열심히 활약하고 있어요!<br />
              조금만 기다려 주세요, 곧 멋진 결과물로 찾아올게요!!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="rounded-full border border-white/15 bg-white/10 px-6 py-2 text-sm text-white transition-colors hover:bg-white/20"
            >
              닫기
            </button>
          </div>
        </div>,
        document.body
      )}
    </li>
  );
});

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;
