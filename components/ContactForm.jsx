"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [checkedValue, setCheckedValue] = useState("basic-contact");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkedValue === "basic-contact") {
      toast(
        `${
          name !== "" ? `Thanks ${name}!` : "Thank you!"
        } Your message has been sent to our team! "${message}"`
      );
    } else {
      toast(
        `${
          name !== "" ? `Thanks ${name}!` : "Thank you!"
        } Our marketing team will get back to you soon about your quote!`
      );
    }

    // Reset form
    setName("");
    setEmail("");
    setMessage("");
    setCheckedValue("basic-contact");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 bg-brand-gray  py-10 rounded-3xl lg:col-span-2 w-full"
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
      {/* radio buttons */}
      <div className="flex justify-evenly lg:justify-start lg:gap-10">
        <div className="flex items-center">
          <input
            checked={checkedValue === "basic-contact"}
            id="basic-contact"
            name="contact-method"
            type="radio"
            onChange={(e) => setCheckedValue(e.target.id)}
            className="cursor-pointer relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-brand-green checked:border-brand-gray checked:bg-brand-light-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
          />
          <label
            htmlFor="basic-contact"
            className="cursor-pointer  ml-3 block text-sm/6 font-medium text-gray-900"
          >
            Say Hi
          </label>
        </div>
        <div className="flex items-center">
          <input
            checked={checkedValue === "quote-contact"}
            id="quote-contact"
            name="contact-method"
            type="radio"
            onChange={(e) => setCheckedValue(e.target.id)}
            className="cursor-pointer relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-brand-green checked:border-brand-gray checked:bg-brand-light-gray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
          />
          <label
            htmlFor="quote-contact"
            className="cursor-pointer ml-3 block text-sm/6 font-medium text-gray-900"
          >
            Get a Quote
          </label>
        </div>
      </div>

      <input
        id="name"
        name="name"
        type="name"
        placeholder="Name"
        className="block w-full rounded-xl bg-white px-5 py-3 text-base text-brand-black outline outline-1 -outline-offset-1 outline-brand-blackf font-extralight placeholder:text-brand-light-gray focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 lg:h-fit"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        required
        id="email"
        name="email"
        type="email"
        placeholder="Email*"
        className="block w-full rounded-xl bg-white px-5 py-3 text-base text-brand-black outline outline-1 -outline-offset-1 outline-brand-blackf font-extralight placeholder:text-brand-light-gray focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 lg:h-fit"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <textarea
        required
        id="message"
        name="message"
        placeholder="Message*"
        className="block w-full rounded-xl bg-white px-5 py-3 text-base text-brand-black outline outline-1 -outline-offset-1 outline-brand-blackf font-extralight placeholder:text-brand-light-gray focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 lg:h-fit"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button
        type="submit"
        className="bg-brand-black text-white font-medium text-lg text-center px-7 py-5 rounded-xl flex items-center justify-center w-full lg:h-fit hover:bg-brand-green hover:text-brand-black"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
