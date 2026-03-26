import React from "react";

import "./DarkMode.css";

import Moon from "../../assets/icons8-moon-50.png";
import Sun from "../../assets/icons8-sun-50.png";

const DarkMode = () => {
  function setDarkTheme() {
    document.querySelector("body").setAttribute("data-theme", "dark");
  }
  function setLightTheme() {
    document.querySelector("body").setAttribute("data-theme", "light");
  }
  setDarkTheme();

  function toggleTheme(e) {
    if (e.target.checked) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <img src={Sun} alt="" />
        <img src={Moon} alt="" />
        {/* <Sun />
        <Moon /> */}
      </label>
    </div>
  );
};

export default DarkMode;
