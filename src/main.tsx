import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './index.css';
import { router } from './routes';

// GSAP 플러그인 등록 — 앱 전체에서 한 번만 실행
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ReactDOM.createRoot(document.getElementById('JangHwanPark')!).render(
  <RouterProvider router={router} />
);
