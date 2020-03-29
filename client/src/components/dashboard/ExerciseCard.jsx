import React, { Component, useState } from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

import './ExerciseCard.css';

const ExerciseCard = ({exercise}) => {
    const getVideoId = (url) => {
        // Thanks to mantish on StackOverflow
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            return '';
        }
    }
    return (
        <div className='exercise-card'>
            <img src={'https://img.youtube.com/vi/' + getVideoId(exercise.videoUrl) + '/hqdefault.jpg'} alt='Demo Video'/>
            <div className='card-container'>
                <h3 className='card-header'>{exercise.name}</h3>
                <h2 className='num-reps'>x{exercise.reps}</h2>
                <ul style = {{paddingLeft: '20px'}}>
                    <li style={{color: 'white'}}>{exercise.notes[0]}</li>
                </ul>
            </div>
        </div >
    );
}

export default ExerciseCard;