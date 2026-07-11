import HeroSection from "@/components/home/HeroSection";
import CountdownSection from "@/components/home/CountdownSection";
import AboutSection from "@/components/home/AboutSection";
import ThemeSection from "@/components/home/ThemeSection";
import WhoWeAreSection from "@/components/home/WhoWeAreSection";
import MemoriesSection from "@/components/home/MemoriesSection";
import EditionsSection from "@/components/home/EditionsSection";
import PartnersSection from "@/components/home/PartnersSection";
import HostsSection from "@/components/home/HostsSection";
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <CountdownSection />
        <AboutSection />
        <HostsSection />
        <WhoWeAreSection />
        <PartnersSection />
        <ThemeSection />
        <EditionsSection />
        <MemoriesSection />
      </main>

    </>
  );
}
