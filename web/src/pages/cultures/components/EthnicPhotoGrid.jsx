import React from "react";
import Heading from "../../../components/ui/heading";
import NotFound from "../../../assets/image/not-found-image-illustration.jpg";

function EthnicPhotoGrid({ title, data }) {
  return (
    <>
      <Heading>{title}</Heading>
      <div className="flex flex-row justify-center gap-x-1 md:scale-125 mt-10 md:mt-20 pb-10 xl:pb-32 lg:scale-[1.8] lg:mt-40 xl:scale-[2] 2xl:scale-[2.1] xl:mt-48 2xl:mt-56">
        <div className="max-w-28 max-h-[7.2rem]  w-28 h-[7.2rem] relative self-end flex flex-col justify-end items-center">
          <div className="w-full h-full">
            <img
              src={(data && data[1].image) || NotFound}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-primary lg:text-[15px] md:text-[10px] text-[3vw]  font-bold lg:text-left text-center text-cusBrown">
            {(data && data[1].title) || "No Name"}
          </h1>
        </div>
        <div className=" w-[9rem] h-[9rem] mb-3 relative self-end flex flex-col justify-end items-center">
          <div className="w-full h-full">
            <img
              src={(data && data[0].image) || NotFound}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-primary lg:text-[15px] md:text-[10px] text-[3vw] font-bold lg:text-left text-center text-cusBrown">
            {(data && data[0].title) || "No Name"}
          </h1>
        </div>
        <div className=" w-[8rem] h-[8rem] self-end mb-2 relative  flex flex-col justify-end items-center">
          <div className="w-full h-full">
            <img
              src={(data && data[2].image) || NotFound}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-primary lg:text-[15px] md:text-[10px] text-[3vw] font-bold lg:text-left text-center text-cusBrown">
            {(data && data[2].title) || "No Name"}
          </h1>
        </div>
      </div>
    </>
  );
}

export default EthnicPhotoGrid;
