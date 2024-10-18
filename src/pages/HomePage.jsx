import NavBar from "../components/Navbar";
import LandingSection from "../components/LandingSection";
import BenefitSection from "../components/BenefitSection";
import ExtendedCard from "../components/ExtendedCard";
import CaseStudySection from "../components/CaseStudySection";
import WorkingProcessSection from "../components/WorkingProcessSection";
import TeamSection from "../components/TeamSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <NavBar />
      <LandingSection />
      <BenefitSection />
      <ExtendedCard />
      <CaseStudySection />
      <WorkingProcessSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
