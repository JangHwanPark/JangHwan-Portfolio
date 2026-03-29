import { useRef } from 'react';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Logo } from '../../components';
import Navigation from '../Navigation/Navigation';

const navbar = [
  { href: '/', title: 'About' },
  { href: '/skills', title: 'Skills' },
  { href: '/projects', title: 'Projects' },
  { href: '/experience', title: 'Experience' },
];

const Header = () => {
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    const showAnime = gsap
      .from(headerRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    let lastDirection = 0;
    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: (self) => {
        // 방향이 바뀔 때만 play/reverse 호출 → 중복 호출 방지
        if (self.direction !== lastDirection) {
          lastDirection = self.direction;
          self.direction === -1 ? showAnime.play() : showAnime.reverse();
        }
      },
    });
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 z-9999 w-full pb-5">
      <div className="xs:px-3 flex items-center justify-between pt-5 sm:px-10 xl:px-20">
        <Logo />
        <Navigation items={navbar} />
      </div>
    </header>
  );
};

export default Header;
