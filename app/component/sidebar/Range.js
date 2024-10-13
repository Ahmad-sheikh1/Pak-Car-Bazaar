'use client'
import React, { useState } from "react";

const PriceRangeSlider = () => {
  const [minValue, setMinValue] = useState(100000);
  const [maxValue, setMaxValue] = useState(1000000);
  const minLimit = 100000;
  const maxLimit = 1000000;

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value <= maxValue) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= minValue) {
      setMaxValue(value);
    }
  };

  return (
    <div className="w-full max-w-md  text-center p-4">
      <h3 className="text-lg text-left font-semibold mb-4 text-gray-800">Price Range</h3>
      
      {/* Price Labels */}
      <div className="flex justify-between text-purple-600 font-semibold mb-2">
        <span>₹ {minValue.toLocaleString()}</span>
        <span>₹ {maxValue.toLocaleString()}</span>
      </div>
      <div className="flex justify-between text-gray-500 text-sm mb-5">
        <span>Minimum</span>
        <span>Maximum</span>
      </div>
      {/* Sliders */}
      <div className="relative">
        {/* Min Slider */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-1 bg-gray-300 rounded-full appearance-none pointer-events-none"
          style={{
            pointerEvents: "auto",
            zIndex: minValue < maxValue ? 2 : 1,
          }}
        />
        {/* Max Slider */}
        <input
          type="range"
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          onChange={handleMaxChange}
          className="w-full h-1 bg-gray-300 rounded-full appearance-none"
          style={{
            zIndex: 1,
          }}
        />
        
        {/* Range Bar (Between min and max sliders) */}
        <div
          className="absolute top-0 h-1 bg-purple-600 rounded-full"
          style={{
            left: `${((minValue - minLimit) / (maxLimit - minLimit)) * 100}%`,
            right: `${100 - ((maxValue - minLimit) / (maxLimit - minLimit)) * 100}%`,
          }}
        ></div>
      </div>

      {/* Min and Max Labels */}
      
    </div>
  );
};

export default PriceRangeSlider;
