import React, { useState } from "react";
import FlowerHanddraw from "../../assets/image/attribute.svg";
import FlowerHanddraw2 from "../../assets/image/attribute2.svg";
export const navList = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/arsip",
    name: "Arsip",
  },
  {
    path: "/klasik",
    name: "Klasik",
  },
];
function Navbar() {
  const [isClick, setIsClick] = useState(false);

  return (
    <header className="flex flex-col relative min-w-screen w-full z-50 lg:items-center items-end">
      <img
        src={FlowerHanddraw}
        alt=""
        className="absolute left-0 top-0 2xl:w-[800px] lg:w-[400px] md:w-[250px]  w-[250px]"
      />
      <img
        src={FlowerHanddraw2}
        alt=""
        className="absolute right-0 top-0 2xl:w-[400px] lg:w-[200px] md:w-[150px] w-[110px]"
      />
      <div
        className={`flex-row lg:hidden flex justify-center items-center fixed top-0 z-[99] aspect-square p-5 mt-10 mr-5 shadow-sm shadow-black bg-cusOrange rounded-full`}
      >
        <div
          onClick={() => setIsClick(!isClick)}
          className={`flex flex-col gap-y-1 transition-all duration-300 ${
            isClick ? "translate-y-[8px]" : ""
          }`}
        >
          <div
            className={`h-[2px] w-6 bg-cusBrown  transition-all duration-500  ${
              isClick ? "rotate-45 " : ""
            } `}
          />
          <div
            className={`h-[2px] w-6 bg-cusBrown  transition-all duration-500 -ml-1 ${
              isClick ? "-rotate-45 translate-x-1 -translate-y-[6px]" : ""
            }`}
          />
          <div
            className={`h-[2px] w-6 bg-cusBrown  transition-all duration-500 ${
              isClick ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </div>
      </div>
      <nav
        className={`container transition-all lg:h-auto duration-500 lg:w-full lg:mx-auto justify-between fixed top-0 z-50 lg:flex-row flex-col lg:items-center p-10 lg:rounded-full w-[80%] h-full lg:bg-transparent bg-cusOrange bg-opacity-100 ${
          isClick
            ? "flex rounded-md"
            : "lg:translate-x-0 flex lg:opacity-100 translate-x-[100vh] opacity-0"
        } backdrop-blur-sm `}
      >
        <a href="/" className="text-[30px] font-primary lg:flex">
          Budayantara
        </a>
        <ul className="flex lg:flex-row flex-col lg:gap-x-10 gap-y-10">
          {navList.map((item) => (
            <li
              key={item.path}
              className="lg:text-[30px] text-[40px]  font-primary"
            >
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
        <a
          href="#map-section"
          className="text-[30px] font-primary bg-[#FFEC9E] flex flex-row items-center justify-center rounded-full"
        >
          <span className="px-7 py-2">Explore</span>
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
