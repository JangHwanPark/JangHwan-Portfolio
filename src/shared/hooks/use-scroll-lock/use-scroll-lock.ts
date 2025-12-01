import { useEffect } from 'react';

export const useScrollLock = (isLocked: boolean = true) => {
  useEffect(() => {
    if (!isLocked) return;

    const preventScroll = (e: Event) => {
      // 모달 내부(.modal-content) 스크롤은 허용하고, 나머지만 막음
      if ((e.target as HTMLElement)?.closest('.modal-content')) return;
      e.preventDefault();
    };

    // 스크롤 막기
    document.body.style.overflow = 'hidden';
    // documentElement까지 막아야 모바일 사파리 등에서 튕김 방지
    document.documentElement.style.overflow = 'hidden';

    // 모바일 터치 스크롤 방지
    document.addEventListener('touchmove', preventScroll, { passive: false });
    document.addEventListener('wheel', preventScroll, { passive: false });

    return () => {
      // 뒷정리 (Cleanup)
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.removeEventListener('touchmove', preventScroll);
      document.removeEventListener('wheel', preventScroll);
    };
  }, [isLocked]);
};
