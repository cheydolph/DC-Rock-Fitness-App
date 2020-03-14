import React, { Component, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

import './ExerciseCard.css';

const ExerciseCard = (props) => {
    //const [exerciseVideoUrl, setExerciseVideoUrl] = useState(dailyExercises.exercises[0].videoUrl);
    return (
        <div className='exercise-card'>
            <img src='https://www.mensjournal.com/wp-content/uploads/2019/02/pushup.jpg?w=800&h=450&crop=1' />
            <div className='card-container'>
                <h3 className='card-header'>Push-ups</h3>
                <h2>x12</h2>
            </div>
        </div >
    );
}

export default ExerciseCard;