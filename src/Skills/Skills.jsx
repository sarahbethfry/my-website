import React from "react";
import classes from "./Skills.module.css";
import Rating from "./Rating";

const skillsLeft = [
  {
    name: "Languages & libraries",
    type: [
      {
        name: "Javascript",
        level: 3,
      },
      {
        name: "Python",
        level: 3,
      },
      {
        name: "React",
        level: 2,
      },
      {
        name: "Java",
        level: 2,
      },
      {
        name: "HTML",
        level: 3,
      },
      {
        name: "CSS",
        level: 2,
      },
      {
        name: "TypeScript",
        level: 1,
      },

      {
        name: "SQL",
        level: 1,
      },
    ],
  },
  {
    name: "Industry Tools",
    type: [
      {
        name: "Slack",
        level: 4,
      },
      {
        name: "Git",
        level: 3,
      },

      {
        name: "Postgres",
        level: 2,
      },
    ],
  },
];

const skillsRight = [
  {
    name: "Frameworks",
    type: [
      {
        name: "Flask",
        level: 3,
      },
      {
        name: "Next.js",
        level: 2,
      },
      {
        name: "SQLalchemy",
        level: 2,
      },

      {
        name: "Jinja",
        level: 3,
      },
      {
        name: "Google Maps",
        level: 4,
      },
      {
        name: "MomentJs",
        level: 2,
      },
    ],
  },

  {
    name: "Other Fun Stuff",
    type: [
      {
        name: "VS Code",
        level: 3,
      },
      {
        name: "MacOS/Linux Command Line",
        level: 3,
      },
      {
        name: "Figma",
        level: 2,
      },
      {
        name: "Contentful",
        level: 1,
      },
    ],
  },
];

const Skills = (props) => {
  return (
    <div id="skills" className={classes.Skills}>
      <h1>Skills</h1>
      <p className={classes.lead}>"I got skills" -someone</p>
      <hr />
      <div className={classes.row}>
        <div className={classes.column}>
          {skillsLeft.map((skillL) => (
            <div>
              <h2>{skillL.name}</h2>
              <hr />
              {skillL.type.map((tL) => (
                <div>
                  <ul className={classes.skillsList}>
                    <li>
                      <span>
                        {tL.name}
                        <Rating level={tL.level} />
                      </span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className={classes.column}>
          {skillsRight.map((skillR) => (
            <div>
              <h2>{skillR.name}</h2>
              <hr />
              {skillR.type.map((tR) => (
                <div>
                  <ul className={classes.skillsList}>
                    <li>
                      <span>
                        {tR.name}
                        <Rating level={tR.level} />
                      </span>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
