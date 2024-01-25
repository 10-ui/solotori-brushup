import useSWR from 'swr';
import { fetcher } from '@/app/lib/types';

export default function GetImg() {
  const { data, error, isLoading } = useSWR(
    'https://script.googleusercontent.com/macros/echo?user_content_key=4u7fea1Ru5BCGQmKNsdsBhBLBCWFEeXe8BHwq-vDMuKDeKAIPOOLk3j2yL9tyIzRLoL3EzF6LCnnCUabv73ppniC9_WLAg6Cm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOUnoHBK76pQbVQ0W2w7OUz05SlTAV5l_5Um1UydTiYLUbAJETptJlVjOd8g34fn0RxEfeq6XdefrmQyq74BWNTBm6NVG-vzJdz9Jw9Md8uu&lib=M2eqGbMQAKVztvyc-snnqWAlM_8jcpcwC',
    fetcher
  );
  if (isLoading)
    return (
      <div className="w-370 bg-bases mx-[10px] px-[15px] py-4 rounded-3xl">
        <div className="mb-2 rounded-2xl bg-slate-700 w-full h-[191.5px] animate-pulse"></div>
        <div className="mb-2 rounded-2xl bg-slate-700 w-full h-[191.5px] animate-pulse"></div>
        <div className="mb-2 rounded-2xl bg-slate-700 w-full h-[191.5px] animate-pulse"></div>
      </div>
    );
  if (data) {
    const eventsNum = Math.floor(
      Math.random() *
        data.imgs.eventDetails.events.src.length
    );
    const eventsNum2 = Math.floor(
      Math.random() *
        data.imgs.eventDetails.events.src.length
    );
    return (
      <div className="w-370 bg-bases mx-[10px] px-[15px] py-4 rounded-3xl">
        <img
          src={data.imgs.conceptDetails.concepts.src}
          alt={data.imgs.conceptDetails.concepts.alt}
          className="mb-2 rounded-2xl"
        />
        <img
          src={data.imgs.eventDetails.events.src[eventsNum]}
          alt={data.imgs.eventDetails.events.alt[eventsNum]}
          className="mb-2 rounded-2xl"
        />
        <img
          src={
            data.imgs.eventDetails.events.src[eventsNum2]
          }
          alt={
            data.imgs.eventDetails.events.alt[eventsNum2]
          }
          className="rounded-2xl"
        />
      </div>
    );
  }
}
