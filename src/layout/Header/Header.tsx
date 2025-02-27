import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

import { Logo } from "../../components";
import Navigation from "../Navigation/Navigation";
import DarkModeSwitch from "../../components/DarkModeSwitch/DarkModeSwitch";

const navbar = [
  {href: "/", title: 'Home'},
  {href: "/about", title: 'About'},
  {href: "/skills", title: 'Skills'},
  {href: "/project", title: 'Project'},
  {href: "/experience", title: 'Experience'},
];

const Header = () => {
  gsap.registerPlugin(ScrollTrigger);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    const showAnime = gsap.from(headerRef.current, {
      yPercent: -100,     // 시작 위치: 위로 100% 이동된 상태 (화면 밖)
      paused: true,       // 애니메이션을 일시 정지 상태로 생성
      duration: 0.2       // 애니메이션 지속 시간(초)
    }).progress(1);       // 애니메이션의 진행 상태를 끝(1)으로 설정 (처음에는 보이지 않음)

    // 스크롤 이벤트에 반응하는 트리거 설정
    ScrollTrigger.create({
      start: "top top",   // 트리거 시작점: 문서 상단이 뷰포트 상단에 닿을 때
      end: 99999,         // 트리거 종료점: 페이지 끝까지 (사실상 무한대)
      // 스크롤 방향 감지하여 애니메이션 제어
      onUpdate: (self) => {
        self.direction === -1 ? showAnime.play() : showAnime.reverse();
      }
    })
  }, []);

  return (
    <header ref={headerRef} className='w-full pb-5 bg-white fixed top-0 z-9999'>
      <div className='pt-5 px-10 flex justify-between items-center'>
        <Logo/>
        <Navigation items={navbar}/>
        <DarkModeSwitch/>
      </div>
    </header>
  );
};

export default Header;