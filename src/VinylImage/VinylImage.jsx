import React from "react";

import classes from "./VinylImage.css";
import vinylImage from "../Assets/vinyl.jpg";

const imgStyle = {
  height: "766px",
  padding: "30px",
  marginbottom: "30px",
  maxwidth: "100%",
};

const VinylImage = (props) => (
  <div>
    <img src={vinylImage} style={imgStyle} />
  </div>
);

export default VinylImage;
