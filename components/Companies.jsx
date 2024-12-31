import { companies } from "@/constants/companies";

import Image from "next/image";

const Companies = () => {
  const imgClassName = "w-20 aria-hidden";

  return (
    <div className=" px-4   grid grid-cols-3 lg:flex lg:justify-evenly justify-items-center  space-y-2 items-center  w-full  ">
      {companies.map((company, idx) => (
        <Image
          key={`${company.alt}-${idx}`}
          src={company.src}
          alt={company.alt}
          width={80} // Set consistent width
          height={80} // Set consistent height
          className={imgClassName}
        />
      ))}
    </div>
  );
};

export default Companies;
