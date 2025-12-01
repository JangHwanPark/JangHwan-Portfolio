import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { PiHamburger } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { useScroll } from '../../providers/ScrollProvider';
import NavItem from './NavItem';

const Navigation = ({ items }: NavigationProps) => {
  gsap.registerPlugin(ScrollToPlugin);
  const { sections } = useScroll();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    console.log('menu open');
    setIsOpen(!isOpen);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, target: string) => {
    // 기본 링크 이동 방지
    e.preventDefault();

    // target이 비어 있으면 "home"으로 설정
    const sectionKey = target === '' ? 'home' : target;
    const section = sections[target as keyof typeof sections]?.current;

    if (section) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: section,
        ease: 'power2.out',
        onComplete: () => {
          navigate(
            sectionKey === 'home' ? '/' : `/${sectionKey}`,
            // replace: true 사용 시
            // 현재 URL이 방문 기록(history stack) 에 남음
            // "뒤로 가기(←)" 버튼을 누르면 이전 페이지로 돌아갈 수 있음
            { replace: true }
          );
        },
      });
    } else if (sectionKey === 'home') {
      // home의 경우 강제로 최상단 이동
      gsap.to(window, {
        duration: 1.2,
        scrollTo: 0,
        ease: 'power2.out',
        onComplete: () => {
          navigate('/', { replace: true });
        },
      });
    }
  };

  return (
    <nav className="w-fit max-w-xs lg:w-full lg:max-w-md xl:max-w-xl">
      {/* PC / Tablet */}
      <ul className="hidden flex-row justify-between gap-3 lg:flex xl:gap-5">
        {items.map((item, index) => (
          <NavItem key={index} onClick={(e) => handleClick(e, item.href.slice(1))} href={item.href}>
            {item.title}
          </NavItem>
        ))}
      </ul>

      {/* Mobile */}
      <button className="flex items-center lg:hidden" onClick={handleMenuOpen}>
        <PiHamburger className="h-6 w-6" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex h-screen items-center justify-center bg-black/90 text-white"
          onClick={handleMenuOpen}
        >
          {/* 메뉴 컨테이너 */}
          <div
            className="relative flex h-screen w-64 flex-col items-center justify-center rounded-lg p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              className="absolute top-3 right-3 text-2xl"
              onClick={handleMenuOpen}
              aria-label="Close"
            >
              <IoMdClose />
            </button>

            {/* 메뉴 리스트 */}
            <ul className="flex flex-col gap-10">
              {items.map((item, index) => (
                <NavItem
                  key={index}
                  onClick={(e) => handleClick(e, item.href.slice(1))}
                  href={item.href}
                >
                  {item.title}
                </NavItem>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
