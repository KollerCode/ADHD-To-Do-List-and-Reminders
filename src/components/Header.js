import React from "react"
import ADHD from "../images/ADHD.jpg";

function Header() {
    
    return (
      <header>
        <img src={ADHD} alt="Champion ADHD" className="header-image" />
        <h1 className="header-title">I Can ADHD Task Manager</h1>
      </header>
    );
};

export default Header
