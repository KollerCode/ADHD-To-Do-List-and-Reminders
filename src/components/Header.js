import React from "react"
import ADHD from "../images/ADHD.jpg";

function Header() {
    
  return (
      <div className="header-div">
      <header className="header">
        {/* <img src={ADHD} alt="Champion ADHD" className="header-image" /> */}
        <h1 className="header-title">I Can ADHD Task Manager</h1>
      </header>
      </div>
    );
};

export default Header
