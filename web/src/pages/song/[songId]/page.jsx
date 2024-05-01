import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import FlowerIcon from "../../../assets/icon/flower.png";
import Layout from "../../../components/layout/layout";
import Heading from "../../../components/ui/heading";
import Text from "../../../components/ui/text";
import SongCover from "../components/SongCover";
import useMusicPlayer from "../../../hooks/useMusicPlayer";
import MusicDuration from "../components/MusicDuration";
import MusicPlayerControls from "../components/MusicPlayerControls";
function SongDetail() {
  const { songId } = useParams();
  const currentAudio = useRef();

  const [musicDetail, setMusicDetail] = useState();
  console.log(musicDetail);
  const {
    audioCurrentTime,
    audioDuration,
    audioProgress,
    handleAudioPlay,
    handleAudioProgressBar,
    handleAudioUpdate,
    handleFastForward,
    handleFastRewind,
    isAudioPlaying,
    setIsAudioPlaying,
  } = useMusicPlayer(currentAudio, musicDetail);

  const getMusicById = async () => {
    try {
      const fetchData = await fetch(
        `${import.meta.env.VITE_REACT_APP_BASE_URL}/songs/${songId}`
      );
      const resJSON = await fetchData.json();
      setMusicDetail(resJSON);
    } catch (error) {
      console.log(error);
    }
  };

  const a = musicDetail && musicDetail.file.name;
  useEffect(() => {
    getMusicById();
  }, []);
  return (
    <Layout className="lg:mt-60 mt-20 lg:px-6 px-5">
      <audio
        type="audio/mpeg"
        src={`${musicDetail && musicDetail.file.url}`}
        ref={currentAudio}
        onTimeUpdate={handleAudioUpdate}
        onEnded={() => setIsAudioPlaying(false)}
      ></audio>
      <div className="bg-cusOrange lg:rounded-t-[15rem] md:rounded-t-[10rem] rounded-t-[5rem] rounded-b-2xl overflow-hidden relative lg:w-full md:w-[30rem] w-[85vw] lg:mx-0 mx-auto">
        <img
          src={FlowerIcon}
          className="absolute 2xl:w-[23rem] lg:w-[18rem] md:w-[15rem] w-[40vw] -right-5 -top-5 rotate-[120deg] lg:-right-14 lg:-top-16 "
        />
        <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 2xl:p-32 2xl:gap-x-20 xl:px-[10rem] lg:px-[8rem] lg:py-[5rem] justify-center xl:justify-center lg:gap-x-6 md:p-24 p-10">
          <SongCover
            isActive={isAudioPlaying}
            image={musicDetail && musicDetail.image.path}
          />
          <div className="flex flex-col justify-center gap-y-20 max-w-1/2">
            <Heading className="2xl:text-[4rem] lg:text-[3rem] md:text-[2.5rem] text-[2rem]">
              {musicDetail && musicDetail.title}
            </Heading>
            <div className="flex flex-col justify-items-end gap-y-10">
              <div className="flex flex-col w-full">
                <MusicDuration
                  audioCurrentTime={audioCurrentTime}
                  audioProgress={audioProgress}
                  handleAudioProgressBar={handleAudioProgressBar}
                  audioDuration={audioDuration}
                />
              </div>
              <div className="flex flex-row w-full justify-center">
                <MusicPlayerControls
                  FastForward={handleFastForward}
                  FastRewind={handleFastRewind}
                  Play={handleAudioPlay}
                  isAudioPlaying={isAudioPlaying}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20">
        <Heading>Asal Usul</Heading>
        <Text font="alata" color="cusBrown" className="text-center">
          {musicDetail && musicDetail.description}
        </Text>
      </div>
    </Layout>
  );
}

export default SongDetail;
