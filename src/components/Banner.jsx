/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hi, I'm M Zafeer Kamran Abid</h6>
            <h3>Web Designer & Developer</h3>
            <p>
              I've done B.Sc. Software Engineering from one of the top university of Pakistan
               as know as University of Engineering and Technology (UET), Taxila. I have experties in Website designing and development. 
               I can design websites using <strong>HTML5, CSS3</strong> 
               with technologies like <strong>bootstrap, Sass</strong> and <strong>tailwind CSS</strong> and <strong>JavaScript</strong> with <strong>React.js</strong>  Library.
               For backend web development I use <strong>Node.js</strong> with <strong>Express.js</strong> framework and for database I prefer to use <strong>Mongo DB</strong>. 
               I have also experties in <strong>PHP</strong> with <strong>Laravel</strong> framewok.
            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
