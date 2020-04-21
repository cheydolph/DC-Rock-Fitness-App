import React, { useState } from 'react';
import moment from 'moment';
import {
    Row, Col, Container,
    Card, CardColumns,
    Nav,
    ListGroup
} from 'react-bootstrap';

import DatePicker from "react-datepicker";
import TempExerciseCard from './TempExerciseCard';

const PrevWorkoutPanel = ({ name, prevWorkouts, onAddExercise }) => {
    const [selectedWorkout, setSelectedWorkout] = useState({ exercises: [] });
    const [pastWorkoutDate, setPastWorkoutDate] = useState(new Date());
    const onDateSelect = (date) => {
        setPastWorkoutDate(date);
        let workout = prevWorkouts.find(workout => {
            return moment(workout.date).format('YYYY-MM-DD') === moment(date).format('YYYY-MM-DD');
        });
        if (!workout) {
            workout = { exercises: [] };
        }
        setSelectedWorkout(workout);
    };
    const onAddPastExercise = (exercise) => {
        exercise = { ...exercise, isPast: true };
        onAddExercise(exercise);
    }
    return (
        <Card style={{ margin: '2rem', height: '28rem' }}>
            <Card.Header>
                {name}'s workout from:{' '}
                <DatePicker
                    selected={pastWorkoutDate}
                    onChange={onDateSelect}
                />
            </Card.Header>
            <Card.Body
                style={{
                    overflowY: 'scroll'
                }}>
                {selectedWorkout &&
                    selectedWorkout.exercises.length ?
                    (<CardColumns>
                        {selectedWorkout.exercises.map(item => (
                            <TempExerciseCard
                                type='prev'
                                exercise={item}
                                onAdd={onAddPastExercise}
                            />
                        ))}
                    </CardColumns>)
                    : (<p className='text-muted'>{name} has no exercises on
                        {' ' + moment(pastWorkoutDate).format('LL')}</p>)}
            </Card.Body>
        </Card>
    );
};

export default PrevWorkoutPanel;