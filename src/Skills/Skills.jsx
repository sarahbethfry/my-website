import React from "react";
import classes from "./Skills.module.css";
import Rating from "./Rating";

const skills = [
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
    ],
  },
  {
    name: "Frameworks",
    type: [
      {
        name: "Flask",
        level: 3,
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
      {skills.map((skill) => (
        <div className={classes.row}>
          <h2>{skill.name}</h2>
          {skill.type.map((t) => (
            <div className={classes.colLeft}>
              <ul className={classes.skillsList}>
                <li>
                  <span className={classes.listItem}>
                    {t.name}
                    <span>
                      <Rating level={t.level} />
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Skills;
