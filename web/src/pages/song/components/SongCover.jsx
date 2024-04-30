import React from "react";
import MusicDisc from "../../../assets/image/music_disc.png";

function SongCover({ image, isActive, className }) {
  return (
    <div
      className={`flex relative justify-center items-center ${
        className ? className : "w-full"
      }  duration-1000 transition-all ${
        isActive ? "animate-[spin_8s_linear_infinite]" : "rotate-[0deg]"
      }`}
    >
      <img
        src={MusicDisc}
        alt="Music Disc"
        className={`${
          className ? className : "2xl:w-[40rem] lg:w-[30rem] w-full"
        } aspect-square`}
      />
      <img
        src={image}
        alt="song cover"
        className={`absolute rounded-full aspect-square w-[60%] object-cover`}
      />
      <div className="absolute aspect-square lg:w-10 w-8 bg-black rounded-full" />
    </div>
  );
}

export default SongCover;
