import HeroSection from "@/components/home/HeroSection";
import CountdownSection from "@/components/home/CountdownSection";
import AboutSection from "@/components/home/AboutSection";
import ThemeSection from "@/components/home/ThemeSection";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import MemoriesSection from "@/components/home/MemoriesSection";
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <CountdownSection />
        <AboutSection />
        <WhoWeAreSection />
        <ThemeSection />
        <MemoriesSection />
      </main>

    </>
  );
}
