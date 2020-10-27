import React from "react";
import classes from "./Projects.module.css";

import ProjectPic from "./ProjectPic";

const Projects = (props) => {
  return (
    <div id="projects" className={classes.Projects}>
      <h1>Projects</h1>

      <ProjectPic />
    </div>
  );
};

export default Projects;
