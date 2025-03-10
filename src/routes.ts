import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import {
  About,
  Skills,
  Project,
  ProjectDetail,
  Experience,
  NotFound,
} from "./pages";
import TestPage01 from "./pages/test/TestPage01";
import Loader01 from "./pages/test/PreLoader/Loader01";
import LoaderLayout from "./layout/LoaderLayout";
import Loader02 from "./pages/test/PreLoader/Loader02";
import Event01 from "./pages/event/Event01";
import Event02 from "./pages/event/Event02";

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      // 메인 페이지 (소개 페이지)
      { index: true, Component: About },

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
    path: '/loader',
    Component: LoaderLayout,
    children: [
      {path: '1', Component: TestPage01},
      {path: '2', Component: Loader01},
      {path: '3', Component: Loader02}
    ]
  },
  {
    path: '/event',
    Component: LoaderLayout,
    children: [
      {path: '1', Component: Event01},
      {path: '2', Component: Event02},
    ]
  },
])