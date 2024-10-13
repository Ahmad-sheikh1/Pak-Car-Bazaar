"use client"
import { useState } from "react";

const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-8 bg-blue-50 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Know more about pre-delivery inspection</h1>
      <p className="text-gray-600">
        You don&apos;t buy a car, you invest in one. But, how do you know if the car you&apos;re buying is worth the investment?
        Introducing CARS24&apos;s pre-delivery inspection (PDI) for new & used cars! A PDI involves inspecting the crucial
        elements of the car, like the interior, exterior, electrical, and mechanical components.
        {isExpanded && (
          <span>
            {" "}
            In the case of used cars, additional checks, such as documentation inspection, are performed to ensure the
            registration has the correct number, and all paperwork is in order.
          </span>
        )}
      </p>
      <button
        onClick={toggleReadMore}
        className="text-orange-500 font-bold flex items-center mt-4"
      >
        {isExpanded ? "Read less" : "Read more"}
        <span className="ml-2">{isExpanded ? "↑" : "↓"}</span>
      </button>
    </div>
  );
};

export default ReadMore;
