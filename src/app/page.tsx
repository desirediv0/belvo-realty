import AboutSection from "@/components/about-section";
import EmperorProjectSection from "@/components/emperor-project-section";
import Hero from "@/components/Hero";

import LuxuryVisionSection from "@/components/luxury-vision-section";
import StatisticsSection from "@/components/statistics-section";
import VideoShowcaseSection from "@/components/video-showcase-section";


export default function Home() {
  return (
    <>

      <Hero />
      <AboutSection />
      <VideoShowcaseSection />
      <StatisticsSection />
      <EmperorProjectSection />
      <LuxuryVisionSection />

    </>
  );
}
