import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import {
  Home,
  Skills,
  Portfolio,
  PortfolioDetail,
  NotFound
} from "./pages";


export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      // 메인 페이지 (소개 페이지)
      { index: true, Component: Home },

      // 기술 스택
      { path: "skills", Component: Skills },

      // 포트폴리오 (프로젝트)
      { path: "portfolio", Component: Portfolio },
      { path: "portfolio/:id", Component: PortfolioDetail },

      // 오류 처리 (404)
      { path: "*", Component: NotFound },
    ]
  }
])