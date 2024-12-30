import Button from "./ui/Button";

const ContactCard = () => {
  return (
    <div className="bg-brand-gray">
      <h4 className="h4-mobile">Let's make things happen</h4>
      <p>
        Contact us today to learn more about how our digital marketing services
        can help your business grow and succeed online.
      </p>
      <Button
        text="Get your proposal"
        path="/contact"
        bgColor="bg-brand-black"
      />
    </div>
  );
};

export default ContactCard;
