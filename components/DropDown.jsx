"use client";
import { useState } from "react";
import CirclePlusButton from "./ui/CirclePlusButton";

const DropDown = ({ process, index, faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`grid divide-y  divide-brand-black px-7    border-brand-black border rounded-3xl shadow-[0px_5px_0px_0px_rgba(0,_0,_0,_0.8)] ${
        isOpen ? "bg-brand-green" : "bg-brand-gray"
      }`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex  items-center gap-5 py-7">
        {!faq && <p className="text-2xl font-semibold">0{index + 1}</p>}
        <p className="font-semibold text-lg">{process.title}</p>
        <CirclePlusButton
          isOpen={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      {isOpen && <p className=" py-7">{process.description}</p>}
    </div>
  );
};

export default DropDown;
