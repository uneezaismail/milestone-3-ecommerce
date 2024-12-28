import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative text-white h-screen flex items-end pb-16 justify-center">
      {/* Background Image */}
      <Image
        src={"/hero.jpg"}
        alt="Car Hero"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-[-2]"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-950 opacity-30 z-[-1]"></div>

      {/* Content */}
      <div className="text-center space-y-6 md:space-y-10 max-w-4xl z-10">
        <h1 className="text-4xl font-bold sm:text-6xl">
          FIND YOUR DREAM CAR AT AN <span className="text-blue-500">AFFORDABLE</span> PRICE
        </h1>
        <p className="text-lg md:text-2xl">
          Explore a wide range of high-quality cars tailored to your budget and needs. 
          Drive away with the perfect match today!
        </p>
        <button className="px-6 py-3  bg-blue-600 hover:bg-blue-700 rounded-lg text-white">
          Get You Car
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
