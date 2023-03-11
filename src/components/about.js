import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import about from "../images/about-begining.png";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="about-body">
        <img className="about-img" src={about} alt="watching stars"></img>
        <h1 className="about-f-text">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="about-s-text">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
        <div className="about-orn-container">
          <p className="about-orn-text">
            Your destination is waiting. Your van is ready.
          </p>
          <button className="about-orn-button">Explore our vans</button>
        </div>
      </div>
      <Footer origin="about" />
    </div>
  );
}
