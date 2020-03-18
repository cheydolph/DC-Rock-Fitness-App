import React, { Component } from "react";
import { Container, Row, Col, CardDeck, Nav } from 'react-bootstrap'
import PropTypes from "prop-types";
import { connect } from "react-redux";


import { logoutUser, getWorkouts } from "../../actions/user.actions";

import NavigationBar from "../layout/Navbar";
import ExerciseCard from "./ExerciseCard";
import NutritionCard from './NutritionCard'

class Dashboard extends Component {
  state = {
    workout: {}
  }
  loadWorkouts = () => {
    getWorkouts(this.props.auth.user.id, Date.now())
    .then(data => this.setState({ workout: data }));
  }
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
      <body style={{ marginLeft: '250px' }}>
        <NavigationBar />
        <h1 style={{ marginLeft: '5rem', marginTop: '4rem', fontSize: '30px', fontFamily: 'Lekton' }}>{user.name},</h1>
        <h1 style={{ marginLeft: '5rem', fontSize: '60px', fontFamily: 'Lekton' }}> Here's Today's Workout:</h1>        
        {this.state.workout.exercises && this.state.workout.exercises.map(item => {
          return <ExerciseCard exercise={item}/>
        })}
        <button onClick={this.onLogoutClick}>Logout</button>
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