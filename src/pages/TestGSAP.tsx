import { useRef } from 'react';
import { gsap } from 'gsap'; // GSAP 코어 라이브러리 가져오기
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react"; // GSAP의 ScrollTrigger 플러그인 가져오기

// ScrollTrigger 플러그인을 GSAP에 등록해야 사용 가능
gsap.registerPlugin(ScrollTrigger);

function TestGsap() {
  // DOM 요소에 접근하기 위한 ref 생성
  const headerRef = useRef(null);

  useGSAP(() => {
    // 헤더 애니메이션 정의
    // gsap.from: 지정된 값에서 요소의 현재 값으로 애니메이션
    const showAnim = gsap.from(headerRef.current, {
      yPercent: -100,     // 시작 위치: 위로 100% 이동된 상태 (화면 밖)
      paused: true,       // 애니메이션을 일시 정지 상태로 생성
      duration: 0.2       // 애니메이션 지속 시간(초)
    }).progress(1);       // 애니메이션의 진행 상태를 끝(1)으로 설정 (처음에는 보이지 않음)

    // ScrollTrigger 생성 - 스크롤 이벤트에 반응하는 트리거 설정
    ScrollTrigger.create({
      start: "top top",   // 트리거 시작점: 문서 상단이 뷰포트 상단에 닿을 때
      end: 99999,         // 트리거 종료점: 사실상 무한대 (페이지 끝까지)
      onUpdate: (self) => {
        // 스크롤 방향 감지하여 애니메이션 제어
        // self.direction === -1: 위로 스크롤 (음수 방향)
        // self.direction === 1: 아래로 스크롤 (양수 방향)
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      }
    });

    // 컴포넌트 언마운트 시 ScrollTrigger 정리 (메모리 누수 방지)
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // 빈 배열: 컴포넌트 마운트 시 한 번만 실행

  return (
    <>
      {/* 헤더 요소 - 스크롤에 따라 나타나거나 사라짐 */}
      <header
        ref={headerRef}
        style={{
          position: 'fixed',     // 뷰포트에 고정
          top: 0,                // 상단에 위치
          left: 0,               // 좌측에 위치
          width: '100%',         // 전체 너비 사용
          backgroundColor: '#333', // 배경색
          color: 'white',        // 글자색
          padding: '15px',       // 안쪽 여백
          zIndex: 100            // 다른 요소보다 위에 표시
        }}
      >
        헤더 내용이 여기에 들어갑니다
      </header>

      {/* 페이지 콘텐츠 - 스크롤을 위한 여백과 높이 지정 */}
      <div style={{ paddingTop: '60px', height: '2000px' }}>
        스크롤을 내려보세요
      </div>
    </>
  );
}

export default TestGsap;