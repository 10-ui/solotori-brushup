import Copies from '@/app/ui/home/fvText';
import Sidebar from '@/app/ui/home/sideBar';
import Lead from './ui/home/lead';
import Goto from './ui/home/goto';
import Instagram from './ui/home/instagram';
import Slider from '@/app/ui/home/fvSlider';

export default function Home() {
  return (
    <>
      <main>
        <Slider />
        <div className="w-390 bg-main box-content pb-160 rounded-t-full -mt-16">
          <Copies />
          <Sidebar />
          <Lead />
          <Goto />
          <Instagram />
        </div>
      </main>
    </>
  );
}
