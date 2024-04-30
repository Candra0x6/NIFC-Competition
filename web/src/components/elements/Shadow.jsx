import React from "react";

function Shadow({ className }) {
  return (
    <div className={`w-[200vh] ${className} h-[100px] z-0 blur-lg absolute`} />
  );
}

export default Shadow;
