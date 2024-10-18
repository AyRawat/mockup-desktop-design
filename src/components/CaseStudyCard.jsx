const CaseStudyCard = () => {
  return (
    <div className="case-card-container">
      <div
        className="case-card-content"
        style={{
          borderRight: "2px solid white",
          paddingRight: "20px",
          paddingLeft: "20px",
        }}
      >
        <p>
          For a local restaurant, we implemented a targeted PPC campaign that
          resulted in a 50% increase in website traffic and a 25% increase in
          sales.
        </p>
        <a href="#">Learn More</a>
      </div>
      <div
        className="case-card-content"
        style={{
          borderRight: "2px solid white",
          paddingRight: "20px",
          paddingLeft: "20px",
        }}
      >
        <p>
          For a B2B software company, we developed an SEO strategy that resulted
          in a first page ranking for key keywords and a 200% increase in
          organic traffic.
        </p>
        <a href="#">Learn More</a>
      </div>
      <div className="case-card-content">
        <p>
          For a national retail chain, we created a social media marketing
          campaign that increased followers by 25% and generated a 20% increase
          in online sales.
        </p>
        <a href="#">Learn More</a>
      </div>
    </div>
  );
};

export default CaseStudyCard;
