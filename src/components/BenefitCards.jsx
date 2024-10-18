/* eslint-disable react/prop-types */
const BenefitCard = ({ image, color, highlight, content, anchorColor }) => {
  return (
    <div className="benefit-card" style={{ backgroundColor: color }}>
      <div className="benefit-card-text">
        <span style={{ backgroundColor: highlight }}>{content}</span>
        <a href="#" style={{ color: anchorColor }}>
          Learn More
        </a>
      </div>
      <div className="benefit-card-img">
        <img src={image} />
      </div>
    </div>
  );
};

export default BenefitCard;
