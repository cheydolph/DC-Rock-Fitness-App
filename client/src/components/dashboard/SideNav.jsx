import React, { Component } from "react";
import { Row, Col, Nav, NavItem, Button } from "react-bootstrap";
import { connect } from "react-redux";
import {Link} from "react-router-dom";

import logo from "../../assets/logo-full.svg";
import { logoutUser } from "../../actions/user.actions";

class SideNav extends Component {
  onLogoutClick = event => {
    event.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const sideNavItemStyle = {
      paddingTop: "3rem"
    };
    return (
      <Col
        xs={4}
        style={{
          backgroundColor: "black",
          maxWidth: "400px"
        }}
      >
        <Row
          style={{
            height: "100vh",
            justifyContent: "center"
          }}
        >
          <Nav
            className="flex-column"
            style={{
              fontSize: "1.5rem",
              paddingTop: "0rem"
            }}
          >
            <Nav.Item>
              <Nav.Link>
                <Link to="/">
                <img
                  src={logo}
                  width="70%"
                  height="70%"
                  className="d-inline-block align-top"
                  alt="DC Rock Fitness Logo"
                  style={{ margin: '1rem' }}
                />
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={sideNavItemStyle}>
              <Nav.Link href="/dashboard">
                <i className="material-icons">fitness_center</i> Workout
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={sideNavItemStyle}>
              <Nav.Link href="/Nutrition">
                <i className="material-icons">local_dining</i> Nutrition
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={sideNavItemStyle}>
              <Nav.Link href="/Calendar">
                <i className="material-icons">calendar_today</i> Calendar
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={sideNavItemStyle}>
              <Nav.Link href="/Payment">
                <i className="material-icons">payment</i> Payment
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={sideNavItemStyle}>
              <Nav.Link href="/Resources">
                <i className="material-icons">collections_bookmark</i> Resources
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={sideNavItemStyle}>
              <Nav.Link href="/Contact">
                <i className="material-icons">email</i> Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item style={sideNavItemStyle} className='text-center'>
              <Button onClick={this.onLogoutClick}>Logout</Button>
            </Nav.Item>
          </Nav>
        </Row>
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(SideNav);
