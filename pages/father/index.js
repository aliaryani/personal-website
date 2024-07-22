import { Button } from "@mui/material";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useState } from "react";
const Father = () => {
  const videoref = useRef();

  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    setInterval(() => {
      checkPlay();
    }, 100);
  });

  const handlePlay = () => {
    videoref.current.play();
    setIsPlay(true);
  };

  const checkPlay = () => {
    if (videoref?.current.paused) {
      setIsPlay(false);
    }
  };

  return (
    <div
      style={{
        background: "black",
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
      }}
    >
      {!isPlay && (
        <PlayCircleOutlineIcon
          style={{
            width: 120,
            height: 120,
            position: "absolute",
            zIndex: 99999,
          }}
          onClick={handlePlay}
        />
      )}

      {/* </button> */}
      <video
        ref={videoref}
        controls
        width={"100%"}
        // height={"200px"}
        playsInline
        src={`/video-dad.mp4`}
        // autoPlay
        // muted
        // loop
      />
    </div>
  );
};

export default Father;
