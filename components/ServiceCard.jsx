import MinorLabel from "./ui/MinorLabel";
import CircleArrowButton from "./ui/CircleArrowButton";

import Image from "next/image";

const ServiceCard = ({ service, index }) => {
  return (
    <div
      className={`${
        index % 2 === 0 ? "bg-brand-gray" : "bg-brand-green"
      } w-full border-brand-black border rounded-3xl shadow-[0px_5px_0px_0px_rgba(0,_0,_0,_0.8)] grid grid-cols-4 p-8 `}
    >
      <MinorLabel
        lineOne={service.lineOne}
        lineTwo={service.lineTwo}
        bgColor={index % 2 === 0 ? "bg-brand-green" : "bg-white"}
      />
      <div className="row-start-2   place-self-end flex w-full md:col-span-2 md:items-center gap-3">
        <CircleArrowButton path="/pricing" bgColor={"bg-brand-black"} />
        <p className="hidden lg:block">Learn More</p>
      </div>
      <Image
        src={service.imgSrc}
        alt={`${service.lineOne} ${service.lineTwo}`}
        width="0"
        height="0"
        sizes="100vw"
        className="row-start-2 col-span-2 col-start-3 place-self-end"
      />
    </div>
  );
};

export default ServiceCard;
