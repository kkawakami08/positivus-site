import Link from "next/link";

const Button = ({ text, path, bgColor }) => {
  const textColor =
    bgColor == "bg-brand-black"
      ? " text-brand-gray hover:bg-brand-green hover:text-brand-black"
      : "text-brand-black";

  return (
    <Link
      className={` px-5 text-center py-3 rounded-lg ${textColor} ${bgColor} ${
        bgColor == "bg-white" &&
        "border-brand-black border hover:bg-brand-black hover:text-white"
      } flex items-center justify-center`}
      href={path}
    >
      {text}
    </Link>
  );
};

export default Button;
