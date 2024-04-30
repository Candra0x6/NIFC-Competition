import React from "react";
import Text from "../ui/text";
import a from "../../assets/malin.jpg";
import { Link } from "react-router-dom";

function MusicCard() {
  return (
    <Link to={"/music/a"}>
      <div className="2xl:w-[380px] xl:w-[22rem] lg:w-[18rem] md:w-[14rem] w-[45vw] aspect-square">
        <img
          src={a}
          alt=""
          className="w-full h-full object-cover rounded-lg md:mb-5"
        />
      </div>
    </Link>
  );
}

export default MusicCard;
