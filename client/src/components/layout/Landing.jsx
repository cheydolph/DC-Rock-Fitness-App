import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideNav from "../dashboard/SideNav";
import { Container, Row, Col } from "react-bootstrap";
class Landing extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <SideNav />
          <Col className="text-center">
            <div>
              <h1>Welcome to DC Rock Fitness</h1>
              <br />
              <div
                style={{ fontFamily: "Lekton", fontSize: "40px" }}
                className="container valign-wrapper"
              >
                <div className="row">
                  <div className="col s12 center-align">
                    <p className="flow-text grey-text text-darken-1">
                      Click below to Login or Register
                    </p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col s6">
                <Link
                  to="/register"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Register
                </Link>
              </div>
              <div className="col s6">
                <Link
                  to="/login"
                  style={{
                    width: "140px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px"
                  }}
                  className="btn btn-large btn-flat waves-effect white black-text"
                >
                  Log In
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Landing;
