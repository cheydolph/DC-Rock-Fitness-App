import React, {Component } from 'react';

import ExerciseCard from './ExerciseCard';

class WorkoutCard extends Component {

    render() {
        return (
            <div 
                style={{
                    width: "75vw",                    
                    minHeight: "300px",                    
                    borderRadius: "5px"
                    }} 
                    className="container center-align blue valign-wrapper">
                <ExerciseCard/>
            </div>
        );
    }
}

export default WorkoutCard;