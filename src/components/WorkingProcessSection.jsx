import WorkingProcessAccordion from "./WorkingProcessAccordion";
import workingProcessContent from "../data/Content";
import SectionHeading from "./SectionHeading";
const WorkingProcessSection = () => {
  const sectionDescription = (
    <>
      {" "}
      Step-by-Step Guide to Achieving
      <br /> Your Business Goals
    </>
  );
  return (
    <div className="working-process-container">
      <SectionHeading
        title="Our Working Process"
        description={sectionDescription}
      />
      {workingProcessContent.map((process, index) => (
        <WorkingProcessAccordion
          key={process.id}
          index={index + 1}
          title={process.title}
          content={process.content}
        />
      ))}
    </div>
  );
};

export default WorkingProcessSection;
