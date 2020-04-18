import React, { Component } from "react";
import {
  Container, Row, Col,
  Form,
  Button,
  CardDeck, Card
} from "react-bootstrap";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  getAllClients,
  createWorkout,
  getPastWorkouts
} from "../../../actions/admin.actions";
import { logoutUser } from "../../../actions/user.actions";
import CreateExerciseForm from "./CreateExerciseForm";
import TempExerciseCard from "./TempExerciseCard";
import SideNav from "../SideNav";
import PrevWorkoutPanel from './PrevWorkoutPanel';

class AdminDash extends Component {
  constructor(props) {
    super();
    this.state = {
      clients: [],
      selectedClient: {},
      selectedClientPastWorkouts: [],
      workoutDate: new Date(),
      exercises: [],
      workoutCanBeSubmitted: false
    };
    this.loadClients = this.loadClients.bind(this);
    this.handleClientSelect = this.handleClientSelect.bind(this);
    this.handleClientSelect = this.handleClientSelect.bind(this);
    this.handleDateSelect = this.handleDateSelect.bind(this);
    this.handleAddExercise = this.handleAddExercise.bind(this);
    this.handleRemoveExercise = this.handleRemoveExercise.bind(this);
    this.handleWorkoutSubmit = this.handleWorkoutSubmit.bind(this);
  }
  componentDidMount() {
    this.loadClients();
  }
  loadClients() {
    getAllClients()
      .then(data => this.setState({ clients: data }))
      .then(() => this.setState({ selectedClient: this.state.clients[0] }));
  }
  handleClientSelect(event) {
    event.preventDefault();
    this.setState({
      selectedClient: this.state.clients[
        this.state.clients.findIndex(
          client => client.name === event.target.value
        )
      ]
    });
    this.setState({
      selectedClientPastWorkouts: getPastWorkouts(this.state.selectedClient._id)
    })
  }
  handleDateSelect(date) {
    this.setState({
      workoutDate: date
    });
  }
  handleAddExercise(exerciseToAdd) {
    this.setState(prevState => ({
      exercises: [...prevState.exercises, exerciseToAdd]
    }));
  }
  handleRemoveExercise(exerciseToRemove) {
    this.setState({
      exercises: this.state.exercises.filter(
        exercise => exercise !== exerciseToRemove
      )
    });
  }
  handleWorkoutSubmit(event) {
    createWorkout({
      userId: this.state.selectedClient._id,
      date: this.state.workoutDate,
      exercises: this.state.exercises
    });
    this.setState({ exercises: [] });
  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <Container fluid style={{ padding: "0px" }}>
        <Row>
          <Col xs={2}>
            <SideNav />
          </Col>
          <Col>
            <Row>
              <Col>
                <Card>
                  <Card.Body>
                    <Form>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <Form.Label>Select Client</Form.Label>
                          <Form.Control as="select" onChange={this.handleClientSelect}>
                            {this.state.clients &&
                              this.state.clients.map(client => {
                                return <option>{client.name}</option>;
                              })}
                          </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col}>
                          <Form.Label>Workout Date</Form.Label>
                          <DatePicker
                            selected={this.state.workoutDate}
                            onChange={this.handleDateSelect}
                          />
                        </Form.Group>
                      </Form.Row>
                      <CreateExerciseForm createExercise={this.handleAddExercise} />
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <PrevWorkoutPanel
                  prevWorkouts={this.state.selectedClientPastWorkouts}
                  onAddExercise={this.handleAddExercise} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Card style={{ minHeight: '10rem' }}>
                  {this.state.exercises.length > 0 ? (
                    <CardDeck>
                      {this.state.exercises.map(exercise => (
                        <TempExerciseCard
                          type=''
                          exercise={exercise}
                          onRemove={this.handleRemoveExercise}
                        />
                      ))}
                    </CardDeck>
                  ) : (
                      <Card.Body
                        className='text-center align-midde text-muted'
                      >
                        Exercises you add will apear here
                      </Card.Body>
                    )}
                </Card>
                <Button
                  onClick={this.handleWorkoutSubmit}
                  disabled={!this.state.exercises.length > 0}
                >
                  Submit Workout
            </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container >
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(AdminDash);
