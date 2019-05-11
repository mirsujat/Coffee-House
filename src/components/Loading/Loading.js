import React from "react";
import loadingGif from "../../images/gif/loading-arrow.gif";
const Loading = () => (
  <div className="loading">
    <h1>loading...</h1>
    <img src={loadingGif} alt="loading..." />
  </div>
);

export default Loading;
