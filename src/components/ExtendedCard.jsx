import ExtendedCardImage from "../assets/images/extended-card.svg";

const ExtendedCard = () => {
  return (
    <div className="extended-card-container">
      <div className="extended-card-content">
        <h3>Let's Make things happen</h3>
        <p>
          Contact us today to learn more about how our digital <br />
          marketing services can help your business grow and <br />
          succeed online.
        </p>
        <button>Get your free proposal</button>
      </div>
      <div className="extended-card-image">
        <img src={ExtendedCardImage} />
      </div>
    </div>
  );
};

export default ExtendedCard;
