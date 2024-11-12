import Apps from "./Apps";
import HeroSection from "./HeroSection";
import News from "./News";
import Popular from "./Popular";

const Main = () => {
  return (
    <main className="py-[1.875rem] xl:py-[4.375rem]">
      <HeroSection />
      <Popular />
      <News />
      <Apps />
    </main>
  );
};

export default Main;
