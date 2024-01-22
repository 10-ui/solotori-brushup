'use client';
import { useEffect, useState } from 'react';

export default function Copies() {
  const [hidden, setHidden] = useState(false);
  const toggleVisibility = () => {
    window.scrollY === 0
      ? setHidden(false)
      : setHidden(true);
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
      <div
        className="flex
                   text-bases
                   justify-around 
                   absolute top-1/2 
                   left-1/2 w-screen
                   items-center
                   -translate-x-1/2
                   -translate-y-1/2
                   z-[3]">
        <p className="text-base font-bold">
          突然ですが、
          <br />
          今の自分に
          <br />
          満足できていますか？
          <br />
          はっきり「はい」と
          <br />
          答えられなかった人、
          <br />
          下へスクロールして
          <br />
          続きを見に来てください
        </p>
        <h2
          className="
          text-5xl
          font-semibold
          [writing-mode:vertical-rl]
          leading-tight
          tracking-[0.4em]">
          自分を見つめ直す、
          <br />
          新しい旅の可能性
        </h2>
      </div>
      <p
        className={`${
          hidden ? 'hide' : ''
        } absolute left-1/2 animate-bounces
                    bottom-20 z-[4] scroll 
                    text-center text-2xl 
                    text-bases font-black
                    bg-zabuton w-fit px-1 rounded-xl`}>
        scroll
        <br />↓
      </p>
    </>
  );
}
