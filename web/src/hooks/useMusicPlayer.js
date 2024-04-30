import { useState } from "react";

function UseMusicPlayer(currentAudio, musicDetail) {
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState();
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const handleAudioProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };

  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const handleAudioUpdate = () => {
    let currentMinutes = Math.floor(currentAudio.current.currentTime / 60);
    let currentSeconds = Math.floor(currentAudio.current.currentTime % 60);
    let currentAudioTotal = `${
      currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes
    } : ${currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}`;
    setAudioCurrentTime(currentAudioTotal);

    const convProgress = parseInt(
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    );
    setAudioProgress(isNaN(convProgress) ? 0 : convProgress);
  };

  const handleFastRewind = () => {
    currentAudio.current.currentTime = currentAudio.current.currentTime - 10;
  };
  const handleFastForward = () => {
    currentAudio.current.currentTime = currentAudio.current.currentTime + 10;
  };

  const audioDuration = () => {
    const minutes = Math.floor(musicDetail && musicDetail.duration / 60);
    const seconds = Math.floor(musicDetail && musicDetail.duration % 60);
    const audioTotal = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;

    return audioTotal;
  };
  return {
    handleAudioPlay,
    handleAudioProgressBar,
    handleAudioUpdate,
    handleFastRewind,
    handleFastForward,
    audioProgress,
    audioCurrentTime,
    audioDuration,
    isAudioPlaying,
    audioCurrentTime,
    audioProgress,
    setIsAudioPlaying,
  };
}

export default UseMusicPlayer;
