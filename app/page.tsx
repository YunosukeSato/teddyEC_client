import CharacterSection from './(landingpage)/components/CharacterSection';
import Hero from './(landingpage)/components/HeroSection';
import HowToPlay from './(landingpage)/components/HowToPlaySection';
import MerchSection from './(landingpage)/components/MerchSection';

export default function Home() {
  return (
    <>
      <Hero />
      <HowToPlay />
      <CharacterSection />
      <MerchSection />
    </>
  );
}
