import React, { useState, useRef, useEffect } from "react";
import "./Slider.css";

interface SliderProps {
  value: number;
  setValue: Function;
}

const Slider: React.FC<SliderProps> = ({ value, setValue }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleThumbMove = (e: MouseEvent) => {
    if (sliderRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect();
      let newValue = ((e.clientX - sliderRect.left) / sliderRect.width) * 100;
      newValue = Math.min(100, Math.max(0, Math.round(newValue)));
      setValue(newValue);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    document.addEventListener("mousemove", handleThumbMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleThumbMove);
    });
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
      >
        <div
          className="slider-thumb"
          style={{ left: `calc(${value}% - 6px)` }}
        ></div>

        <div className="slider-dots">
          <div
            className="slider-dot"
            style={{ left: "0%" }}
            onClick={() => {
              setValue(0);
            }}
          ></div>
          <div
            className="slider-dot"
            style={{ left: "25%" }}
            onClick={() => {
              setValue(25);
            }}
          ></div>
          <div
            className="slider-dot"
            style={{ left: "50%" }}
            onClick={() => {
              setValue(50);
            }}
          ></div>
          <div
            className="slider-dot"
            style={{ left: "75%" }}
            onClick={() => {
              setValue(75);
            }}
          ></div>
          <div
            className="slider-dot"
            style={{ left: "100%" }}
            onClick={() => {
              setValue(100);
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Slider;



