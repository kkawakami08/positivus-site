import logo from "@/assets/images/positivus-star.svg";
import Image from "next/image";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex gap-2 p-5 items-center sticky top-0 bg-white">
      <Image src={logo} alt="logo" width={20} />
      <h1 className="text-2xl font-semibold">Positivus</h1>
      <IoIosMenu className="text-3xl ml-auto" />
    </nav>
  );
};

export default Navbar;
