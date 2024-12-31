import notionLogo from "@/assets/images/companies/notion.svg";
import amazonLogo from "@/assets/images/companies/amazon.svg";
import dribbleLogo from "@/assets/images/companies/dribble.svg";
import hubspotLogo from "@/assets/images/companies/hubspot.svg";
import netflixLogo from "@/assets/images/companies/netflix.svg";
import zoomLogo from "@/assets/images/companies/zoom.svg";

const companyArray = [
  { src: notionLogo, alt: "Notion Logo" },
  { src: amazonLogo, alt: "Amazon Logo" },
  { src: dribbleLogo, alt: "Dribble Logo" },
  { src: hubspotLogo, alt: "Hubspot Logo" },
  { src: netflixLogo, alt: "Netflix Logo" },
  { src: zoomLogo, alt: "Zoom Logo" },
];

import Image from "next/image";

const Companies = () => {
  const imgClassName = "w-20 aria-hidden";

  return (
    <div className="grid grid-cols-3 lg:flex lg:justify-between justify-items-center py-10 space-y-2 items-center ">
      {companyArray.map((company, idx) => (
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
