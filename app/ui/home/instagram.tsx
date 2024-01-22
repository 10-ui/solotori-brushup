'use client';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Instagram() {
  return (
    <div>
      <h3 className="text-center text-2xl font-bold">
        自分にあるもの、ないもの
      </h3>
      <p className="text-base text-center mb-4">
        気ままな旅をしながら探してみませんか？
      </p>
      <div className="flex justify-center">
        <InstagramEmbed
          url="https://www.instagram.com/p/Cqp0VUjNwb7"
          width={354}
        />
      </div>
    </div>
  );
}
