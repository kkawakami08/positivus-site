import logo from "@/assets/images/positivus-star.svg";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import Button from "./ui/Button";

import { navLinks } from "@/constants/navigation";

const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-white py-5  flex w-full justify-between px-5 lg:px-20 drop-shadow-sm">
      <div className="flex gap-3 mr-5 items-center">
        <Image src={logo} alt="logo" width={20} />
        <h1 className="text-2xl font-semibold">Positivus</h1>
      </div>
      <IoIosMenu className="text-3xl ml-auto lg:hidden" />
      <div className="hidden lg:flex   items-center gap-10">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.path}>
            {link.text}
          </Link>
        ))}
        <Button text="Request a quote" path="/contact" bgColor="bg-white" />
      </div>
    </nav>
  );
};

export default Navbar;
