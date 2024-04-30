import React from "react";
import NotFound from "../../../assets/image/not-found-image-illustration.jpg";
import Heading from "../../../components/ui/heading";

function CultureSnapshot({ title, data }) {
  return (
    <>
      <Heading>{title}</Heading>
      <div className="flex lg:flex-row flex-col items-center gap-x-10">
        <div className="flex relative 2xl:w-[500px] 2xl:h-[620px] lg:w-[25rem] lg:h-[30rem] w-[20rem] h-[25rem]">
          <div className="bg-white w-20 h-full absolute left-0 blur-lg" />
          <div className="bg-white w-20 h-full absolute right-0 blur-lg" />
          <div className="bg-white w-full h-20 absolute rotate-180 bottom-0 blur-lg" />
          <div className="bg-white w-full h-20 absolute rotate-180 top-0 blur-lg    " />
          <img
            src={(data && data.image) || NotFound}
            alt="Iaihs"
            className="w-full h-full p-10 object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col text-cusBrown gap-y-5 px-2">
          <h1 className="font-alata 2xl:text-[30px] lg:text-[20px] text-[4vw] font-bold lg:text-left text-center">
            {(data && data.title) || "judul"}
          </h1>
          <p className="font-alata 2xl:text-[25px] lg:text-[20px] lg:leading-normal 2xl:leading-normal text-sm lg:text-left text-center">
            {(data && data.description) || "deskripsi"}
          </p>
        </div>
      </div>
    </>
  );
}

export default CultureSnapshot;
