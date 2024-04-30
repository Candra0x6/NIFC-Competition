import React from "react";
import Text from "../../../../components/ui/text";

function MusicDuration({
  audioProgress,
  handleAudioProgressBar,
  audioCurrentTime,
  audioDuration,
}) {
  return (
    <>
      <div className="w-full relative flex items-center">
        <div
          style={{ width: `${audioProgress}%` }}
          className={`bg-cusBrown lg:h-4 h-3 absolute z-10 rounded-full top-0 left-0`}
        />

        <input
          type="range"
          name="musicProgressBar"
          value={audioProgress}
          onChange={handleAudioProgressBar}
          className="range slider appearance-none bg-white rounded-full lg:h-4 h-3 w-full"
        />
      </div>
      <div className="flex flex-row justify-between w-full">
        <Text font="alata" color="cusBrown">
          {audioCurrentTime || "00 : 00"}
        </Text>
        <Text font="alata" color="cusBrown">
          {audioDuration() || "00 : 00"}
        </Text>
      </div>
    </>
  );
}

export default MusicDuration;
