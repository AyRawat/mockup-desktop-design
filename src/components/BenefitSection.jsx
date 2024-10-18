import BenefitCard from "./BenefitCards";
import BenefitCard1 from "../assets/images/benefit-card-1.svg";
import BenefitCard2 from "../assets/images/benefit-card-2.svg";
import BenefitCard3 from "../assets/images/benefit-card-3.svg";
import BenefitCard4 from "../assets/images/benefit-card-4.svg";
import BenefitCard5 from "../assets/images/benefit-card-5.svg";
import BenefitCard6 from "../assets/images/benefit-card-6.svg";
import SectionHeading from "./SectionHeading";
const BenefitSection = () => {
  const BenefitContent1 = (
    <>
      Search engine <br />
      optimization
    </>
  );
  const BenefitContent2 = (
    <>
      Pay-per-click <br />
      advertising
    </>
  );
  const BenefitContent3 = (
    <>
      Social Media <br />
      Marketing
    </>
  );
  const BenefitContent4 = (
    <>
      Email <br />
      Marketing
    </>
  );
  const BenefitContent5 = (
    <>
      Content <br />
      Creation
    </>
  );
  const BenefitContent6 = (
    <>
      Analytics and <br />
      Tracking
    </>
  );
  const sectionDescription = (
    <>
      At our digital marketing agency, we offer a range of services to <br />
      help businesses grow and succeed online. These services include:
    </>
  );
  return (
    <>
      <SectionHeading title="Services" description={sectionDescription} />
      <div className="benefit-container">
        <BenefitCard
          image={BenefitCard1}
          color="#f3f3f3"
          highlight="#b9ff66"
          anchorColor="black"
          content={BenefitContent1}
        />
        <BenefitCard
          image={BenefitCard2}
          color="#b9ff66"
          highlight="#FFFFFF"
          anchorColor="black"
          content={BenefitContent2}
        />
        <BenefitCard
          image={BenefitCard3}
          color="#191A23"
          highlight="#FFFFFF"
          anchorColor="#FFFFFF"
          content={BenefitContent3}
        />
        <BenefitCard
          image={BenefitCard4}
          color="#f3f3f3"
          anchorColor="black"
          highlight="#b9ff66"
          content={BenefitContent4}
        />
        <BenefitCard
          image={BenefitCard5}
          color="#b9ff66"
          highlight="#FFFFFF"
          anchorColor="black"
          content={BenefitContent5}
        />
        <BenefitCard
          image={BenefitCard6}
          color="#191A23"
          highlight="#b9ff66"
          anchorColor="#FFFFFF"
          content={BenefitContent6}
        />
      </div>
    </>
  );
};

export default BenefitSection;
