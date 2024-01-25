'use client';
import { fetcher } from '@/app/lib/types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import hukidashi from '@/public/images/hukidashi.png';
import { useEffect, useRef } from 'react';
import GetImg from '@/app/ui/home/getImg';

export default function Goto() {
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      setAnimation();
    }
  }, []);

  const setAnimation = () => {
    gsap.fromTo(
      ref.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ref.current,
          toggleActions: 'play none none reverse',
          start: 'top 65%', //開始時のトリガー条件
          end: 'bottom 65%', //終了時のトリガー条件
          // markers: true, // マーカー表示
        },
      }
    );
  };

  return (
    <div className="my-8" ref={ref}>
      <Image
        src={hukidashi}
        alt={`ちょっと`}
        className="ml-16"
      />
      <h3 className="text-2xl px-5 font-bold mb-4">
        その役割、はずしてみませんか
      </h3>
      <GetImg />
    </div>
  );
}
