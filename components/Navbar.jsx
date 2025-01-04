"use client";
import logo from "@/assets/images/positivus-star.svg";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import Button from "./ui/Button";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navLinks } from "@/constants/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="relative">
      <nav className="sticky top-0 bg-white py-5 flex w-full justify-between px-5 lg:px-20 drop-shadow-sm z-10">
        <Link href="/" className="flex gap-3 mr-5 items-center">
          <Image src={logo} alt="logo" width={20} />
          <h1 className="text-2xl font-semibold">Positivus</h1>
        </Link>
        <IoIosMenu
          className="text-3xl ml-auto lg:hidden cursor-pointer"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        />
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={
                pathname === link.path
                  ? "bg-brand-green font-semibold px-2 py-1 rounded-lg"
                  : ""
              }
            >
              {link.text}
            </Link>
          ))}
          <Button text="Request a quote" path="/contact" bgColor="bg-white" />
        </div>
      </nav>

      {menuIsOpen && (
        <div className="absolute w-full bg-white px-5 py-4 flex flex-col gap-4 drop-shadow-md lg:hidden">
          {navLinks.map((link, index) => (
            <Link
              onClick={() => setMenuIsOpen(false)}
              key={index}
              href={link.path}
              className={`${
                pathname === link.path
                  ? "bg-brand-green font-semibold px-2 py-1 rounded-lg"
                  : ""
              } text-center`}
            >
              {link.text}
            </Link>
          ))}
          <Link
            onClick={() => setMenuIsOpen(false)}
            className={` px-5 text-center py-3 rounded-lg  flex items-center justify-center bg-white border border-brand-black hover:bg-brand-black hover:text-white cursor-pointer`}
            href="/contact"
          >
            Request a quote
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
