import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './layout/RootLayout';
import { NotFound, ProjectDetail } from './pages';

export const router = createBrowserRouter([
  // 메인 싱글페이지 (ScrollProvider가 스크롤 시 URL을 변경함)
  { path: '/', Component: RootLayout },
  { path: '/skills', Component: RootLayout },
  { path: '/projects', Component: RootLayout },
  { path: '/experience', Component: RootLayout },

  // 프로젝트 상세 (독립 페이지)
  { path: '/projects/:id', Component: ProjectDetail },

  // 404
  { path: '*', Component: NotFound },
]);
