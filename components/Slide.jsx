import Card from "./Card";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useState } from "react";

const Slide = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleNextItemBtn() {
    setActiveIndex((prev) => {
      return prev - 1 >= 0 ? prev - 1 : prev;
    });
  }

  function handlePrevItemBtn() {
    setActiveIndex((prev) => {
      return prev + 1 < items.length ? prev + 1 : prev;
    });
  }

  return (
    <div className="slide-container-desktop">
      {activeIndex < items.length - 1 && (
        <button
          className="btn-slide-switch-card-left btn-slide-switch-card"
          onClick={handlePrevItemBtn}
        >
          <FaArrowAltCircleLeft size={40} color="#1cbae9" />
        </button>
      )}

      {items.map((item, index) => (
        <Card key={index} index={index} activeIndex={activeIndex}>
          {item}
        </Card>
      ))}

      {activeIndex > 0 && (
        <button
          className="btn-slide-switch-card-right btn-slide-switch-card"
          onClick={handleNextItemBtn}
        >
          <FaArrowAltCircleLeft
            size={40}
            color="#1cbae9"
            style={{ transform: "rotate(180deg)" }}
          />
        </button>
      )}
    </div>
  );
};

export default Slide;
