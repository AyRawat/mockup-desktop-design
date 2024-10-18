import React, { useState } from "react";
import Bubble from "../assets/images/Bubble.svg"; // Importing the Bubble SVG

const testimonials = [
  {
    text: "We have been working with Positivus for the past year...",
    name: "John Smith",
    position: "Marketing Director at XYZ Corp",
  },
  {
    text: "The team is professional and responsive...",
    name: "Jane Doe",
    position: "CEO at ABC Ltd.",
  },
  {
    text: "Positivus has helped us improve our online presence...",
    name: "Chris Lee",
    position: "Product Manager at 123 Inc.",
  },
  {
    text: "Highly recommend their services!",
    name: "Sara Wilson",
    position: "Marketing Manager at Acme Corp",
  },
  {
    text: "Great work, great results!",
    name: "Alex Johnson",
    position: "VP of Sales at Global Tech",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>
        ‹
      </button>

      <div className="testimonial-container">
        <div
          className="testimonial-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              {/* Wrapping testimonial content inside Bubble SVG */}
              <div
                className="bubble"
                style={{ backgroundImage: `url(${Bubble})` }}
              >
                <p>{testimonial.text}</p>
              </div>
              <div className="bubble-author">
                <p className="author-name">
                  <strong>{testimonial.name}</strong>
                </p>
                <p className="author-position">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="next" onClick={nextSlide}>
        ›
      </button>

      <div className="dots">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
