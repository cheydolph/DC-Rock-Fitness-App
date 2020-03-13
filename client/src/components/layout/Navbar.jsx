import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const NavigationBar = (props) => {
  return (    
      <nav className='sidenav'>
        <a href='/Calender'>Calender</a>
        <a href='/Payment'>Payment</a>
        <a href='/About'>About</a>
        <a href='/Contact'>Contact</a>
      </nav>               
  );
}

export default NavigationBar;