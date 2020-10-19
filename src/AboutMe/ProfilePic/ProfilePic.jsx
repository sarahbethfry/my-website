import React from "react";
import profilePic from "../../Assets/profile_pic.png";
import classes from "./ProfilePic.module.css";

const ProfilePic = (props) => {
  return (
    <div>
      <img src={profilePic} className={classes.ProfilePic} alt="Me"></img>
    </div>
  );
};

export default ProfilePic;
