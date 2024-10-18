import CaseStudyCard from "./CaseStudyCard";
import SectionHeading from "./SectionHeading";

const CaseStudySection = () => {
  const sectionDescription = (
    <>
      Explore Real-Life Examples of Our Proven Digital Marketing <br />
      Success through Our Case Studies
    </>
  );
  return (
    <div className="case-study-container">
      <SectionHeading title="Case Studies" description={sectionDescription} />
      <div className="case-card">
        <CaseStudyCard />
      </div>
    </div>
  );
};

export default CaseStudySection;
