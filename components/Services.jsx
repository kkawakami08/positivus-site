import MainLabel from "./ui/MainLabel";
import ServiceCard from "./ServiceCard";
import { services } from "@/constants/services";

const Services = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center px-4 lg:px-0">
      <div className="flex flex-col items-center gap-5 py-3 sm:flex-row justify-center  sm:col-span-2 sm:max-w-xl md:max-w-2xl">
        <MainLabel text="Services" bgColor="bg-brand-green" />
        <p className="text-center sm:text-left">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:col-span-2 md:grid-cols-2 w-full">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
