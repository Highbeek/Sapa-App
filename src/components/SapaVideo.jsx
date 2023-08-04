import React, { useEffect, useRef } from "react";
import Love from "../assets/love.png";
import "./sapVid.css";

const YouTubeVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      // Create the YouTube player once the IFrame API is ready
      new window.YT.Player(videoRef.current, {
        videoId: "R-say8w5yP0",
        playerVars: {
          modestbranding: 1,
          controls: 0,
          showinfo: 0,
          loop: 1,
          playlist: "R-say8w5yP0",
        },
        events: {
          onReady: (event) => {
            // Mute the video to prevent audio flickering
            event.target.mute();
            // Hide YouTube controls after the video is ready
            event.target.setOptions({ controls: 0 });
          },
        },
      });
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1.875em",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          pointerEvents: "none", 
        }}
      >
        <h1>Let's end saPa together... </h1>
        <img src={Love} alt="sapa" />
      </div>
      <div
        className="video-container"
        ref={videoRef}
        style={{
          pointerEvents: "auto", 
        }}
      />
    </div>
  );
};

export default YouTubeVideo;
