import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import NavItem from "./NavItem";
import clsx from "clsx";
import { useScroll } from "../../providers/ScrollProvider";
import { useNavigate } from "react-router-dom";
import { PiHamburger } from "react-icons/pi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
// import { useGSAP } from "@gsap/react";

interface Navbar {
  href: string;
  title?: string;
}

interface NavigationProps {
  items: Navbar[];
  className?: string;
}

const Navigation = ({
  items,
  className,
}: NavigationProps) => {
  gsap.registerPlugin(ScrollToPlugin);
  const { sections } = useScroll();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    console.log("menu open");
    setIsOpen(!isOpen);
  }

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string
  ) => {
    // 기본 링크 이동 방지
    e.preventDefault();

    // target이 비어 있으면 "home"으로 설정
    const sectionKey = target === "" ? "home" : target;
    const section = sections[target as keyof typeof sections]?.current;

    if (section) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: section,
        ease: 'power2.out',
        onComplete: () => {
          navigate(sectionKey === "home" ? '/' : `/${sectionKey}`,
            // replace: true 사용 시
            // 현재 URL이 방문 기록(history stack) 에 남음
            // "뒤로 가기(←)" 버튼을 누르면 이전 페이지로 돌아갈 수 있음
            { replace: true });
        }
      })
    } else if (sectionKey === "home") {
      // home의 경우 강제로 최상단 이동
      gsap.to(window, {
        duration: 1.2,
        scrollTo: 0,
        ease: "power2.out",
        onComplete: () => {
          navigate("/", { replace: true });
        },
      });
    }
  }

  const navbarClass = clsx(
    'w-fit md:w-full max-w-xs lg:max-w-xl', className);

  return (
    <nav className={navbarClass}>
      {/* PC / Tablet */}
      <ul className='hidden md:flex gap-5 flex-row justify-between'>
        {items.map((item, index) => (
          <NavItem
            key={index}
            onClick={(e) => handleClick(e, item.href.slice(1))}
            href={item.href}>
            {item.title}
          </NavItem>
        ))}
      </ul>
      {/* Mobile */}
      <button className='flex items-center lg:hidden' onClick={handleMenuOpen}>
        <PiHamburger className='w-6 h-6'/>
      </button>
      {isOpen && (
        <div className="h-screen fixed inset-0 text-white bg-black/50 z-50 flex items-center justify-center" onClick={handleMenuOpen}>
          {/* 메뉴 컨테이너 */}
          <div className="h-screen w-64 p-6 rounded-lg shadow-lg relative flex flex-col justify-center items-center" onClick={(e) => e.stopPropagation()}>
            {/* 닫기 버튼 */}
            <button className="absolute top-3 right-3 text-2xl" onClick={handleMenuOpen}>
              <IoMdClose />
            </button>

            {/* 메뉴 리스트 */}
            <ul className="flex flex-col gap-10">
              {items.map((item, index) => (
                <li key={index}>
                  <NavItem
                    onClick={(e) => handleClick(e, item.href.slice(1))}
                    href={item.href}
                    className="">
                    {item.title}
                  </NavItem>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;