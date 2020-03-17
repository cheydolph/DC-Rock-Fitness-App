import React, {Component } from 'react';

class ExerciseCard extends Component {

    render() {
        return (
            <div 
                style={{
                    width: "20%",                    
                    height: "90%",                    
                    borderRadius: "5px"
                    }} 
                    className="container center-align hoverable white">
                <p className="flow-text text-darken-1">
                    Pushups x12
                </p>
            </div>
        );
    }
}

export default ExerciseCard;