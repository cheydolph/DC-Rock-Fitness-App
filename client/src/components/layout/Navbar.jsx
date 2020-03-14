import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const NavigationBar = (props) => {
  return (
    <ul className='sidenav'>
      <h1>DC</h1>
      <h2>ROCK</h2>
      <h3>Daily</h3>
      <li><a href='/Fitness'><i className="material-icons">fitness_center</i>{' '}Workout</a></li>
      <li><a href='/Calendar'><i className="material-icons">local_dining</i>{' '}Nutrition</a></li>
      <h3>Other</h3>
      <a href='/Calendar'><i className="material-icons">calendar_today</i>{' '}Calender</a>
      <li><a href='/Payment'><i className="material-icons">payment</i>{' '}Payment</a></li>
      <li><a href='/Resources'><i className="material-icons">collections_bookmark</i>{' '}Resources</a></li>
      <li><a href='/Contact'><i className="material-icons">email</i>{' '}Contact</a></li>
      <h3>Account</h3>
    </ul>
  );
}

export default NavigationBar;