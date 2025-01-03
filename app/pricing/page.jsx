import Prices from "@/components/Prices";
import FAQ from "@/components/FAQ";

const PricingPage = () => {
  return (
    <div className="px-5 lg:px-0 flex flex-col gap-10">
      <div className="flex flex-col gap-7 md:max-w-sm">
        <h2 className="text-5xl font-semibold">Pricing</h2>
        <p className="">
          Elevate Your Online Presence: Competitive Pricing for Exceptional
          Results
        </p>
      </div>
      <Prices />
      <FAQ />
    </div>
  );
};

export default PricingPage;
