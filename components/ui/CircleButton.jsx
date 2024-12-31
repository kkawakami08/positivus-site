import Link from "next/link";

const CircleButton = ({ path, bgColor }) => {
  return (
    <div
      className={`${bgColor} rounded-full w-10 h-10 flex items-center justify-center p-3 `}
    >
      <Link href={path}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          className={`stroke-brand-green
           w-5 stroke-[2.5px]`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </Link>
    </div>
  );
};

export default CircleButton;
