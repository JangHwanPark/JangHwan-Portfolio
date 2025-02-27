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
    return <div>잘못된 접근입니다. <button onClick={closeModal}>돌아가기</button></div>;
  }

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg w-96">
        <h2 className="text-2xl font-bold">{project.name}</h2>
        <p>프로젝트 상세 내용...</p>
        <button onClick={closeModal} className="mt-4 p-2 bg-red-500 text-white rounded">닫기</button>
      </div>
    </div>
  );
};

export default ProjectDetail;