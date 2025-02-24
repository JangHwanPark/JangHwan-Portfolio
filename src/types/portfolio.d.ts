// PLANNED	기획 중	프로젝트가 아직 시작되지 않음
// INPROGRESS	진행 중	프로젝트가 개발/운영 중
// COMPLETED	완료됨	프로젝트가 개발 완료 및 배포됨
// MAINTENANCE	유지보수 중	추가 기능 개발 또는 유지보수
// CANCELLED	중단됨	프로젝트가 계획되었으나 취소됨
// ARCHIVED	종료됨	더 이상 유지보수되지 않는 프로젝트
interface PortfolioType {
  status: "PLANNED" | "INPROGRESS" | "COMPLETED" | "MAINTENANCE" | "CANCELLED" | "ARCHIVED";
  titleImg: string;
  name: string;
  date: string;
  description: string;
  projectType: "TEAM" | "PERSONAL";
  position: "FrontEnd" | "BackEnd" | "Fullstack" | "Designer";
  github: string;
  demo: string | null;
}