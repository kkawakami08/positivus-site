import HeroImg from "@/assets/images/navigating-digital-landscape.svg";
import Button from "./ui/Button";

import Image from "next/image";

const Hero = () => {
  return (
    <div className=" px-4 md:gap-5  grid grid-cols-1 justify-items-center items-center md:grid-cols-5   md:max-w-4xl  ">
      <h2 className="h2-mobile md:h2-desktop md:col-span-2 text-center md:text-left lg:place">
        Navigating the digital landscape for success
      </h2>
      <Image
        src={HeroImg}
        alt="hero"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full md:col-span-3 md:row-span-2 md:place-self-center"
      />
      <div className="md:row-start-2 md:col-span-2 flex flex-col gap-8 ">
        <p className="text-center md:text-left">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button
          text="Book a consultation"
          path="/contact"
          bgColor="bg-brand-black"
        />
      </div>
    </div>
  );
};

export default Hero;
