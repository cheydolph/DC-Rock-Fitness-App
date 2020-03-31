import React, { Component } from "react";
import { Navbar, Nav, NavItem, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";

import logo from "../../assets/logo-full.svg";
import { logoutUser } from "../../actions/user.actions";

class SideNav extends Component {
  onLogoutClick = event => {
    event.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link>
            <img
              src={logo}
              width="75"
              height="75"
              className="d-inline-block align-top"
              alt="DC Rock Fitness Logo"
            />
          </Nav.Link>
        </Nav.Item>
        <br/>
        <Nav.Item>
          <Nav.Link disabled>DAILY</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/dashboard">
            <i className="material-icons">fitness_center</i> Workout
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <i className="material-icons">local_dining</i> Nutrition
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link disabled>OTHER</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">
            <i className="material-icons">home</i> Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Calendar">
            <i className="material-icons">calendar_today</i> Calendar
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Payment">
            <i className="material-icons">payment</i> Payment
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Resources">
            <i className="material-icons">collections_bookmark</i> Resources
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/Contact">
            <i className="material-icons">account_box</i> About Us
          </Nav.Link>
        </Nav.Item>
        <br/>
        <Nav.Item>
          <Button onClick={this.onLogoutClick}>Logout</Button>
        </Nav.Item>
      </Nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(SideNav);
