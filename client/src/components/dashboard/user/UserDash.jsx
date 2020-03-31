import React, { Component } from "react";
import { Container, Row, Col, CardDeck, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser, getWorkouts } from "../../../actions/user.actions";

import SideNav from "../SideNav";
import ExerciseCard from "./ExerciseCard";
import NutritionCard from "./NutritionCard";

class UserDash extends Component {
  state = {
    workout: {}
  };
  loadWorkouts = () => {
    getWorkouts(this.props.auth.user.id, Date.now()).then(data =>
      this.setState({ workout: data })
    );
  };
  componentDidMount() {
    this.loadWorkouts();
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <Container fluid>
        <Row style={{ height: "100vh" }}>
          <Col xs={2} style={{ backgroundColor: "black" }}>
            <SideNav />
          </Col>
          <Col>
            <Row>
              <h1>
                Hey{" " + this.props.auth.user.name + ", "}
                here's your workout for today:
              </h1>
            </Row>
            <Row>
              {this.state.workout == null ? (
                <p>You have no workout for today, enjoy the day off!</p>
              ) : (
                this.state.workout.exercises != null &&
                this.state.workout.exercises.map(item => {
                  return <ExerciseCard exercise={item} />;
                })
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    );
    /*<body style={{ marginLeft: "250px" }}>
        <SideNav />
        <h1
          style={{
            marginLeft: "5rem",
            marginTop: "4rem",
            fontSize: "30px",
            fontFamily: "Lekton",
            paddingLeft: "250px"
          }}
        >
          {user.name},
        </h1>
        <h1
          style={{
            marginLeft: "5rem",
            fontSize: "60px",
            fontFamily: "Lekton",
            paddingLeft: "250px"
          }}
        >
          {" "}
          Here's Today's Workout:
        </h1>
        <div style={{ display: "flex", paddingLeft: "200px" }}>
          {this.state.workout == null ? (
            <p>You have no workout for today, enjoy the day off!</p>
          ) : (
            this.state.workout.exercises != null &&
            this.state.workout.exercises.map(item => {
              return <ExerciseCard exercise={item} />;
            })
          )}
        </div>
        <button onClick={this.onLogoutClick}>Logout</button>
          </body>*/
  }
}

UserDash.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(UserDash);
