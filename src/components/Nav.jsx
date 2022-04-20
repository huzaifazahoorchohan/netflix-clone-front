import React, { useEffect, useState } from "react";
import "../styles/nav.css";
import netflixLogo from "../assets/imgs/netflix_logo.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);

  return (
    <div className={`nav ${show && "nav_blank"}`}>
      <img alt="netflix-logo" className="nav-logo" src={netflixLogo} />
    </div>
  );
}

export default Nav;
