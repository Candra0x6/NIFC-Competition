import React from "react";

function Text({ children, font, color, className }) {
  return (
    <h1
      className={`2xl:text-[30px] text-${color} lg:text-[25px] md:text-[20px] text-[5vw] font-${font} ${className}`}
    >
      {children}
    </h1>
  );
}

export default Text;
