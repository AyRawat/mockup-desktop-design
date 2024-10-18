import SectionHeading from "./SectionHeading";
import TestimonialCarousel from "./Testimonial";
const TestimonialSection = () => {
  const sectionDescription = (
    <>
      Hear from Our Satisfied Clients: Read Our Testimonials <br />
      to Learn More about Our Digital Marketing Services
    </>
  );
  return (
    <div>
      <SectionHeading title="Testimonial" description={sectionDescription} />
      <TestimonialCarousel />
    </div>
  );
};

export default TestimonialSection;
