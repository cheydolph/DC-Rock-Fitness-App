import React, { Component } from "react";
import { Container, Row, Col, CardDeck, Nav } from 'react-bootstrap'
import PropTypes from "prop-types";
import { connect } from "react-redux";


import { logoutUser } from "../../actions/authActions";

import NavigationBar from "../layout/Navbar";
import ExerciseCard from "./ExerciseCard";
import NutritionCard from './NutritionCard'

class Dashboard extends Component {
  todaysWorkout = {
    sets: 0,
    exercises: [{ name: 'Pushups', reps: 12, videoUrl: 'https://www.youtube.com/watch?v=7wblGkVQx3U' }]
  };
  todaysNutrition = {
    gramsCarbs: 100,
    gramsProtein: 50,
    gramsFat: 30
  };
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <body style={{ marginLeft: '250px' }}>
        <NavigationBar />
        <h1 style={{ marginLeft: '5rem', marginTop: '4rem', fontSize: '30px', fontFamily: 'Lekton' }}>{user.name},</h1>
        <h1 style={{ marginLeft: '5rem', fontSize: '60px', fontFamily: 'Lekton' }}> Here's Today's Workout:</h1>
        <ExerciseCard></ExerciseCard>
      </body >
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);