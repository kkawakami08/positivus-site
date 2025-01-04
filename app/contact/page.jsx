import MainLabel from "@/components/ui/MainLabel";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import contactImg from "@/assets/images/contact-us.svg";

const ContactPage = () => {
  return (
    <div className="flex flex-col gap-10 px-5 lg:px-0">
      <div className="flex flex-col items-center gap-5 text-center lg:items-start">
        <MainLabel text="Contact Us" bgColor="bg-brand-green" />

        <p>Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-items-center bg-brand-gray px-10 rounded-3xl gap-5">
        <ContactForm />
        <Image
          src={contactImg}
          alt="contact image"
          width="0"
          height="0"
          sizes="100vw"
          className="hidden lg:block w-full"
        />
      </div>
    </div>
  );
};

export default ContactPage;
