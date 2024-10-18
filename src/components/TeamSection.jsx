import TeamSectionCard from "./TeamSectionCard";
import TeamMember1 from "../assets/images/team-card-1.svg";
import TeamMember2 from "../assets/images/team-member-2.svg";
import TeamMember3 from "../assets/images/team-member-3.svg";
import TeamMember4 from "../assets/images/team-member-4.svg";
import TeamMember5 from "../assets/images/team-member-5.png";
import TeamMember6 from "../assets/images/team-member-6.svg";
import SectionHeading from "./SectionHeading";

const TeamSection = () => {
  const sectionDescription = (
    <>
      Meet the skilled and experienced team behind our <br />
      successful digital marketing strategies
    </>
  );
  return (
    <div className="team-section-container">
      <SectionHeading title="Team Section" description={sectionDescription} />
      <div className="members-container">
        <TeamSectionCard
          image={TeamMember1}
          name="John Smith"
          title="CEO and Founder "
          content="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
        />
        <TeamSectionCard
          image={TeamMember2}
          name="Jane Doe"
          title="Director of Operations"
          content="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
        />
        <TeamSectionCard
          image={TeamMember3}
          name="Michael Brown"
          title="Senior SEO Specialist"
          content="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
        />
        <TeamSectionCard
          image={TeamMember4}
          name="Emily Johnson"
          title="PPC Manager"
          content="
       3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
        />
        <TeamSectionCard
          image={TeamMember5}
          name="Brian Williams"
          title="Social Media Specialist"
          content="
      4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
        />
        <TeamSectionCard
          image={TeamMember6}
          name="Sarah Kim"
          title="Content Creator"
          content="
2+ years of experience in writing and editing
Skilled in creating compelling, SEO-optimized content for various industries
        "
        />
      </div>
    </div>
  );
};

export default TeamSection;
