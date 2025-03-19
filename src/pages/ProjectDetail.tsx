import { FaGithub, FaLink } from "react-icons/fa";
import LinkButton from "../components/Button/LinkButton";
import { MdCloseFullscreen } from "react-icons/md";
import { useEffect } from "react";
import { skills } from "../data";

const ProjectDetail = ({
                         project,
                         onClose,
                       }: {
  project?: ProjectsType;
  onClose?: () => void;
}) => {
  useEffect(() => {
    const preventScroll = (e: Event) => {
      // 모달 내부에서는 스크롤 허용
      if ((e.target as HTMLElement)?.closest(".modal-content")) return;
      e.preventDefault();
    };

    // 스크롤 막기
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    document.addEventListener("touchmove", preventScroll, { passive: false });
    document.addEventListener("wheel", preventScroll, { passive: false });

    return () => {
      // 스크롤 복원
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";

      document.removeEventListener("touchmove", preventScroll);
      document.removeEventListener("wheel", preventScroll);
    };
  }, []);

  // 기술과 협업 도구를 skills 배열에서 찾아 아이콘 매칭하는 함수
  const findSkill = (name: string) => {
    return skills.find((skill) => skill.name.toLowerCase().includes(name.toLowerCase()));
  };

  if (!project) {
    console.warn("⚠ 프로젝트 데이터 없음! URL로 직접 접근했을 가능성이 높음.");
    return null;
  }

  return (
    <section className="fixed inset-0 bg-black/50 grid grid-cols-12 p-4" onClick={onClose}>
      {/* 내부 클릭 시 닫히지 않도록 설정 */}
      <article
        className="modal-content bg-white shadow-lg rounded-lg p-8 col-start-4 col-end-10 my-32 overflow-y-auto max-h-screen"
        onClick={(e) => e.stopPropagation()}>
        {/* 닫기 버튼 */}
        <div className="mb-10 flex justify-end text-primary">
          <button onClick={onClose} className="px-2 py-2 cursor-pointer">
            <MdCloseFullscreen size={20} />
          </button>
        </div>

        {/* 프로젝트 이미지 */}
        <figure className="w-full h-96">
          <img src="/images/p4.webp" alt={project.name} className="w-full h-full rounded-lg shadow-md" />
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
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">과제</h3>
            <ul className="list-disc list-inside">
              {project.challenges?.map((challenge: string, index: number) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-2">주요 기능</h3>
            <ul className="list-disc list-inside">
              {project.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="row-start-2 col-span-2">
            <h3 className="text-lg font-semibold">사용한 기술</h3>
            <div className="grid grid-cols-5 justify-items-center mt-2">
              {project.stack.map((tech: string, index: number) => {
                const skill = findSkill(tech);
                return (
                  <div key={index} className='col-span-1 flex flex-col items-center justify-center flex-wrap gap-2'>
                    <span key={index} className={`w-16 px-3 py-1 rounded-full text-sm flex items-center gap-1 ${skill?.color || "text-gray-500"}`}>
                    {skill?.icon || "⚙"}
                  </span>
                    <span>
                       {tech}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ProjectDetail;