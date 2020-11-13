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
      "An interactive map to search and save tours of your favorite artist or city.",
    stack: "Python, Javascript, Flask, Ajax, Jinja, Postgres",
    link: "http://bandwagon.cool/",
  },
  {
    title: "Burger Builder Course",
    image: burgerbuilder,
    description: "A course I followed along with to learn React.",
    courseLink:
      "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    stack: "React, Redux, React Routing, Next.js, Jest",
    link: "https://github.com/sarahbethfry/burger-builder",
  },
];

const Projects = (props) => {
  return (
    <div id="projects" className={classes.Projects}>
      <h1>Projects</h1>
      <p className={classes.lead}>
        "To create one's world in any of the arts takes courage.” <br /> ~
        Georgia O'Keeffe
      </p>
      <hr />
      {projectPics.map((pic) =>
        pic.courseLink ? (
          <ProjectPic
            title={pic.title}
            image={pic.image}
            description={pic.description}
            courseLink={pic.courseLink}
            stack={pic.stack}
            link={pic.link}
          />
        ) : (
          <ProjectPic
            title={pic.title}
            image={pic.image}
            description={pic.description}
            stack={pic.stack}
            link={pic.link}
          />
        )
      )}
    </div>
  );
};

export default Projects;
