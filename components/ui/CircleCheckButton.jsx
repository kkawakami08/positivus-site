const CircleCheckButton = () => {
  return (
    <div
      className={`bg-brand-green rounded-full  flex items-center justify-center w-7 h-7 `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        className={`stroke-brand-black
           w-5 `}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    </div>
  );
};

export default CircleCheckButton;
