import React from "react"
import ADHD from "../images/ADHD.jpg";
import {  } from "react-bootstrap"

function Header() {
    
  return (
    <div class="container-fluid" className="header">
   <img src={ADHD} alt="Champion ADHD" className="header-image" /> 
     <h1 className="header-title">I Can ADHD Task Manager</h1> 
    </div>
  )
};

export default Header
