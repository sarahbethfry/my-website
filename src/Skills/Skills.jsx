import React from "react";
import classes from "./Skills.module.css";

const Skills = (props) => {
  return (
    <div id="skills" className={classes.Skills}>
      <h1>Skills</h1>
      <p className={classes.lead}>"I got skills" -someone</p>
      <hr />
      <table className={classes.table}>
        <thead>Languages</thead>
      </table>
    </div>
  );
};

export default Skills;
