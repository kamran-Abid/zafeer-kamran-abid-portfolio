import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: "I can design image using Canva and for website prototype I prefer to use figma.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Product Design",
      desc: "I have knowledge about product and its marketing using product, place, price and promotion.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Branding",
      desc: "Make your brand name that suit passion.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Know More</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>4</h3>
            <p>Year Experience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>20+</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>04</h4>
              <p>Years Experience</p>
            </div>
            <div className="portfolio">
              <h4>122+</h4>
              <p>Completed Projects</p>
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
