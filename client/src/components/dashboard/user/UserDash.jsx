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
        <Row>
          <Col xs={2} style={{ backgroundColor: "black" }}>
            <Row style={{ height: "100vh" }}>
              <SideNav />
            </Row>
          </Col>
          <Col>
            <Row>
              <h1>
                Hey{" " + this.props.auth.user.name + ", "}
                here's your workout for today:
              </h1>
            </Row>
            <CardDeck>
              {this.state.workout == null ? (
                <p>You have no workout for today, enjoy the day off!</p>
              ) : (
                this.state.workout.exercises != null &&
                this.state.workout.exercises.map(item => {
                  return <ExerciseCard exercise={item} />;
                })
              )}
            </CardDeck>
          </Col>
        </Row>
      </Container>
    );
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
