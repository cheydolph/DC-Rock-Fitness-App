import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

class CreateExerciseForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      reps: "",
      videoUrl: "",
      notes: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onCreateExercise = this.onCreateExercise.bind(this);
  }
  onCreateExercise(event) {
    event.preventDefault();
    this.props.createExercise({
      name: this.state.name,
      reps: this.state.reps,
      videoUrl: this.state.videoUrl,
      notes: this.state.notes
    });
    this.setState({
      name: "",
      reps: "",
      videoUrl: "",
      notes: ""
    });
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <Form onSubmit={this.onCreateExercise}>
        <Form.Row>
          <Form.Group as={Col} controlId="exerciseFormName">
            <Form.Label>Exercise Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pushups, situps, etc..."
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="exerciseFormNumReps">
            <Form.Label>Number of reps</Form.Label>
            <Form.Control
              type="number"
              placeholder="Number of reps"
              name="reps"
              onChange={this.handleChange}
              value={this.state.reps}
            />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="exerciseFormVideoUrl">
          <Form.Label>Video URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter reference video URL"
            name="videoUrl"
            onChange={this.handleChange}
            value={this.state.videoUrl}
          />
        </Form.Group>
        <Form.Group controlId="exerciseFormNotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Give users specific instructions here"
            name="notes"
            onChange={this.handleChange}
            value={this.state.notes}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Exercise
        </Button>
      </Form>
    );
  }
}

export default CreateExerciseForm;
