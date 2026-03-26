import React from "react";
import DarkMode from "../DarkMode/DarkMode";
import fire from "../../assets/fire.png";
import star from "../../assets/glowing-star.png";
import party from "../../assets/partying-face.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1> MovieKing</h1>

      <div className="navbar_links">
        {/* <DarkMode /> */}
        <a href="#popular">
          popular <img src={fire} alt="fire emoji" className="navbar_emoji" />
        </a>
        <a href="#top_rated">
          Top Rated <img src={star} alt="star emoji" className="navbar_emoji" />
        </a>
        <a href="#upcoming">
          Upcoming
          <img src={party} alt="party face emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
}
