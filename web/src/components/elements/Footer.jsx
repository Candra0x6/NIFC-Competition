import React from "react";
import { navList } from "./Navbar";
import Shadow from "./Shadow";
function Footer() {
  return (
    <footer className=" min-w-screen mt-[200px]">
      <div className="bg-cusOrange relative ">
        <Shadow className="bg-cusOrange -top-14 min-w-screen" />
        <div className=" p-10 flex flex-col">
          <div className="flex flex-col border-b-2 mx-auto w-full items-center pb-10 border-black">
            <h1 className="text-cusBrown font-primary text-[35px] mb-10">
              Warnas
            </h1>
            <ul className="flex flex-row gap-x-5">
              {navList.map((item, i) => {
                return (
                  <li key={i}>
                    <a
                      className="text-cusBrown font-primary text-[25px]"
                      href={item.path}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="pt-10">
            <h1 className="text-cusBrown text-opacity-80 font-primary text-[20px] text-center">
              @2024 Kurniawan Candra Mahardika - UNFC Competition
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
