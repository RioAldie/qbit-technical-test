import CardMenu from '@/components/cardMenu';
import Hero from '@/components/hero';
import MenuSection from '@/components/menuSection';
import Testimoni from '@/components/testimoni';

export default function Home() {
  return (
    <main className=" p-24">
      <Hero />
      <MenuSection />
      <Testimoni />
    </main>
  );
}
