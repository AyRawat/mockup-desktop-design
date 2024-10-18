import Megaphone from "../assets/images/Megaphone.svg";
import Amazon from "../assets/images/amazon.svg";
import Dribble from "../assets/images/dribble.svg";
import Hubspot from "../assets/images/hubspot.svg";
import Notion from "../assets/images/notion.svg";
import Netflix from "../assets/images/netflix.svg";
import Zoom from "../assets/images/zoom.svg";

const LandingSection = () => {
  return (
    <>
      <div className="landing-section">
        <div className="text-content">
          <h1>Navigating the digital landscape for success</h1>
          <p>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="consultation-btn">Book a consultation</button>
        </div>
        <div className="illustration">
          <img src={Megaphone} alt="Digital Marketing Illustration" />
        </div>
      </div>
      <div className="company-folio">
        <img src={Amazon} />
        <img src={Dribble} />
        <img src={Hubspot} />
        <img src={Notion} />
        <img src={Netflix} />
        <img src={Zoom} />
      </div>
    </>
  );
};

export default LandingSection;
