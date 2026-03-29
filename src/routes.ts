import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './layout/RootLayout';

// 코드 스플리팅: 메인 페이지에서 불필요한 JS 로드 방지
const ProjectDetail = () => import('./pages/ProjectDetail').then((m) => ({ Component: m.default }));
const NotFound = () => import('./pages/NotFound').then((m) => ({ Component: m.default }));

export const router = createBrowserRouter([
  // 메인 싱글페이지 (ScrollProvider가 스크롤 시 URL을 변경함)
  { path: '/', Component: RootLayout },
  { path: '/skills', Component: RootLayout },
  { path: '/projects', Component: RootLayout },
  { path: '/experience', Component: RootLayout },

  // 프로젝트 상세 (독립 페이지) — lazy load
  { path: '/projects/:id', lazy: ProjectDetail },

  // 404 — lazy load
  { path: '*', lazy: NotFound },
]);
