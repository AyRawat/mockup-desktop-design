/* eslint-disable react/prop-types */

const SectionHeading = ({ title, description }) => {
  return (
    <div className="section-heading">
      <h2 className="heading-title">{title}</h2>
      <p className="heading-description">{description}</p>
    </div>
  );
};

export default SectionHeading;
