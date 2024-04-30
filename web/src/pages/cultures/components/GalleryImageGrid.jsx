import React from "react";
import NotFound from "../../../assets/image/not-found-image-illustration.jpg";

function GalleryImageGrid({ data }) {
  return (
    <div className="flex flex-col w-full items-center 2xl:scale-90 lg:scale-50 md:scale-[0.4] lg:-mt-[150px] lg:mb-10 scale-[0.29] 2xl:mt-0 -mt-[200px] -ml-10 2xl:ml-28">
      <div className="grid grid-cols-3 2xl:w-[90vh]  w-full gap-5">
        <div className="flex flex-col items-end gap-5">
          <div className="cursor-pointer group w-[350px] h-[250px] bg-black overflow-hidden relative flex flex-row justify-center items-end">
            <h1 className="absolute translate-y-52 group-hover:translate-y-0 transition-all duration-500 opacity-0 z-20 group-hover:opacity-100 font-primary text-white text-[25px] mb-2">
              {data && data.art_image[0].title}
            </h1>
            <div className="w-full h-full invisible group-hover:visible z-10 absolute translate-y-52 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-cusBrown group-hover:via-[#925e0950] group-hover:to-transparent " />
            <img
              src={(data && data.art_image[0].image) || NotFound}
              alt=""
              className="object-cover w-full h-full group-hover:opacity-80 group-hover:scale-110 transition-all duration-300 ease-in-out "
            />
          </div>
          <div className="cursor-pointer group w-[500px] h-[400px] bg-black overflow-hidden relative flex flex-row justify-center items-end">
            <h1 className="absolute translate-y-52 group-hover:translate-y-0 transition-all duration-500 opacity-0 z-20 group-hover:opacity-100 font-primary text-white text-[25px] mb-2">
              {data && data.art_image[1].title}
            </h1>
            <div className="w-full h-full invisible group-hover:visible z-10 absolute translate-y-52 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-cusBrown group-hover:via-[#925e0950] group-hover:to-transparent " />
            <img
              src={(data && data.art_image[1].image) || NotFound}
              alt=""
              className="object-cover w-full h-full group-hover:opacity-80 group-hover:scale-110 transition-all duration-300 ease-in-out "
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-5 ">
          <div className="flex gap-5">
            <div className="cursor-pointer group w-[300px] h-[300px] bg-black overflow-hidden relative flex flex-row justify-center items-end">
              <h1 className="absolute translate-y-52 group-hover:translate-y-0 transition-all duration-500 opacity-0 z-20 group-hover:opacity-100 font-primary text-white text-[25px] mb-2">
                {data && data.art_image[2].title}
              </h1>
              <div className="w-full h-full invisible group-hover:visible z-10 absolute translate-y-52 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-cusBrown group-hover:via-[#925e0950] group-hover:to-transparent " />
              <img
                src={(data && data.art_image[2].image) || NotFound}
                alt=""
                className="object-cover w-full h-full group-hover:opacity-80 group-hover:scale-110 transition-all duration-300 ease-in-out "
              />
            </div>
            <div className="flex flex-col items-start gap-5">
              <div className="cursor-pointer group  w-[250px] h-[250px] mt-12 bg-black overflow-hidden relative flex flex-row justify-center items-end">
                <h1 className="absolute translate-y-52 group-hover:translate-y-0 transition-all duration-500 opacity-0 z-20 group-hover:opacity-100 font-primary text-white text-[25px] mb-2">
                  {data && data.art_image[5].title}
                </h1>
                <div className="w-full h-full invisible group-hover:visible z-10 absolute translate-y-52 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-cusBrown group-hover:via-[#925e0950] group-hover:to-transparent " />
                <img
                  src={(data && data.art_image[5].image) || NotFound}
                  alt=""
                  className="object-cover w-full h-full group-hover:opacity-80 group-hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <div className="cursor-pointer group w-[400px] h-[400px]  bg-black overflow-hidden relative flex flex-row justify-center items-end">
              <h1 className="absolute translate-y-52 group-hover:translate-y-0 transition-all duration-500 opacity-0 z-20 group-hover:opacity-100 font-primary text-white text-[25px] mb-2">
                {data && data.art_image[3].title}
              </h1>
              <div className="w-full h-full invisible group-hover:visible z-10 absolute translate-y-52 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-cusBrown group-hover:via-[#925e0950] group-hover:to-transparent " />
              <img
                src={(data && data.art_image[3].image) || NotFound}
                alt=""
                className="object-cover w-full h-full group-hover:opacity-80 group-hover:scale-110 transition-all duration-300 ease-in-out "
              />
            </div>
            <div className="cursor-pointer group w-[500px] h-[200px] bg-black overflow-hidden relative flex flex-row justify-center items-end">
              <h1 className="absolute translate-y-52 group-hover:translate-y-0 transition-all duration-500 opacity-0 z-20 group-hover:opacity-100 font-primary text-white text-[25px] mb-2">
                {data && data.art_image[4].title}
              </h1>
              <div className="w-full h-full invisible group-hover:visible z-10 absolute translate-y-52 group-hover:translate-y-0 transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-cusBrown group-hover:via-[#925e0950] group-hover:to-transparent " />
              <img
                src={(data && data.art_image[4].image) || NotFound}
                alt=""
                className="object-cover w-full h-full group-hover:opacity-80 group-hover:scale-110 transition-all duration-300 ease-in-out "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryImageGrid;
