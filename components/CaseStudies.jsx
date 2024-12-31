import MainLabel from "./ui/MainLabel";
import CaseStudy from "./CaseStudy";
import { caseStudies } from "@/constants/caseStudies";

const CaseStudies = () => {
  return (
    <div className="w-full lg:max-w-4xl lg:mx-auto ">
      <div className="flex flex-col items-center gap-5 px-5 py-3 md:flex-row justify-center md:col-span-2 mb-5 ">
        <MainLabel text="Case Studies" bgColor="bg-brand-green" />
        <p className="text-center md:text-left sm:max-w-lg ">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="overflow-x-auto w-full no-scrollbar lg:hidden">
        <div className="flex gap-4 min-w-max px-4">
          {caseStudies.map((study, index) => (
            <div className="w-80 bg-brand-black text-brand-gray p-8 rounded-3xl ">
              <CaseStudy text={study} key={index} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:grid lg:grid-cols-3 lg:items-center rounded-3xl bg-brand-black text-brand-gray py-10  lg:divide-x-2  font-light">
        {caseStudies.map((study, index) => (
          <div className="px-10">
            <CaseStudy text={study} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
