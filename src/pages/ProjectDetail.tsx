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
    <section className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
      <div className="my-32 h-11/12 w-8/12 bg-white p-5 rounded-lg">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <p>프로젝트 상세 내용...</p>
        <button onClick={closeModal} className="mt-4 p-2 bg-red-500 text-white rounded">닫기</button>
      </div>
    </section>
  );
};

export default ProjectDetail;