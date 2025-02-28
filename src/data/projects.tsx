export const projects: ProjectsType[] = [
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
    id: 2,
    status: "INPROGRESS",
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
    id: 3,
    status: "COMPLETED",
    titleImg: "",
    name: "Node-Apis",
    dateRange: "2023.05 ~ 2023.08",
    description: `
    Node.js 기반의 RESTful API 서버 개발 프로젝트로, 사용자 인증, 데이터 저장 및 조회 기능을 제공하는 백엔드 시스템을 구축했습니다.
    JWT 기반 인증을 적용하여 보안성을 강화했으며, API 성능 최적화를 위해 캐싱 및 비동기 데이터 처리를 활용했습니다.
    본 프로젝트는 연구 논문의 일부로 활용되었으며, "JWT 인증을 활용한 RESTful API 보안 강화"라는 제목으로 학회에 투고되었습니다.
  `,
    projectType: "TEAM",
    role: ["Backend Developer", "API Designer"],
    teamSize: 3,
    github: "https://github.com/JangHwanPark/nodejs-apis",
    stack: ["NodeJS", "Express", "MongoDB", "JavaScript", "JWT", "Git"],
    responsibilities: [
      "JWT 기반 사용자 인증 및 세션 관리 구현",
      "MongoDB를 활용한 데이터 저장 및 조회 기능 개발",
      "RESTful API 설계 및 Swagger 문서화",
      "API 성능 최적화를 위한 캐싱 및 비동기 데이터 처리 적용"
    ],
    features: [
      "JWT 인증 시스템",
      "RESTful API 설계",
      "MongoDB CRUD 기능",
      "Swagger를 활용한 API 문서화"
    ],
    challenges: [
      "JWT 기반 인증의 보안 강화 및 토큰 재발급 전략 구현",
      "RESTful API의 응답 속도 최적화를 위한 캐싱 적용",
      "Swagger를 활용한 API 문서화 및 개발자 가이드 작성"
    ],
    testCoverage: "Jest 85% (Unit & Integration Tests)",
    collaborationTools: ["GitHub", "Notion", "Slack"],
    paperLink: "https://example.com/research-paper",
    statusDetail: "논문 투고 완료 및 학회 심사 진행"
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
  {
    id: 5,
    status: "CANCELLED",
    titleImg: "",
    name: "LLK",
    dateRange: "2023.07 ~ 2023.09",
    description: `
    미국 부동산 웹사이트로, 사용자들이 부동산 매물 정보를 검색하고 중개인과 직접 연결될 수 있는 기능을 제공하는 프로젝트였습니다.
    프론트엔드는 React 기반으로 개발되었으며, 백엔드는 Spring Boot를 활용하여 데이터 관리 및 API 설계를 수행했습니다.
    그러나 클라이언트의 요청 및 비즈니스 방향성 변경으로 인해 프로젝트가 중단되었습니다.
  `,
    projectType: "TEAM",
    role: ["Project Leader", "Frontend Developer"],
    teamSize: 2,
    github: "https://github.com/JangHwanPark/llk_client",
    stack: ["React", "TypeScript", "Spring Boot", "MySQL", "Tailwind", "Git"],
    responsibilities: [
      "React 기반 프론트엔드 개발 및 UI/UX 설계",
      "Spring Boot 백엔드와 API 연동",
      "MySQL을 활용한 데이터베이스 설계",
      "반응형 웹 디자인 적용 및 사용자 경험 개선"
    ],
    features: [
      "부동산 매물 검색 기능",
      "부동산 매물 상세 정보 페이지",
      "사용자 로그인 및 인증 (JWT 기반)",
      "중개인과의 채팅 및 문의 기능"
    ],
    challenges: [
      "대규모 부동산 데이터를 효율적으로 관리하기 위한 데이터베이스 설계",
      "Spring Boot와 React 간 API 연동 최적화",
      "사용자 경험을 고려한 UI/UX 디자인 적용"
    ],
    statusDetail: "클라이언트 요청 및 비즈니스 방향 변경으로 프로젝트 중단"
  },
  {
    id: 6,
    status: "COMPLETED",
    titleImg: "",
    name: "React Shopping",
    dateRange: "2023.10 ~ 2023.11",
    description: `
    Lexus(렉서스) 쇼핑몰을 테마로 한 반응형 웹페이지를 개발했습니다.
    React.js를 사용하여 컴포넌트 기반 아키텍처를 구축하였으며, Tailwind CSS를 활용하여 UI 스타일을 적용하였습니다.
    자동차에 대한 개인적인 관심으로 인해 시작한 프로젝트이며, 상품 리스트, 필터링 기능 및 상세 페이지를 포함하여 기본적인 쇼핑몰 UI를 구현했습니다.
  `,
    projectType: "PERSONAL",
    role: ["Frontend Developer"],
    github: "https://github.com/JangHwanPark/react-shopping",
    stack: ["React", "JavaScript", "Tailwind", "Git"],
    responsibilities: [
      "React 기반 반응형 쇼핑몰 UI 개발",
      "Lexus 차량 정보를 활용한 상품 리스트 페이지 구현",
      "다양한 화면 크기에 최적화된 반응형 디자인 적용",
      "컴포넌트 재사용성을 고려한 구조 설계"
    ],
    features: [
      "Lexus 차량 모델별 상품 목록 및 상세 페이지 제공",
      "상품 필터링 및 정렬 기능",
      "반응형 UI 및 모바일 최적화"
    ],
    challenges: [
      "다양한 화면 크기에 대응할 수 있도록 반응형 웹 적용",
      "컴포넌트 간 props 설계 및 상태 관리 최적화",
      "최신 UI 트렌드를 반영한 쇼핑몰 디자인 구축"
    ],
    statusDetail: "개인적인 관심으로 진행한 프로젝트이며, UI 및 반응형 웹 개발 실습을 위한 목적"
  },
  {
    id: 7,
    status: "CANCELLED",
    titleImg: "",
    name: "Attack Web",
    dateRange: "2023.06 ~ 2023.09",
    description: `
    오락실 홈페이지를 Next.js 기반으로 구축하는 프로젝트로, 사용자와 관리자 페이지를 분리하여 개발하였습니다.
    네이버 예약 시스템의 불편함을 개선하고자, 로그인 및 예약 기능을 직접 구현하는 것을 목표로 했습니다.
    그러나 클라이언트(오락실 운영자)의 요청으로 인해 프로젝트가 중단되었습니다.
  `,
    projectType: "PERSONAL",
    role: ["Fullstack Developer"],
    github: "https://github.com/JangHwanPark/attack-web",
    stack: ["NextJS", "TypeScript", "Tailwind", "MongoDB", "NextAuth", "Git"],
    responsibilities: [
      "Next.js 기반으로 사용자 및 관리자 페이지 개발",
      "로그인 & 예약 시스템 구현",
      "MySQL을 활용한 데이터베이스 설계 및 Prisma ORM 적용",
      "UI/UX 개선 및 사용자 경험 최적화"
    ],
    features: [
      "사용자 페이지: 오락실 예약 및 로그인 시스템",
      "관리자 페이지: 예약 내역 관리 및 일정 조정 기능",
      "OAuth를 활용한 간편 로그인 (Google, Kakao)",
      "반응형 디자인 적용 및 모바일 최적화"
    ],
    challenges: [
      "Next.js의 SSR(서버사이드 렌더링) 활용 및 성능 최적화",
      "Prisma ORM을 통한 데이터베이스 설계 및 최적화",
      "네이버 예약 대비 사용자의 편의성을 높이는 UI 설계"
    ],
    statusDetail: "클라이언트 요청으로 프로젝트가 중단됨"
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