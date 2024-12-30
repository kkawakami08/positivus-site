const MinorLabel = ({ lineOne, lineTwo, bgColor }) => {
  return (
    <div className="col-span-3 ">
      <h4
        className={`h4-mobile ${bgColor} ${
          bgColor == "bg-brand-black" ? " text-brand-gray" : "text-brand-black"
        }  w-fit  rounded-md px-1  `}
      >
        {lineOne}
      </h4>
      <h4
        className={`h4-mobile ${bgColor} ${
          bgColor == "bg-brand-black" ? " text-brand-gray" : "text-brand-black"
        }  w-fit  rounded-md px-1 -mt-1 `}
      >
        {lineTwo}
      </h4>
    </div>
  );
};

export default MinorLabel;
