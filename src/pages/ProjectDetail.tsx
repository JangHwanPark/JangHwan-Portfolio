import { useLocation, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  console.log("🔹 location.state:", location.state);

  const closeModal = () => {
    navigate("/projects"); // 프로젝트 목록 페이지로 이동
  };

  if (!project) {
    console.warn("⚠ 프로젝트 데이터 없음! URL로 직접 접근했을 가능성이 높음.");
    return null;
  }

  return (
    <section className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <article className="my-20 h-auto max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* 프로젝트 타입 및 제목 */}
        <h3 className="text-center text-lg font-semibold text-gray-500">{project.projectType} 프로젝트</h3>
        <h2 className="my-6 text-center text-4xl font-bold">{project.name}</h2>

        {/* 프로젝트 이미지 */}
        <figure className="mb-6">
          <img src="/src/assets/images/p4.webp" alt={project.name} className="w-full h-96 rounded-lg shadow-md" />
        </figure>

        {/* 프로젝트 정보 (날짜, 설명) */}
        <div className="mb-6 text-gray-700">
          <p className="text-sm text-gray-500">{project.dateRange}</p>
          <p className="mt-2">{project.description}</p>
        </div>

        {/* 프로젝트 주요 정보 (과제 & 기능) */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">과제</h4>
            <ul className="list-disc list-inside text-gray-700">
              {project.challenges.map((challenge: string, index: number) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">주요 기능</h4>
            <ul className="list-disc list-inside text-gray-700">
              {project.features.map((feature: string, index: number) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* 프로젝트 상태 */}
        <div className="mt-6 text-gray-700">
          <h4 className="text-lg font-semibold">현재 상태</h4>
          <p>{project.statusDetail}</p>
        </div>

        {/* 기술 스택 및 협업 도구 */}
        <div className="mt-6 grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold">사용한 기술</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((item: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">{item}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">협업 도구</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.collaborationTools.map((tool: string, index: number) => (
                <span key={index} className="px-3 py-1 bg-blue-200 rounded-full text-sm">{tool}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 닫기 버튼 */}
        <div className="mt-8 flex justify-center">
          <button onClick={closeModal} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            닫기
          </button>
        </div>
      </article>
    </section>
  );
};

export default ProjectDetail;