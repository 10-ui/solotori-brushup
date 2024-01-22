'use client';
import { useEffect } from 'react';

export default function Sidebar() {
  const toggleVisibility = () => {
    const win: HTMLInputElement = document.querySelector('.circle')!;
    const Sc = (window.scrollY / 3267) * 100;
    win.style.top = `${Sc}%`;
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () =>
      window.removeEventListener(
        'scroll',
        toggleVisibility
      );
  }, []);
  return (
    <>
      <div className="w-1 h-3/5 fixed z-[7] bg-bases top-[10rem] left-2 rounded-10">
        <div className="w-full h-full relative">
          <div className="circle absolute w-2 h-2 bg-violet-800 rounded-xl left-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </>
  );
}
