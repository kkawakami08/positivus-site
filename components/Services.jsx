import MainLabel from "./ui/MainLabel";
import ServiceCard from "./ServiceCard";
import { services } from "@/constants/services";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
      <div className="flex flex-col items-center gap-5 py-3 md:flex-row justify-center sm:max-w-md md:col-span-2 md:max-w-2xl">
        <MainLabel text="Services" bgColor="bg-brand-green" />
        <p className="text-center md:text-left">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 md:col-span-2 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
