import MainLabel from "./ui/MainLabel";
import DropDown from "./DropDown";
import { processes } from "@/constants/process";

const WorkingProcess = () => {
  return (
    <div className=" px-5 w-full lg:max-w-4xl lg:px-0 ">
      <div className="flex flex-col items-center gap-5 py-3 md:flex-row justify-center md:col-span-2 mb-5">
        <MainLabel text="Our Working Process" bgColor="bg-brand-green" />
        <p className="text-center md:text-left max-w-xs ">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="flex flex-col gap-5 w-full">
        {processes.map((process, index) => (
          <DropDown key={index} process={process} index={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkingProcess;
