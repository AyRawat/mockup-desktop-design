/* eslint-disable react/prop-types */
import { TiSocialLinkedinCircular } from "react-icons/ti";

const TeamSectionCard = ({ image, name, title, content }) => {
  return (
    <div className="team-card">
      <div className="member-title">
        <div className="profile-image-container">
          <img src={image} className="profile-image" />
        </div>
        <div className="profile-details">
          <h4>{name}</h4>
          <p>{title}</p>
        </div>
        <div className="linkedin-icon">
          <TiSocialLinkedinCircular />
        </div>
      </div>
      <hr className="separator" />
      <div className="member-info">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default TeamSectionCard;
