import React, { useState } from 'react';
import {
    Row, Col, Container,
    Card, CardColumns,
    Nav
} from 'react-bootstrap';

import PrevWorkoutList from './PrevWorkoutList';
import TempExerciseCard from './TempExerciseCard';

const PrevWorkoutPanel = ({ prevWorkouts, onAddExercise }) => {
    const selectedWorkout = useState({});
    const setSelectedWorkout = workoutDate => {
        selectedWorkout =
            prevWorkouts[prevWorkouts.find(workout => workout.date == workoutDate)];
    };
    return (
        <Card>
            <Card.Header>
                <Nav variant='tabs' defaultActiveKey="#previous">
                    <Nav.Item>
                        <Nav.Link href="#previous">Past</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='#frequent'>Frequent</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <PrevWorkoutList
                                workouts={prevWorkouts}
                                selectWorkout={setSelectedWorkout}
                            />
                        </Col>
                        <Col>
                            <CardColumns>
                                {selectedWorkout && selectedWorkout.exercises.map(exercise => (
                                    <TempExerciseCard
                                        type='prev'
                                        exercise={exercise}
                                        onAdd={onAddExercise}
                                    />
                                ))}
                            </CardColumns>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default PrevWorkoutPanel;