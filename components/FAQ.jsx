import DropDown from "./DropDown";
import MainLabel from "./ui/MainLabel";
import { faq } from "@/constants/faq";

const FAQ = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center lg:py-5">
        <h3 className="h3-mobile text-center bg-brand-green w-fit  rounded-md px-1 z-10 ">
          Frequently Asked
        </h3>
        <h3 className="h3-mobile text-center bg-brand-green w-fit  rounded-md px-1 -mt-1 ">
          Questions
        </h3>
      </div>
      <div className="flex flex-col gap-5 w-full">
        {faq.map((item, index) => (
          <DropDown process={item} index={index} key={index} faq={true} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
