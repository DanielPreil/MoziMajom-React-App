// ----- Loading Screen Component -----

// Import React from react
import React from "react";
// Import ReactLoading from react-loading
import ReactLoading from "react-loading";

const LoadingScreen = () => {
  return (
    // loadingBox Div
    <div className="loadingScreenBox">
        {/*ReactLoading: type:Bars, color: rgb(255, 0, 149)*/}
        <ReactLoading type="bars" color="rgb(255, 0, 149)"
        height={300} width={150} className="loadingScreenIcon"/>
    </div>
  )
}

export default LoadingScreen