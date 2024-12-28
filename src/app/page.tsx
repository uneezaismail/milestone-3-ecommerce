import HeroSection from "@/components/Hero";
import LatestCar from "@/components/LatestCar";
import Client from "@/components/Client";
import Services from "@/components/Services";
import FeaturedCars from "./Allproduct/page";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <Services/>
      <LatestCar/>
      <FeaturedCars/>
      <Client/>
    </main>
  );
}
