'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import hukidashi from '@/public/images/hukidashi.png';
import { useEffect, useRef, useState } from 'react';

export default function Goto() {
  const [src, setSrc] = useState('');
  const [alt, setAlt] = useState('');
  const [esrc, esetSrc] = useState('');
  const [ealt, esetAlt] = useState('');
  const [fsrc, fsetSrc] = useState('');
  const [falt, fsetAlt] = useState('');
  const [isLoading, setIsLoading] = useState(true);
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
  useEffect(() => {
    async function getApi() {
      const api = await fetch(
        'https://script.googleusercontent.com/macros/echo?user_content_key=4u7fea1Ru5BCGQmKNsdsBhBLBCWFEeXe8BHwq-vDMuKDeKAIPOOLk3j2yL9tyIzRLoL3EzF6LCnnCUabv73ppniC9_WLAg6Cm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOUnoHBK76pQbVQ0W2w7OUz05SlTAV5l_5Um1UydTiYLUbAJETptJlVjOd8g34fn0RxEfeq6XdefrmQyq74BWNTBm6NVG-vzJdz9Jw9Md8uu&lib=M2eqGbMQAKVztvyc-snnqWAlM_8jcpcwC'
      );
      return api.json();
    }

    getApi()
      .then((response) => {
        const ran = response.Images.eventDetails.events.alt;
        const dom = response.Images.eventDetails.events.src;
        const fmath = Math.floor(
          Math.random() * ran.length
        );
        const emath = Math.floor(
          Math.random() * ran.length
        );
        fsetSrc(dom[fmath]);
        fsetAlt(ran[fmath]);
        esetSrc(dom[emath]);
        esetAlt(ran[emath]);

        ran[Math.floor(Math.random() * ran.length)];
        setSrc(response.Images.conceptDetails.concepts.src);
        setAlt(response.Images.conceptDetails.concepts.alt);
        setIsLoading(false);
      })
      .catch(() => {
        console.log('err');
      });
  }, []);
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
      <div className="w-370 bg-bases mx-[10px] px-[15px] py-4 rounded-3xl">
        {isLoading ? (
          <>
            <div className="mb-2 rounded-2xl bg-slate-700 w-full h-[191.5px] animate-pulse"></div>
            <div className="mb-2 rounded-2xl bg-slate-700 w-full h-[191.5px] animate-pulse"></div>
            <div className="mb-2 rounded-2xl bg-slate-700 w-full h-[191.5px] animate-pulse"></div>
          </>
        ) : (
          <>
            <Image
              src={src}
              alt={alt}
              className="mb-2 rounded-2xl"
            />
            <Image
              src={esrc}
              alt={ealt}
              className="mb-2 rounded-2xl"
            />
            <Image
              src={fsrc}
              alt={falt}
              className="rounded-2xl"
            />
          </>
        )}
      </div>
    </div>
  );
}
