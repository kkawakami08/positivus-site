import CircleCheckButton from "./ui/CircleCheckButton";
import Link from "next/link";

const PriceCard = ({ price, index }) => {
  return (
    <div
      className={`relative px-5 flex flex-col gap-10 border border-brand-black rounded-3xl py-5 shadow-[0px_5px_0px_0px_rgba(0,_0,_0,_0.8)] ${
        index == 1 && "bg-brand-black text-white"
      }`}
    >
      {index == 1 && (
        <p className="absolute bg-brand-green font-bold rounded-full px-3 right-5 text-brand-black">
          Popular
        </p>
      )}

      <div className="flex flex-col gap-5">
        <h3 className={`text-3xl font-bold ${index == 1 && "font-medium"}`}>
          {price.plan} Plan
        </h3>
        <p className={`text-5xl font-semibold ${index == 1 && "font-normal"}`}>
          ${price.price} <span className="text-xl font-normal">/ month</span>
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <Link
          href="/contact"
          className={`text-lg  py-5 tracking-wider rounded-xl flex items-center justify-center font-medium ${
            index == 1
              ? "bg-brand-green text-black"
              : "bg-brand-black text-white"
          }`}
        >
          Get Started
        </Link>
        <Link
          href="/contact"
          className={`text-lg border-2 ${
            index == 1
              ? "border-white text-white font-normal"
              : "border-brand-black"
          } text-brand-black font-semibold py-5 tracking-wider rounded-xl flex items-center justify-center`}
        >
          Request a quote
        </Link>
      </div>

      <ul
        className={`flex flex-col gap-5 border-t-2  pt-10 ${
          index == 1
            ? "font-normal border-t-white"
            : " font-medium border-t-brand-black"
        }`}
      >
        {price.points.map((point, index) => (
          <li className="flex items-center gap-3 " key={index}>
            <CircleCheckButton />
            <p>{point}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;
