import React, { useRef, useState } from "react";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="relative flex justify-center items-center w-[70%] max-md:w-[90%]  mb-7">
      <video
        ref={videoRef}
        className=" border-[20px] rounded-2xl border-[#903FFF] max-md:border-2"
        width="100%"
        height="30%"
        autoPlay
        loop
        muted={isMuted}
      >
        <source
          src="introvideo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute bottom-6 right-8 flex space-x-4">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className=" text-white p-2  rounded-full"
        >
          {isPlaying ? <img className="w-7 h-7" src="Play Pause.svg" alt="" /> : <img className="w-7 h-7"  src="play.svg" alt="play" />}
        </button>

        {/* Mute/Unmute Button */}
        <button
          onClick={toggleMute}
          className=" text-white p-2 rounded-full"
        >
          {isMuted ? <img src="Sound on off.svg" alt="" srcSet="" /> : <img src="sound-on.svg" alt="" srcSet="" />}
        </button>
      </div>
      </div>
    </div>
  );
};


export default Video;
