import Link from "next/link";

const CaseStudy = ({ text }) => {
  return (
    <>
      <p className="font-light pb-5">{text}</p>
      <Link
        href="/use-cases"
        className="flex items-center gap-3 text-brand-green font-light"
      >
        Learn More{" "}
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
    </>
  );
};

export default CaseStudy;
