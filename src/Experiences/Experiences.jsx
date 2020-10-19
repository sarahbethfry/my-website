import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import classes from "./Experiences.module.css";

const careers = [
  {
    company: "VCA San Francisco Veterinary Specialists",
    location: "San Francisco CA",
    website: "https://vcahospitals.com/san-francisco",
    linkLabel: "VCA SFVS",
    positions: [
      {
        title: "Purchasing Manager",
        dates: "January 2015 - December 2017",
        highlights: [
          "Developed and maintained a comprehensive purchasing system to keep all orders and stocked items organized.",
          "Coordinated and oversaw the maintenance efforts of all equipment in the hospital (from a stethoscope to an MRI).",
          "Performed minor repairs and acquired preventative maintenance tactics from vendors, cataloged and taught staff these practices.",
          "Ensured the proper storage and handling of controlled/hazardous substances while maintaining full compliance with state and federal regulations.",
        ],
      },
      {
        title: "Customer Service Representative",
        dates: "August 2014 - January 2015",
        highlights: [
          "Handle emergency situations with clients that demand compassion, problem solving, and fortitude.",
          "Responsible for scheduling appointments, handling medical records, patient correspondence, and processing financial transactions.",
        ],
      },
    ],
  },
  {
    company: "Universal McCann",
    location: "San Francisco CA",
    website: "https://www.umww.com/locations/san-francisco/",
    linkLabel: "UM",
    positions: [
      {
        title: "Assistant Media Buyer",
        dates: "October 2011 - December 2014",
        highlights: [
          "Responsible for the assurance that broadcast commercial orders were sent, received, confirmed, and paid for correctly.",
          "Negotiated with station representatives daily to make sure ad buys were running to the best of their potential.",
          "Use MediaBank OX system to pull ratings, fix billing discrepancies, and track all orders.",
        ],
      },
    ],
  },
];

const education = [
  {
    school: "Hackbright Academy",
    location: "San Francisco CA",
    website: "https://hackbrightacademy.com/",
    linkLabel: "Hackbright",
    program: "Software Engineering Fellowship",
    date: "March 2020",
    description:
      "Completed 12-week immersive full stack engineering program. Centered around the fundamentals of computer science and modern web development.",
  },
  {
    school: "St. John's University",
    location: "Queens NY",
    website: "",
    linkLabel: "St. John's",
    program: "Advertising Communications, BS",
    date: "May 2010",
    description:
      "Obtained 4-year degree in advertising with a concentration in account management. Students learn to analyze competitive activities and consumer trends, develop advertising strategies and coordinate activities among the creative, media and research departments. ",
  },
];

const Experiences = (props) => {
  return (
    <div id="experiences" className={classes.Experiences}>
      <h1>Experiences</h1>
      <p className={classes.lead}>
        {" "}
        "Quote la la ba la la .... "
        <br />
        "- la ti da, ksjfiels"
      </p>
      <hr />
      <h2 className={classes.h2}>Work Experience</h2>
      {careers.map((career) => (
        <WorkExperience
          company={career.company}
          location={career.location}
          website={career.website}
          linkLabel={career.linkLabel}
          positions={career.positions}
        />
      ))}

      <hr />
      <h2 className={classes.h2}>Education</h2>
      {education.map((ed) => (
        <Education
          school={ed.school}
          location={ed.location}
          website={ed.website}
          linkLabel={ed.linkLabel}
          program={ed.program}
          date={ed.date}
          description={ed.description}
        />
      ))}

      <hr />
    </div>
  );
};

export default Experiences;
