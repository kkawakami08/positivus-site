import Link from "next/link";

const Button = ({ text, path, bgColor }) => {
  const textColor =
    bgColor == "bg-brand-black" ? " text-brand-gray" : "text-brand-black";

  return (
    <Link
      className={` w-full text-center py-5 rounded-lg ${textColor} ${bgColor} `}
      href={path}
    >
      {text}
    </Link>
  );
};

export default Button;
