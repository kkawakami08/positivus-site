import MinorLabel from "./ui/MinorLabel";
import CircleButton from "./ui/CircleButton";

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
      <div className="row-start-2 flex ">
        <CircleButton path="/services" bgColor={"bg-brand-black"} />
      </div>
      <Image
        src={service.imgSrc}
        alt={`${service.lineOne} ${service.lineTwo}`}
        width="0"
        height="0"
        sizes="100vw"
        className="row-start-2 col-span-2 col-start-3 "
      />
    </div>
  );
};

export default ServiceCard;