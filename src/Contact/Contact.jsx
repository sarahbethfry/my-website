import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./Contact.module.css";

const Contact = (props) => {
  return (
    <div id="contact" className={classes.Contact}>
      <div>
        <h1>Contact</h1>
        <hr />
        <ul className={classes.contactList}>
          <li>
            <a
              href="https://github.com/sarahbethfry"
              target="_blank"
              className={classes.anchortag}
            >
              <div className={classes.wholelistitem}>
                <div>
                  <FontAwesomeIcon
                    icon={faGithubSquare}
                    size="3x"
                    className={classes.icon}
                  />
                </div>
                <div className={classes.details}>
                  <h4>Github</h4>
                  <p>Building my skills</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sarah-fry-29a74419/"
              target="_blank"
              className={classes.anchortag}
            >
              <div className={classes.wholelistitem}>
                <div>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="3x"
                    className={classes.icon}
                  />
                </div>
                <div className={classes.details}>
                  <h4>LinkedIn</h4>
                  <p>Me being professional</p>
                </div>
              </div>
            </a>
          </li>
          <li>
            <a
              href="https://open.spotify.com/user/sarahbeth0610?si=i5SC9wNnSFmvWbtuHd7NyQ"
              target="_blank"
              className={classes.anchortag}
            >
              <div className={classes.wholelistitem}>
                <div>
                  <FontAwesomeIcon
                    icon={faSpotify}
                    size="3x"
                    className={classes.icon}
                  />
                </div>
                <div className={classes.details}>
                  <h4>Spotify</h4>
                  <p>In Love with my spotify</p>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
