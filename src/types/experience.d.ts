interface Experience {
  id: number; // 고유 ID
  title: string; // 직무명, 프로젝트명, 인턴십명
  project?: string;
  company?: string; // 회사명 (선택 사항)
  period: string; // 근무/진행 기간 (예: 2023.06 ~ 2024.02)
  description: string; // 업무 내용, 역할
  skills: string[]; // 사용한 기술 스택
  link?: string; // 프로젝트나 회사 사이트 링크 (선택 사항)
  achievements?: string[]; // 주요 성과 (선택 사항)
}