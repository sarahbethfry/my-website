import React from "react";
import Careers from "./Careers"
import Education from "./Education"
import classes from "./Resume.module.css";

const Resume = (props) => {
  return (
    <div id="resume" className={classes.Resume}>
      <h1>Resume</h1>
      <hr/>
      <Careers />
      <hr />
      
      <Education />
      <hr />
    </div>
  );
};

export default Resume;
