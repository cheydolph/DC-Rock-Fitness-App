import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="blue">
        <div class="nav-wrapper" >
          <a href="#" class="brand-logo">DC Rock Fitness</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="/">Home</a></li>
            <li><a href="/Calendar">Calendar</a></li>
            <li><a href="/Payment">Payment</a></li>
            <li><a href="/About_Us">About Us</a></li>
            <li><a href="/Contact">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;