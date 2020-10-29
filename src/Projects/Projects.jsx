import React from "react";
import classes from "./Projects.module.css";
import bandwagon from "../Assets/bandwagon.png";
import burgerbuilder from "../Assets/burger-builder.png";
import ProjectPic from "./ProjectPic";

const projectPics = [
  {
    title: "Bandwagon.cool",
    image: bandwagon,
    description:
      "An interactive map to search tours of your favorite artist or city.",
    stack: "Python, Javascript, Flask, Jinja, Postgres",
    link: "http://bandwagon.cool/",
  },
  {
    title: "Burger Builder Course",
    image: burgerbuilder,
    description: "A course in react.",
    stack: "React, Redux,",
    link: "https://github.com/sarahbethfry/burger-builder",
  },
];

const Projects = (props) => {
  return (
    <div id="projects" className={classes.Projects}>
      <h1>Projects</h1>
      <p>"I did stuff." -someone</p>
      <hr />
      {projectPics.map((pic) => (
        <ProjectPic
          title={pic.title}
          image={pic.image}
          description={pic.description}
          stack={pic.stack}
          link={pic.link}
        />
      ))}
    </div>
  );
};

export default Projects;
