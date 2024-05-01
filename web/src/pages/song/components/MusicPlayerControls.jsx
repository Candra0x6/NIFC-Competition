import React from "react";
import PlayArrowIcon from "../../../assets/icon/play.png";
import PauseArrowIcon from "../../../assets/icon/pause.png";
import FastForwardIcon from "../../../assets/icon/fast-forward.png";
import FastRewindIcon from "../../../assets/icon/fast-rewind.png";

function MusicPlayerControls({
  FastForward,
  FastRewind,
  Play,
  isAudioPlaying,
}) {
  return (
    <ul className="flex flex-row gap-x-10">
      <li onClick={FastRewind} className="cursor-pointer">
        <img
          src={FastRewindIcon}
          className="aspect-square lg:w-20 md:w-14 w-12"
        />
      </li>
      <li onClick={Play} className="cursor-pointer">
        <img
          src={isAudioPlaying ? PauseArrowIcon : PlayArrowIcon}
          className="aspect-square lg:w-20 md:w-14 w-12"
        />
      </li>
      <li onClick={FastForward} className="cursor-pointer">
        <img
          src={FastForwardIcon}
          className="aspect-square lg:w-20 md:w-14 w-12"
        />
      </li>
    </ul>
  );
}

export default MusicPlayerControls;
