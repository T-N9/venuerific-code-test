import HeroSection from "./components/hero-section";
import IntroSection from "./components/intro-section";
import JoinVenueSection from "./components/join-venue-section";

export default function Home() {

  return (
    <main className="text-dark">
      <HeroSection/>
      <IntroSection/>
      <JoinVenueSection/>
    </main>
  );
}
