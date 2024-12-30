const MainLabel = ({ text, bgColor }) => {
  const textColor =
    bgColor == "bg-brand-black" ? " text-brand-gray" : "text-brand-black";

  return (
    <h3
      className={`h3-mobile ${bgColor} ${textColor} text-center w-fit px-2 rounded-md`}
    >
      {text}
    </h3>
  );
};

export default MainLabel;
