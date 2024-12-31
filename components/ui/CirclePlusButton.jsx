const CirclePlusButton = ({ isOpen }) => {
  return (
    <div
      className={`ml-auto bg-brand-gray rounded-full p-1  flex items-center justify-center  border-brand-black border`}
    >
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={5}
          className={`stroke-brand-black w-4 
          `}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={5}
          className={`stroke-brand-black w-4 
          `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      )}
    </div>
  );
};

export default CirclePlusButton;
