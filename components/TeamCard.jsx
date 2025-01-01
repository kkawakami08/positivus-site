import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const TeamCard = ({ member }) => {
  return (
    <div className=" grid divide-y divide-brand-black  border border-brand-black rounded-3xl shadow-[0px_5px_0px_0px_rgba(0,_0,_0,_0.8)] p-10  relative">
      <div className="flex items-end gap-5 pb-5">
        <Image
          src={member.imgUrl}
          alt={member.name}
          width="0"
          height="0"
          sizes="100vw"
        />
        <div>
          <p className="font-semibold">{member.name}</p>
          <p>{member.title}</p>
        </div>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/k-kawakami/
"
          className="w-8 h-8 bg-brand-black rounded-full flex items-center justify-center absolute right-5 top-5 cursor-pointer"
        >
          <FaLinkedinIn className=" fill-brand-green  w-10 " />
        </a>
      </div>
      <p className="pt-5">{member.description}</p>
    </div>
  );
};

export default TeamCard;
