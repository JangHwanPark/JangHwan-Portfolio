// TODO: 디에듀 프로젝트 추가
const TEAM: ProjectsType[] = [
  {
    id: 2,
    status: "COMPLETED",
    titleImg: "",
    name: "Teamming",
    dateRange: "2024.01 ~ 진행 중",
    description: "팀 프로젝트 관리를 위한 협업 플랫폼. 팀원 모집, 일정 공유, 업무 분배 기능을 제공.",
    projectType: "TEAM",
    role: ["Frontend Developer", "Backend Developer"],
    teamSize: 6,
    github: "https://github.com/Teamingg/Frontend",
    stack: ["NextJS", "TypeScript", "Tailwind", "Figma", "Git"],
    responsibilities: ["UI 개발", "DB 설계", "OAuth 로그인 구현"],
    features: ["팀원 모집 시스템", "일정 공유 기능", "댓글 & 알림 시스템"],
    challenges: ["JWT 인증 시스템 구축", "WebSocket을 활용한 실시간 알림"],
    collaborationTools: ["JIRA", "Slack", "Figma"],
  },
  {
    id: 8,
    status: "COMPLETED",
    titleImg: "",
    name: "DA (DataArtist)",
    dateRange: "2023.03 ~ 2023.11",
    description: `
    안산대학교 내에서 학생들이 빠르고 간편하게 식권을 구매하고 사용할 수 있도록 하는 온라인 결제 웹 애플리케이션입니다.
    기존 오프라인 식권 구매 시 30m 이상 소요되는 불편함을 해결하기 위해 개발되었습니다.
    아임포트를 활용한 결제 시스템을 적용하였으며, QR 코드 기반의 식권 스캔 기능을 통해 빠른 결제를 지원합니다.
    본 프로젝트는 컴퓨터 정보학회 논문으로 투고되었으며, 졸업작품 경진대회에서 2등(우수상)을 수상하였습니다.
  `,
    projectType: "TEAM",
    role: ["Fullstack Developer"],
    teamSize: 3,
    github: "https://github.com/Team-DataArtist/AU_CampusPay",
    stack: ["NextJS", "TypeScript", "Tailwind", "MongoDB", "Git"],
    responsibilities: [
      "Next.js 기반으로 온라인 결제 웹 애플리케이션 개발",
      "아임포트를 활용한 온라인 결제 시스템 구축",
      "QR 코드 기반 식권 스캔 기능 구현",
      "MongoDB를 활용한 결제 내역 저장 및 관리",
      "반응형 UI 및 사용자 친화적 UX 설계"
    ],
    features: [
      "아임포트를 활용한 온라인 결제 시스템",
      "QR 코드 스캔을 통한 빠른 식권 사용",
      "학생들의 결제 내역 조회 및 관리 기능",
      "관리자를 위한 결제 데이터 분석 대시보드"
    ],
    challenges: [
      "아임포트 결제 API 연동 및 결제 프로세스 최적화",
      "QR 코드 스캔 기능을 웹 브라우저에서 안정적으로 구현",
      "MongoDB를 활용한 데이터 모델링 및 성능 최적화"
    ],
    testCoverage: "Vitest + React Testing Library (Coverage 목표: 85%)",
    collaborationTools: ["GitHub", "Notion", "Figma"],
    paperLink: "https://example.com/research-paper",
    awards: ["졸업작품 2등 (우수상)", "컴퓨터 정보학회 논문 투고"],
    statusDetail: "논문 투고 및 졸업작품 수상 완료, 실사용 검토 단계"
  },
]

const PERSONAL: ProjectsType[] = [
  {
    id: 1,
    status: "CANCELLED",
    titleImg: "",
    name: "Titov (Visionlife)",
    dateRange: "2023.02 ~ 2023.06",
    description: "친환경 잉크를 제조하는 Visionlife의 웹 플랫폼",
    role: ["Frontend Developer"],
    projectType: "TEAM",
    teamSize: 4,
    github: "https://github.com/TitovCompany/Visionlife_FE",
    demo: "https://mystagingserver.store/",
    stack: ["React", "TypeScript", "Tailwind", "Figma", "Git"],
    features: ["제품 상세 페이지", "결제 시스템", "반응형 디자인"],
    challenges: ["SEO 최적화", "Next.js SSR 활용", "Lazy Loading 적용"],
    collaborationTools: ["Notion", "Figma", "GitHub Projects"],
    statusDetail: "비즈니스 방향 변경으로 중단됨",
    responsibilities: [],
  },
  {
    id: 4,
    status: "INPROGRESS",
    titleImg: "",
    name: "React Components",
    dateRange: "2024.02 ~ 진행 중",
    description: `
    GSAP 애니메이션이 적용된 UI 컴포넌트를 모듈화하여 재사용성을 높이고 유지보수를 간소화하는 프로젝트입니다.
    Tailwind CSS 기반으로 디자인 시스템을 구축하였으며, React Context 및 Provider를 활용하여 상태 관리를 최소화하였습니다.
    Storybook을 통해 UI 문서화를 진행 중이며, Vitest & React Testing Library를 이용해 컴포넌트 테스트를 진행하고 있습니다.
    향후 NPM 패키지로 배포하여 오픈소스 라이브러리로 활용할 계획입니다.
  `,
    projectType: "PERSONAL",
    role: ["Frontend Developer"],
    github: "https://github.com/JangHwanPark/react-components",
    stack: ["React", "TypeScript", "Tailwind", "GSAP", "Storybook", "Vitest", "React Testing Library", "Git"],
    responsibilities: [
      "GSAP 애니메이션이 적용된 UI 컴포넌트 개발",
      "재사용성을 고려한 컴포넌트 설계 및 최적화",
      "Tailwind CSS 기반 스타일링 적용",
      "Storybook을 활용한 UI 문서화",
      "Vitest & React Testing Library를 이용한 테스트 자동화"
    ],
    features: [
      "GSAP 애니메이션이 적용된 모달, 버튼, 탭 네비게이션 등",
      "다크 모드 및 접근성(A11Y) 지원",
      "React Context 및 Provider를 활용한 상태 관리 최소화",
      "스토리북을 활용한 UI 가이드 제공",
      "컴포넌트 테마 커스텀 기능 지원"
    ],
    challenges: [
      "GSAP 애니메이션을 React 컴포넌트에 최적화하여 적용",
      "컴포넌트 확장성을 고려한 props 설계",
      "다크 모드 및 접근성을 고려한 UI 개발",
      "Vitest & React Testing Library를 활용한 테스트 커버리지 확보"
    ],
    testCoverage: "Vitest + React Testing Library (Coverage 목표: 85%)",
    collaborationTools: ["GitHub", "Notion"],
    npmPackage: "https://www.npmjs.com/package/react-components-library",
    statusDetail: "UI 컴포넌트 개발 진행 중, NPM 패키지로 배포 예정"
  },
]

export const PROJECT = {
  TEAM,
  PERSONAL,
}