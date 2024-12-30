import HeroImg from "@/assets/images/navigating-digital-landscape.svg";
import Button from "./ui/Button";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center px-5 space-y-7 pt-3">
      <h2 className="h2-mobile">
        Navigating the digital landscape for success
      </h2>
      <Image
        src={HeroImg}
        alt="hero"
        width="0"
        height="0"
        sizes="100vw"
        className=" w-full"
      />
      <p className="">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>
      <Button
        text="Book a consultation"
        path="/contact"
        bgColor="bg-brand-black"
      />
    </div>
  );
};

export default Hero;
