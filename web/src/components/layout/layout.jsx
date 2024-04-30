import React from "react";

function Layout({ children, className }) {
  return (
    <div className={`container mx-auto w-full z-10 ${className}`}>
      {children}
    </div>
  );
}

export default Layout;
