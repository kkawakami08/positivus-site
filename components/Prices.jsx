import PriceCard from "./PriceCard";
import { prices } from "@/constants/prices";

const Prices = () => {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      {prices.map((price, index) => (
        <PriceCard key={index} price={price} index={index} />
      ))}
    </div>
  );
};

export default Prices;
