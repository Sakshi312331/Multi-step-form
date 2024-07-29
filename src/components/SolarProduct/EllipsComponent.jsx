import React from "react";
import arrowDown from "/src/assets/arrow_down.svg"; // Adjust the import path based on your project structure

const EllipsComponent = () => {
  return (
    <div className="MuiBox-root ellips-main mt-[100px]">
      <div className="MuiBox-root jss284 ellips-part">
        <img loading="lazy" src={arrowDown} alt="arrow_down" />
      </div>
      <div className="MuiBox-root jss285 ellips-part2"></div>
    </div>
  );
};

export default EllipsComponent;
