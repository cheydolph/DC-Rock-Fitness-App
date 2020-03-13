import React, {Component, useState} from 'react';
import { Card } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';

const ExerciseCard = ({dailyExercises}) => {
    const [exerciseVideoUrl, setExerciseVideoUrl] = useState(dailyExercises.exercises[0].videoUrl);
    return (
        <Card style={{width: '30rem'}}
              className='shadow-sm'>
            <Card.Body><Card.Title>Exercises</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>Repeat {dailyExercises.sets} times</Card.Subtitle>         
            <ListGroup variant='flush'>
                <ListGroup.Item action 
                                href='#link1' 
                                onClick={setExerciseVideoUrl}>
                    {dailyExercises.exercises[0].reps}{'x '}{dailyExercises.exercises[0].name}
                </ListGroup.Item>                               
            </ListGroup> 
            <iframe width='100%' title='demo'>
                src={dailyExercises.exercises[0].videoUrl}
            </iframe>  </Card.Body>              
        </Card>
    );
}

export default ExerciseCard;