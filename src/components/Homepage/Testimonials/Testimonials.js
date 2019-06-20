import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <img
        src="https://user-images.githubusercontent.com/33389104/59854148-41b97380-936a-11e9-9324-c0cd520147c7.png"
        alt="quote"
        className="testimonials--img"
      />
      <p className="testimonials--paragraph">
        "Thanks to the project I was assigned at Groundworks I now have more
        real-life work experience and a sense of career direction."
      </p>
      <span className="testimonials--span">
        Steven, University of Briston, 2019
      </span>
    </div>
  );
};

export default Testimonials;
