import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import classes from "./Contact.module.css";

const Contact = (props) => {
  return (
    <div id="contact" className={classes.Contact}>
      <h1>Contact</h1>
      <p className={classes.lead}> "Sha lala" - blah</p>
      <hr />
      <ul className={classes.contactList}>
        <li>
          <a href="https://github.com/sarahbethfry" target="_blank">
            <span>
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="3x"
                className={classes.icon}
              />
              https://github.com/sarahbethfry
            </span>
          </a>
        </li>
        <a
          href="https://www.linkedin.com/in/sarah-fry-29a74419/"
          target="_blank"
        >
          <span>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="3x"
              className={classes.icon}
            />
            https://www.linkedin.com/in/sarah-fry-29a74419/
          </span>
        </a>
      </ul>
    </div>
  );
};

export default Contact;
