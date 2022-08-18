/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    {
      title: "Hostel Allotment System",
      img: "/projects/1.png",
      gLink: "https://github.com/kamran-Abid/hostelallotmentsystems",
      lLink: "https://github.com/kamran-Abid/hostelallotmentsystems",
    },
    {
      title: "Images",
      img: "/projects/2.png",
      gLink: "https://github.com/kamran-Abid/imaging-image-gallery-",
      lLink: "https://kamran-Abid.github.io/imaging-image-gallery-",
    },
    {
      title: "Counter app using React Redux",
      img: "/projects/3.png",
      gLink: "https://github.com/kamran-Abid/reactreduxcounterapp",
      lLink: "https://kamran-abid.github.io/reactreduxcounterapp/",
    },
    {
      title: "React contact us form with firebase",
      img: "/projects/4.png",
      gLink: "https://github.com/kamran-Abid/conactusreactfirebase",
      lLink: "https://kamran-Abid.github.io/conactusreactfirebase",
    },
    {
      title: "React App using Material UI",
      img: "/projects/5.png",
      gLink: "https://github.com/kamran-Abid/material-ui-firstweb",
      lLink: "https://kamran-abid.github.io/material-ui-firstweb/",
    },
    {
      title: "Dynamic Website",
      img: "/projects/6.png",
      gLink: "https://github.com/kamran-Abid/dynamicweb",
      lLink: "https://github.com/kamran-Abid/dynamicweb",
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/hafizjavaid"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                </div>
              </div>
              <p>
                I'm all this code on Github. You can visit the link on top right and can my project.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
