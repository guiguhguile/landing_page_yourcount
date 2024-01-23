import React from "react";

const Card = ({ children, index, activeIndex }) => {
  const offSet = (index - activeIndex) / 5;
  const direction = Math.sign(index - activeIndex);
  const obsOffSet = Math.abs(offSet);

  const cssTransformProperties = `
        rotateY(calc(${offSet} * 55deg))
        scaleY(calc(1 + ${obsOffSet} * -0.5))
        translateX(calc(${direction} * -3rem))
        translateZ(calc(${obsOffSet}* -40rem))
       
    `;

  const cssOpacity = `${Math.abs(index - activeIndex) >= 3 ? "0" : "1"}`;
  const cssDisplay = `${Math.abs(index - activeIndex) >= 3 ? "none" : "block"}`;

  return (
    <div
      className="card"
      style={{
        transform: cssTransformProperties,
        opacity: cssOpacity,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
