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
          I have always had a passion for problem-solving, organization, and
          creating solutions. After gaining my B.S. in Advertising
          Communications at St. John’s University in New York City, I had
          ambitions of living the fast paced New York ad lifestyle, but quickly
          realized this world was not for me. Leveraging my skills as a buyer in
          advertising, I found a more fulfilling career in the veterinary world
          as the purchasing manager for a large specialty and emergency vet
          hospital. This job taught me a lot about myself, mainly how much I
          enjoyed solving technical issues. I became a mother in 2018 and
          decided to leave the workforce and stay home with my son. This time at
          home allowed me to explore new career opportunities. After taking an
          online Intro to Python course through city college, I fell in love
          with coding and all the possibilities it creates. After Hackbright, I
          hope to find a job where she can contribute my passion for building
          dynamic, clean, user-friendly applications.
        </p>
      </div>
      <ProfilePic />
    </div>
  );
};

export default AboutMe;
