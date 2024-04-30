import React from "react";
import { Link } from "react-router-dom";
function BookCover({ width, height, data, key }) {
  return (
    <Link to={`/book/${data.id}`}>
      <div className="flex flex-col items-center gap-y-3">
        <div
          className={`${
            width ? width : "2xl:w-[335px] lg:w-[17rem] w-[11.1rem]"
          } ${
            height ? height : "2xl:h-[435px] lg:h-[22rem] h-[15rem]"
          } bg-gray-400 2xl:pr-2 2xl:pb-2 pr-1 pb-1 rounded-lg max-w-[${width}] max-h-[${height}]`}
        >
          <img
            src={data.image.cover}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="2xl:text-[30px] lg:text-[25px] md:text-[20px] text-[5vw] font-primary">
          {data.title}
        </h1>
      </div>
    </Link>
  );
}

export default BookCover;
