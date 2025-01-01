import Hero from "@/components/Hero";
import Companies from "@/components/Companies";
import Services from "@/components/Services";
import ContactCard from "@/components/ContactCard";
import CaseStudies from "@/components/CaseStudies";
import WorkingProcess from "@/components/WorkingProcess";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-14 items-center ">
      <Hero />
      <Companies />
      <Services />
      <ContactCard />
      <CaseStudies />
      <WorkingProcess />
      <Team />
    </div>
  );
}
