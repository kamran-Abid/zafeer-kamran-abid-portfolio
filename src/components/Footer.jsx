/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    // <footer>
    //   <div className="container">
    //     <span className="logo">Z K Abid.</span>
    //     <div className="links">
    //       <a href="#">
    //         <i className="fab fa-facebook"></i>
    //       </a>
    //       <a href="#">
    //         <i className="fab fa-youtube"></i>
    //       </a>
    //       <a href="#">
    //         <i className="fab fa-twitter"></i>
    //       </a>
    //     </div>
    //     <p className="copyright">
    //       <i className="fas fa-heart"></i>
    //       Created By Z K Abid
    //     </p>
    //   </div>
    // </footer>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Links</h4>
            <ul className="footer-list">
              <l1><a className="link-list" href="#banner">Home</a></l1>
              <l1><a className="link-list" href="#services">Sevices</a></l1>
              <l1><a className="link-list" href="#experiences">Experience</a></l1>
              <l1><a className="link-list" href="#projects">Projects</a></l1>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Skills</h4>
            <ul className="footer-list">
              <li>HTML5</li>
              <li>CSS3 with bootstrap and tailwind CSS</li>
              <li>JavaScript with React.js Library</li>
              <li>Node.js with Express framework</li>
              <l1>SQL, Mongo DB and MySQL</l1>
              <li>PHP with Laravel framework</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Newsletter </h4>
            <p>Join my Newsletter to get updates. </p>
            <div className="email-box">
              <form>
                <i class="fa-solid fa-envelope"></i>
                <input type="text" classsName="newsletter_input" placeholder="Enter your email" /><br />
                <input type='submit' className="subscribe_btn" value="Subscribe" />
              </form>
            </div>
            
          </div>
          <div className="footer-col">
            <h4>Social media</h4>
            <a href="https://www.facebook.com/zk.abid.1"><i className="fab fa-facebook-square social-icons"></i></a>
            <a href="https://www.instagram.com/zkabid247/"><i className="fab fa-instagram social-icons"></i></a>
            <a href="mailto:kamran.abid5er@gmail.com"><i className="fa fa-envelope social-icons"></i></a>
            <a href="https://twitter.com/Z_K_Abid"><i className="fab fa-twitter social-icons" ></i></a>
            <a href="https://join.skype.com/invite/X516f8iRLqM2"><i className="fab fa-skype social-icons"></i></a>
            <a href="https://github.com/kamran-Abid/"><i className="fab fa-github social-icons"></i></a>
            <a href="https://www.linkedin.com/in/kamran-abid-074308196/"><i className="fab fa-linkedin social-icons"></i></a>
            <a href="wa.me/+923040550911"><i className="fab fa-whatsapp social-icons"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
