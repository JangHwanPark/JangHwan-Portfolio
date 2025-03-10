import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader01 = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let loaded = 0;
    const total = 100;

    // 가짜 로딩 진행 (실제 네트워크 로딩 시간에 맞출 수도 있음)
    const interval = setInterval(() => {
      loaded += Math.random() * 10; // 10%씩 증가 (가변적)
      if (loaded >= total) {
        loaded = total;
        clearInterval(interval);
        setTimeout(() => onComplete(), 500); // 프리로더 종료
      }
      setProgress(loaded);
    }, 300); // 0.3초마다 업데이트

    return () => clearInterval(interval);
  }, [onComplete]);

  useGSAP(() => {
    gsap.to(".progress-bar", {
      width: `${progress}%`,
      duration: 0.3,
      ease: "power1.out",
    });
  }, [progress]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center z-50">
      <div className="w-3/4 sm:w-1/2 lg:w-1/3 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div className="progress-bar h-full bg-yellow-400" />
      </div>
    </div>
  );
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Loader01 onComplete={() => setIsLoaded(true)} />}
      {isLoaded && (
        <main className="flex items-center justify-center h-screen text-white bg-gray-900">
          메인 컨텐츠
        </main>
      )}
    </>
  );
}