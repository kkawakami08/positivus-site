import Image from "next/image";
import contactImg from "@/assets/images/contact-us.svg";
import Button from "./ui/Button";

const ContactCard = () => {
  return (
    <div className="mx-4 lg:mx-20 bg-brand-gray p-10 rounded-3xl md:flex md:justify-around ">
      <div className="flex flex-col gap-5 md:w-1/2 ">
        <h4 className="h4-mobile md:text-center">Let's make things happen</h4>
        <p className=" md:text-center">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <Button
          text="Get your proposal"
          path="/contact"
          bgColor="bg-brand-black"
        />
      </div>
      <Image src={contactImg} alt="Contact us" className="hidden md:block " />
    </div>
  );
};

export default ContactCard;
