import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideNav from "../dashboard/SideNav";
import { Container, Row, Col } from "react-bootstrap";
class Landing extends Component {
  render() {
    return (
      <Container fluid style={{padding: "0px"}}>
        <Row>
          <SideNav />
          <Col className="text-center">
            <div>
              <h1 style={{fontSize: '60px', 'margin-top':'3vw'}}>Welcome to DC Rock Fitness</h1>
              <br />
              <div
                style={{ fontFamily: "Lekton", fontSize: "50px" }}
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
                    letterSpacing: "1.5px",
                    margin: "30px",
                    backgroundColor: '#ED143D'
                  }}
                  button type = "button"
                  className="btn btn-primary btn-lg waves-effect waves-light"
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
                    letterSpacing: "1.5px",
                    backgroundColor: '#ED143D'
                  }}
                  button type = "button"
                  className="btn btn-primary btn-lg btn-flat waves-effect white black-text"
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
