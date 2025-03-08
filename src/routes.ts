import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import {
  About,
  Skills,
  Project,
  ProjectDetail,
  Experience,
  NotFound, Home,
} from "./pages";
import TestPage01 from "./pages/test/TestPage01";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      // 메인 페이지 (소개 페이지)
      { index: true, Component: Home },

      // 메인 페이지 (소개 페이지)
      { path: 'about', Component: About },

      // 기술 스택
      { path: "skills", Component: Skills },

      // 포트폴리오 (프로젝트)
      { path: "projects", Component: Project },
      { path: "projects/:id", Component: ProjectDetail },

      // 경력(경험)
      { path: "experience", Component: Experience },

      // 오류 처리 (404)
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: '/test',
    Component: TestPage01,
  },
])