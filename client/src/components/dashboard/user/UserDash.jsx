import React, { Component } from "react";
import { Container, Row, Col, CardDeck, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { logoutUser, getWorkouts } from "../../../actions/user.actions";

import SideNav from "../SideNav";
import ExerciseCard from "./ExerciseCard";
import NutritionCard from "./NutritionCard";
import DailyInfo from "./DailyInfo";

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
          <SideNav />
          <Col>
            <DailyInfo
              name={this.props.auth.user.name}
              workout={this.state.workout}
            />
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
