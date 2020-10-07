import React from "react";

import classes from "./VinylImage.module.css";
import vinylImage from "../Assets/vinyl.jpg";

const VinylImage = (props) => (
  <div className={classes.test}>
    {console.log(classes)}
    <img src={vinylImage} className={classes.vinylImg} />
  </div>
);

export default VinylImage;
