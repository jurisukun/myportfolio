import React from "react";
import "../app/bgstyle.scss";

let sq = 100;
function Background() {
  return (
    <div className="container w-full m-0 p-0 h-[100%] z-0 bg-transparent">
      {Array.from({ length: 144 }, (_, i) => (
        <div className="square w-full" key={i}>
          <div className="dot" key={i}></div>
          <div className="dot" key={i} />
        </div>
      ))}
    </div>
  );
}

export default Background;
