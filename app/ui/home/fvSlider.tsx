'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Goheimochi from '@/public/images/slider/Goheimochi.png';
import Guiter from '@/public/images/slider/Guiter.png';
import Ichigo from '@/public/images/slider/Ichigo.png';
import Kaminari from '@/public/images/slider/Kaminari.png';
import Night from '@/public/images/slider/Night.png';
import Shisa from '@/public/images/slider/Shisa.png';

export default function Slider() {
  const [x, setX] = useState(0);
  const refX = useRef(x);
  useEffect(() => {
    x === 6 ? setX(0) : null;
    refX.current = x;
  }, [x]);
  useEffect(() => {
    const count = setInterval(() => {
      setX(refX.current + 1);
      const num = refX.current;
      const sliderR =
        document.querySelectorAll('.right img');
      const sliderD1 =
        document.querySelectorAll('.down1 img');
      const sliderD2 =
        document.querySelectorAll('.down2 img');
      const sliderL =
        document.querySelectorAll('.left img');
      const sliderU1 =
        document.querySelectorAll('.up1 img');
      const sliderU2 =
        document.querySelectorAll('.up2 img');
      sliderR.forEach((item, index) => {
        index === num
          ? item.classList.add('enter-r')
          : item.classList.remove('enter-r');
      });
      if (num === 0) {
        sliderR[5].classList.add('leave-r');
      } else {
        sliderR.forEach((item, index) => {
          index === num - 1
            ? item.classList.add('leave-r')
            : item.classList.remove('leave-r');
        });
      }
      sliderD1.forEach((item, index) => {
        index === num
          ? item.classList.add('enter-d')
          : item.classList.remove('enter-d');
      });
      if (num === 0) {
        sliderD1[5].classList.add('leave-d');
      } else {
        sliderD1.forEach((item, index) => {
          index === num - 1
            ? item.classList.add('leave-d')
            : item.classList.remove('leave-d');
        });
      }
      sliderD2.forEach((item, index) => {
        index === num
          ? item.classList.add('enter-d')
          : item.classList.remove('enter-d');
      });
      if (num === 0) {
        sliderD2[5].classList.add('leave-d');
      } else {
        sliderD2.forEach((item, index) => {
          index === num - 1
            ? item.classList.add('leave-d')
            : item.classList.remove('leave-d');
        });
      }
      sliderL.forEach((item, index) => {
        index === num
          ? item.classList.add('enter-l')
          : item.classList.remove('enter-l');
      });
      if (num === 0) {
        sliderL[5].classList.add('leave-l');
      } else {
        sliderL.forEach((item, index) => {
          index === num - 1
            ? item.classList.add('leave-l')
            : item.classList.remove('leave-l');
        });
      }
      sliderU1.forEach((item, index) => {
        index === num
          ? item.classList.add('enter-u')
          : item.classList.remove('enter-u');
      });
      if (num === 0) {
        sliderU1[5].classList.add('leave-u');
      } else {
        sliderU1.forEach((item, index) => {
          index === num - 1
            ? item.classList.add('leave-u')
            : item.classList.remove('leave-u');
        });
      }
      sliderU2.forEach((item, index) => {
        index === num
          ? item.classList.add('enter-u')
          : item.classList.remove('enter-u');
      });
      if (num === 0) {
        sliderU2[5].classList.add('leave-u');
      } else {
        sliderU2.forEach((item, index) => {
          index === num - 1
            ? item.classList.add('leave-u')
            : item.classList.remove('leave-u');
        });
      }
    }, 3500);
    return () => clearInterval(count);
  }, []);

  return (
    <section className="sliders relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-form z-[2]"></div>
      <ul className="grid grid-cols-3 grid-rows-3 bg-bases gap-0.5 w-390 h-screen">
        <li className="slider-imgs right">
          <Image
            src={Ichigo}
            alt="佐賀県名物白いちご"></Image>
          <Image src={Goheimochi} alt="輝く五平餅"></Image>
          <Image
            src={Guiter}
            alt="海辺でサングラスを掛けてギターを弾く女性"></Image>
          <Image
            src={Night}
            alt="湖の近くの岩場で日の入りを見る男性"></Image>
          <Image src={Shisa} alt="沖縄のシーサー"></Image>
          <Image
            src={Kaminari}
            alt="東京の浅草寺雷門"></Image>
        </li>

        <li className="slider-imgs down1">
          <Image
            src={Kaminari}
            alt="東京の浅草寺雷門"></Image>
          <Image
            src={Ichigo}
            alt="佐賀県名物白いちご"></Image>
          <Image src={Goheimochi} alt="輝く五平餅"></Image>
          <Image
            src={Guiter}
            alt="海辺でサングラスを掛けてギターを弾く女性"></Image>
          <Image
            src={Night}
            alt="湖の近くの岩場で日の入りを見る男性"></Image>
          <Image src={Shisa} alt="沖縄のシーサー"></Image>
        </li>
        <li className="slider-imgs up2">
          <Image src={Goheimochi} alt="輝く五平餅"></Image>
          <Image
            src={Guiter}
            alt="海辺でサングラスを掛けてギターを弾く女性"></Image>
          <Image
            src={Night}
            alt="湖の近くの岩場で日の入りを見る男性"></Image>
          <Image src={Shisa} alt="沖縄のシーサー"></Image>
          <Image
            src={Kaminari}
            alt="東京の浅草寺雷門"></Image>
          <Image
            src={Ichigo}
            alt="佐賀県名物白いちご"></Image>
        </li>
        <li className="slider-imgs down2">
          <Image src={Shisa} alt="沖縄のシーサー"></Image>
          <Image
            src={Kaminari}
            alt="東京の浅草寺雷門"></Image>
          <Image
            src={Ichigo}
            alt="佐賀県名物白いちご"></Image>
          <Image src={Goheimochi} alt="輝く五平餅"></Image>
          <Image
            src={Guiter}
            alt="海辺でサングラスを掛けてギターを弾く女性"></Image>
          <Image
            src={Night}
            alt="湖の近くの岩場で日の入りを見る男性"></Image>
        </li>
        <li className="slider-imgs up1">
          <Image
            src={Guiter}
            alt="海辺でサングラスを掛けてギターを弾く女性"></Image>
          <Image
            src={Night}
            alt="湖の近くの岩場で日の入りを見る男性"></Image>
          <Image src={Shisa} alt="沖縄のシーサー"></Image>
          <Image
            src={Kaminari}
            alt="東京の浅草寺雷門"></Image>
          <Image
            src={Ichigo}
            alt="佐賀県名物白いちご"></Image>
          <Image src={Goheimochi} alt="輝く五平餅"></Image>
        </li>
        <li className="slider-imgs left">
          <Image
            src={Night}
            alt="湖の近くの岩場で日の入りを見る男性"></Image>
          <Image src={Shisa} alt="沖縄のシーサー"></Image>
          <Image
            src={Kaminari}
            alt="東京の浅草寺雷門"></Image>
          <Image
            src={Ichigo}
            alt="佐賀県名物白いちご"></Image>
          <Image src={Goheimochi} alt="輝く五平餅"></Image>
          <Image
            src={Guiter}
            alt="海辺でサングラスを掛けてギターを弾く女性"></Image>
        </li>
      </ul>
    </section>
  );
}
