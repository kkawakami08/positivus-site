import MainLabel from "./ui/MainLabel";
import ServiceCard from "./ServiceCard";
import { services } from "@/constants/services";

const Services = () => {
  return (
    <div className="grid grid-cols-1 justify-items-center px-5 gap-6">
      <MainLabel text="Services" bgColor="bg-brand-green" />
      <p className="text-center">
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:
      </p>
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  );
};

export default Services;
