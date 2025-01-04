"use client";
import { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "@/assets/images/positivus-star.svg";
import Image from "next/image";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <div className="lg:max-w-5xl md:mx-auto bg-brand-black text-white grid grid-cols-1 lg:grid-cols-6 justify-items-center gap-10 py-10 px-5 mt-20 lg:rounded-t-3xl lg:px-10 ">
      <Link href="/" className="flex items-center gap-2 lg:place-self-start ">
        <Image
          src={logo}
          alt="positivus logo"
          width="0"
          height="0"
          sizes="100vw"
          className="invert w-5 "
        />
        <p className="text-2xl ">Positivus</p>
      </Link>
      <ul className="font-extralight flex flex-col items-center gap-3 lg:flex-row lg:col-span-4 lg:gap-10 ">
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
      <div className="flex flex-col items-center gap-10 lg:items-start lg:col-span-2">
        <p className="bg-brand-green text-brand-black font-bold text-xl w-fit rounded-lg px-2">
          Contact us:
        </p>
        <ul className="font-extralight flex flex-col gap-3 items-center lg:items-start lg:text-left  text-center">
          <li>Email: info@positivus.com</li>
          <li>Phone: 555-567-8901</li>
          <li>Address: 1234 Main St Moonstone City, Stardust State 12345</li>
        </ul>
      </div>

      <form
        className="w-full rounded-xl bg-brand-light-gray p-10 flex flex-col gap-5 lg:col-span-4  lg:flex-row lg:items-center"
        onSubmit={handleSubmit}
      >
        <Toaster
          position="bottom-center"
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #191A23",
              padding: "16px",
              color: "#191A23",
              backgroundColor: "#B9FF66",
            },
          }}
        />
        <input
          required
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="block w-full rounded-xl bg-brand-light-gray px-7 py-5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 font-extralight placeholder:text-white focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 lg:h-fit"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          type="submit"
          className="bg-brand-green text-brand-black font-semibold text-lg  text-center px-7 py-5 rounded-xl flex items-center justify-center w-full lg:h-fit hover:bg-white hover:text-brand-black"
        >
          Subscribe to news
        </button>
      </form>

      <ul className="flex gap-5 lg:col-start-6 lg:row-start-1 lg:place-self-end lg:self-start">
        <li className="bg-brand-gray w-7 h-7 rounded-full flex items-center justify-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/k-kawakami/
            "
          >
            {" "}
            <FaLinkedinIn className="text-brand-black " />
          </a>
        </li>
        <li className="bg-brand-gray w-7 h-7 rounded-full flex items-center justify-center">
          <a
            target="_blank"
            href="https://github.com/kkawakami08/

            "
          >
            {" "}
            <FaGithub className="text-brand-black " />
          </a>
        </li>
      </ul>
      <div className="flex flex-col gap-5 items-center font-extralight border-t w-full pt-10 border-t-white lg:col-span-6 lg:flex-row">
        <p>© {new Date().getFullYear()} Positivus. All Rights Reserved.</p>
        <p>Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
