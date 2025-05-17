import  { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const logos = [
  "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/whitebrand06.png",
  "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/whitebrand01.png",
  "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/whitebrand02.png",
  "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/whitebrand04.png",
  "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/whitebrand07.png",
  "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/whitebrand01.png",
   "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/whitebrand04.png",
  "https://wordpressthemes.live/WCG10/WCM230_healthmart/medicine04/wp-content/uploads/2025/02/whitebrand01.png",
];

const PartnerSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visible = 6;

  const showNext = () => {
    if (startIndex + visible < logos.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const showPrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="relative bg-[#2b57a2] py-6 overflow-hidden">
      {/* Slider container */}
      <div className="flex justify-center items-center relative">
        {/* Left button */}
        {startIndex > 0 && (
          <button
            onClick={showPrev}
            className="absolute left-130 top-1/2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full z-10"
          >
            <FaChevronLeft />
          </button>
        )}

        {/* Logos */}
        <div className="flex space-x-10 transition-all duration-300 ease-in-out">
          {logos.slice(startIndex, startIndex + visible).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="h-10 w-auto object-contain"
            />
          ))}
        </div>

        {/* Right button */}
        {startIndex + visible < logos.length && (
          <button
            onClick={showNext}
            className="absolute right-130 top-1/2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full z-10"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default PartnerSlider;
