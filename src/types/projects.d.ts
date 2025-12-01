// 프로젝트 진행 상태 타입 (고정된 문자열 값만 허용)
type ProjectStatus =
  | 'PLANNED' // 기획 중 (아직 시작되지 않음)
  | 'INPROGRESS' // 진행 중 (개발/운영 중)
  | 'COMPLETED' // 완료됨 (개발 완료 및 배포됨)
  | 'MAINTENANCE' // 유지보수 중 (추가 기능 개발 또는 유지보수 진행 중)
  | 'CANCELLED' // 중단됨 (계획되었으나 취소됨)
  | 'ARCHIVED'; // 종료됨 (더 이상 유지보수되지 않음)

// 프로젝트 유형 타입 (개인 프로젝트 or 팀 프로젝트)
type ProjectType = 'TEAM' | 'PERSONAL';

// 역할 타입 (유연성을 위해 확장 가능)
type RoleType =
  | 'Frontend Developer'
  | 'Backend Developer'
  | 'Fullstack Developer'
  | 'Designer'
  | 'Project Manager'
  | 'QA Engineer'
  | string; // 확장 가능하도록 추가

// 협업 도구 타입 (기본적인 협업 도구 목록)
type CollaborationTool = 'JIRA' | 'Notion' | 'Slack' | 'Figma' | 'GitHub' | 'Trello' | string; // 확장 가능하도록 추가

interface ProjectsType {
  id: number; // 프로젝트의 고유 ID
  status: ProjectStatus; // 프로젝트 상태 (고정된 값만 허용)
  titleImg: string; // 프로젝트 대표 이미지 (썸네일) URL
  name: string; // 프로젝트명
  dateRange: string; // 프로젝트 진행 기간 (예: "2023.01 ~ 2023.07")
  description: string; // 프로젝트 설명

  projectType: ProjectType; // 개인 또는 팀 프로젝트 여부
  role: readonly RoleType[]; // 팀 내에서 맡은 역할 (배열 수정 방지)
  teamSize?: number; // 팀 프로젝트일 경우 팀원 수 (개인 프로젝트일 경우 undefined)

  github: string; // GitHub 저장소 링크
  demo?: string; // 배포된 사이트 URL (있을 경우)
  stack: readonly string[]; // 사용한 기술 스택 (배열 수정 방지)

  responsibilities: readonly string[]; // 프로젝트 내에서 수행한 주요 업무
  features: readonly string[]; // 프로젝트에서 구현한 주요 기능
  challenges?: readonly string[]; // 해결한 문제 또는 개선 사항

  collaborationTools?: readonly CollaborationTool[]; // 협업 도구 사용 여부
  testCoverage?: string; // 테스트 진행 여부 및 커버리지 (예: "Jest 80%")

  paperLink?: string; // 프로젝트와 관련된 논문 링크 (있을 경우)
  statusDetail?: string; // 프로젝트 상태에 대한 상세 설명 (예: "클라이언트 요청으로 중단됨")
  awards?: readonly string[]; // 프로젝트와 관련된 수상 이력 (예: ["졸업작품 2등", "해커톤 최우수상"])
  npmPackage?: string; // NPM 패키지 배포 링크 (있을 경우)
}
