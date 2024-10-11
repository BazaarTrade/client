import React, { useState, useRef, useEffect } from "react";
import "./Slider.css";

interface SliderProps {
  value: number;
  setValue: Function;
}

const Slider: React.FC<SliderProps> = ({value, setValue}) => {
  const sliderRef = useRef<HTMLDivElement>(null); // Reference to the slider track

  const handleThumbMove = (e: React.MouseEvent | MouseEvent) => {
    if (sliderRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      let newValue =
        ((e.clientX - sliderRect.left) / sliderRect.width) * 100; // Calculate percentage
      newValue = Math.min(100, Math.max(0, newValue)); // Keep value within bounds (0 to 100)ц
      setValue(newValue);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    // Attach listeners to handle dragging
    document.addEventListener("mousemove", handleThumbMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleThumbMove);
    });
  };

  return (
    <div className="slider-container">
      <div className="slider-track" ref={sliderRef} onMouseDown={handleMouseDown}>
        <div
          className="slider-thumb"
          style={{ left: `calc(${value}% - 8px)` }} 
        ></div>


        <div className="slider-dots">
          <div className="slider-dot" style={{ left: "0%" }}></div>
          <div className="slider-dot" style={{ left: "25%" }}></div>
          <div className="slider-dot" style={{ left: "50%" }}></div>
          <div className="slider-dot" style={{ left: "75%" }}></div>
          <div className="slider-dot" style={{ left: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;


