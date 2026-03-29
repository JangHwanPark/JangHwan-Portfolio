import { ReactNode, RefObject, createContext, useContext, useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface ScrollContextProps {
  sections: {
    [key: string]: RefObject<HTMLElement | null>;
  };
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const sections = {
    home: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
  };

  useGSAP(() => {
    // 현재 URL을 추적하여 중복 호출 방지
    let currentPath = window.location.pathname;

    Object.entries(sections).forEach(([key, ref]) => {
      if (!ref.current) return;

      const targetPath = key === 'about' ? '/' : `/${key}`;

      const updateURL = () => {
        if (currentPath === targetPath) return;
        currentPath = targetPath;
        // React Router를 거치지 않고 URL만 변경 → 리렌더링 없음
        window.history.replaceState(null, '', targetPath);
      };

      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top center',
        end: 'bottom center',
        onEnter: updateURL,
        onEnterBack: updateURL,
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
