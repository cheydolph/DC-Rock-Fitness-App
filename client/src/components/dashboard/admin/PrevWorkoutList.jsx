import React from 'react';
import { ListGroup } from 'react-bootstrap';

const PrevWorkoutList = ({ workouts, selectWorkout }) => {
    const onWorkoutSelect = event => {
        selectWorkout(event.target.value);
    }
    return (
        <ListGroup variant='flush'>
            {workouts.map(workout => (
                <ListGroup.Item action onClick={onWorkoutSelect}>
                    {workout.date}
                </ListGroup.Item>)
            )
            })}
        </ListGroup>
    );
};

export default PrevWorkoutList;