import React from "react";

function Heading({ children, className }) {
  return (
    <h1
      className={`font-primary text-center ${
        className ? className : "text-[7vw] 2xl:text-[90px]"
      }   text-cusBrown`}
    >
      {children}
    </h1>
  );
}

export default Heading;
