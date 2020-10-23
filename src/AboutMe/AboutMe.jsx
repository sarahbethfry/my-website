import React from "react";
import ProfilePic from "./ProfilePic/ProfilePic";
import classes from "./AboutMe.module.css";

const AboutMe = (props) => {
  return (
    <div id="about-me" className={classes.AboutMe}>
      <div className={classes.paragraph}>
        <h1>About Me</h1>
        <hr />
        <p>
          Hello! I am Sarah. New to the world of software development. Still
          finding my expertise but having fun learning and creating along the
          way. Looking forward to collaborating with people and companies that
          mirror my passion for building dynamic, clean, user-friendly
          applications.
        </p>
      </div>
      <div>
        <ProfilePic />
        <div className={classes.details}>
          <h2> Details </h2>
          <hr />
          <ul className={classes.detailsList}>
            <li>
              <strong>Location:</strong> San Francisco CA
            </li>
            <li>
              <strong>Nationality:</strong> United States
            </li>
            <li>
              <strong>Age:</strong> 32
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
