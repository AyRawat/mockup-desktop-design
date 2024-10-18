/* eslint-disable react/prop-types */
import { useState } from "react";

const WorkingProcessAccordion = ({ index, title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`accordion ${isActive ? "accordion-title-opened" : "accordion-title-closed"}`}
    >
      <div className="accordion-item">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <span className="accordion-index">
            {index < 10 ? "0" + index : index}
          </span>
          <div style={{ flexGrow: 1 }}>{title}</div>
          <div className="accordion-toggle">{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};

export default WorkingProcessAccordion;
