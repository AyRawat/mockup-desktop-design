import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";

const ContactSection = () => {
  const sectionDescription = (
    <>
      Step-by-Step Guide to Achieving Your <br />
      Business Goals
    </>
  );
  return (
    <div className="contact-section-container">
      <SectionHeading title="Contact Us" description={sectionDescription} />
      <ContactForm />
    </div>
  );
};

export default ContactSection;
