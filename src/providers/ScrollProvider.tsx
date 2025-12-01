import { ReactNode, RefObject, createContext, useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollContextProps {
  sections: {
    [key: string]: RefObject<HTMLElement | null>;
  };
}

/**
 * ScrollContext: 페이지의 특정 섹션을 관리하는 컨텍스트
 *
 * @constant {React.Context<ScrollContextProps | undefined>}
 */
const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

/**
 * ScrollProvider: 페이지 섹션의 참조(Ref)를 제공하는 컨텍스트 프로바이더
 *
 * @example
 * <ScrollProvider>
 *   <App />
 * </ScrollProvider>
 */
export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  gsap.registerPlugin(ScrollTrigger);
  const navigate = useNavigate();
  const location = useLocation();

  // 주요 페이지 섹션을 관리하는 참조 객체
  const sections = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
  };

  // useGSAP을 사용하여 ScrollTrigger 설정
  useGSAP(() => {
    Object.entries(sections).forEach(([key, ref]) => {
      if (!ref.current) return;

      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top center',
        end: 'bottom center',

        // 아래 방향 스크롤 시 URL 변경
        onEnter: () => {
          if (location.pathname !== `/${key}` && key !== 'about') {
            navigate(`/${key}`, { replace: true });
          } else if (key === 'about' && location.pathname !== '/') {
            navigate('/', { replace: true });
          }
        },

        // 위 방향 스크롤 시 URL 변경
        onEnterBack: () => {
          if (location.pathname !== `/${key}` && key !== 'about') {
            navigate(`/${key}`, { replace: true });
          } else if (key === 'about' && location.pathname !== '/') {
            navigate('/', { replace: true });
          }
        },
      });
    });
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return <ScrollContext.Provider value={{ sections }}>{children}</ScrollContext.Provider>;
};

/**
 * useScroll: ScrollContext를 쉽게 사용할 수 있는 커스텀 훅
 *
 * @example
 * const { sections } = useScroll();
 * console.log(sections.home.current); // home 섹션의 DOM 요소 반환
 */
export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};
