import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

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
      <div className="relative flex justify-center items-center w-[70%]">
      <video
        ref={videoRef}
        className=" border-[20px] rounded-2xl border-[#903fff]"
        width="100%"
        height="30%"
        autoPlay
        loop
        muted={isMuted}
      >
        <source
          src="https://s3-figma-videos-production-sig.figma.com/video/1162680317508474349/TEAM/cf45/e9c5/-0e3a-46b5-abd5-871b0dfee46b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ESC69Ujs4Dn-8LqiVKAT-rQu2D6vljutxWpgIMN8Z6prCi5kPgeQDWO~o9Np7vLFBTy3B8Nd1zNFRFWRoCn1-vqPzfsWXJRGyb7odwIbjEa1EOoJTKi56eB4DFaDh83tKm7MHkMRf68Ck0fMV1b0Z~TRMnycyvF2eiy1ZGXQEFaYBaD-WVWyFsQQxVQOeOZrjisUF8zRZwIz59pK32rXm2RzY4SeGznJXqIBwfZpYQKRU0yOnEe6pVh35AZcafcw8SGS68pfvr1bOA91R1TfC2PrIFnGJSynxR3GEWrPGU109nMvvDG8SeatXsGQmx22JAvrVuH3G0PG~J1-GXKpVw__"
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

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
