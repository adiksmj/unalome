import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const YoutubeEmbed = () => {
    return (
//         <ReactPlayer
//   url={"https://www.youtube.com/embed/QMkM6dIdhCA?start=31"}
//   playing={true}
//   muted={true}
//   width={"100%"}
//   height={"560px"}
// />
  <div className="video-responsive">
    <iframe
      width="100%"
      height="560"
      src={`https://www.youtube.com/embed/QMkM6dIdhCA?start=33&end=59&rel=0&loop=1&autoplay=1&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

}


export default YoutubeEmbed;