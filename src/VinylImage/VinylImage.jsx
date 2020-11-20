import React from "react";

import classes from "./VinylImage.module.css";
import vinylImage from "../Assets/vinyl.jpg";

const VinylImage = (props) => (
  <div>
    <img src={vinylImage} alt={""} className={classes.vinylImg} />
  </div>
);

export default VinylImage;
