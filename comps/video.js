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
  <>
  <div className="video-background">
  <div className="video-responsive">
    <iframe
      width="100%"
      height="1000px"
      src={`https://www.youtube.com/embed/QMkM6dIdhCA?start=28&end=59&rel=0&showinfo=0&amp;loop=1&amp;controls=0&&playlist=QMkM6dIdhCA&autoplay=1&mute=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  </div>
  
  </>
);

}


export default YoutubeEmbed;