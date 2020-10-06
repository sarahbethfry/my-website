import React from "react";
import VinylImage from "../VinylImage/VinylImage";

const Header = (props) => {
  return (
    <div>
      <VinylImage />
      <div>
        <h1>Sarah Fry</h1>
        <hr />
        <p>Interactive Resume</p>
      </div>
    </div>
  );
};

export default Header;
