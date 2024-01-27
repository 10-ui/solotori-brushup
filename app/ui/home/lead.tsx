import Image from 'next/image';
import Train from '@/public/images/train.jpg';

export default function Lead() {
  return (
    <section className="-mt-70 relative z-[5] bg-main rounded-t-[42px]">
      <h2 className="text-4xl py-3 px-9 font-bold mb-8 pt-8">
        自分を
        <br />
        「再認識」する。
      </h2>
      <div className="train bg-zabuton px-5 py-15 relative">
        <Image
          src={Train}
          alt="電車の写真"
          className="z-[-1] absolute top-0 left-0 h-full"
        />
        <h3 className="text-2xl mb-4 font-bold">
          私達は常に「何か」に
          <br />
          囚われながら生きています
        </h3>
        <p>
          <span className="leading-10">
            家庭だったら
            <br />
            「おとうさん」「おかあさん」
            <br />
            会社だったら
            <br />
            「課長」「マネージャー」「社長」
            <br />
            職業によっても変わります。
            <br />
          </span>
          自分がどう思っているかよりも、
          <br />
          その場での空気や考え方によっては
          <br />
          自分が「いい」と思わない方を
          <br />
          選ばなくちゃいけないことだってあります。
        </p>
      </div>
    </section>
  );
}
