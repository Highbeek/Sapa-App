import React from "react";
import Love from "../assets/love.png";

const SapaVideo = () => {
  return (
    <div style={{ position: "relative", height: "60vh" }}>
      <iframe
        src="https://www.youtube.com/embed/xozNnytRE6E?modestbranding=1"
        title="charity"
        style={{
          width: "100%",
          height: "400px",
          border: "none",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
          opacity: "0.7",
        }}
      />

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
          backgroundColor: "rgba(255, 255, 0, 0.7)",
        }}
      >
        <h1>Let's end saPa together... </h1>
        <img src={Love} alt="sapa" />
      </div>
    </div>
  );
};

export default SapaVideo;
