import React from "react";
import styles from "./styles.module.css";

const Video = () => {
  return (
    <div className={styles.video}>
      <iframe
        width="700"
        height="350"
        src="https://www.youtube.com/embed/_EXy_lvkIl4?si=b_PeNeHNdlEsLwTP"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={styles.videoStyles}
      ></iframe>
    </div>
  );
};

export default Video;
