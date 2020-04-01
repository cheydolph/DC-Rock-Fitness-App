import React, { Component, useState } from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

//import './ExerciseCard.css';

const ResourceCard = props => {
  //const [exerciseVideoUrl, setExerciseVideoUrl] = useState(dailyExercises.exercises[0].videoUrl);
  return (
    <div className="exercise-card">
      <a href="https://www.bodybuilding.com/">
        <img src="https://seekvectorlogo.net/wp-content/uploads/2019/03/bodybuilding-com-vector-logo.png" />
      </a>

      <div className="card-container">
        <h3 className="card-header">Body Building</h3>
      </div>
    </div>
  );
};

export default ResourceCard;
