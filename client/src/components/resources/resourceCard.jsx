import React, { Component, useState } from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const ResourceCard = props => {
  //const [exerciseVideoUrl, setExerciseVideoUrl] = useState(dailyExercises.exercises[0].videoUrl);
  return (
    <div className="exercise-card" align="center">
      <div className="card-container" style={{'margin-top':'1vw'}}>
        <a href="https://www.bodybuilding.com/" target="_blank">
          <img src="https://seekvectorlogo.net/wp-content/uploads/2019/03/bodybuilding-com-vector-logo.png" />
        </a>
        <h3 className="card-header" style={{'margin':'2vw', 'background-color':'black', 'color':'#DC143C'}}>Body Building</h3>

        <a href="https://www.myfitnesspal.com/" target="_blank">
          <img src="https://media.bizj.us/view/img/10844912/img1986*800xx750-423-0-253.png"/>
        </a>
        <h3 className="card-header" style={{'margin':'2vw', 'background-color':'black', 'color':'#DC143C'}}>MyFitness Pal</h3>

        <a href="https://www.webmd.com/fitness-exercise/guide/health-and-fitness-resources" target="_blank">
          <img src="http://thegate.boardingarea.com/wp-content/uploads/2017/07/WebMD-Logo-832x312.png"/>
        </a>
        <h3 className="card-header" style={{'margin':'2vw', 'background-color':'black', 'color':'#DC143C'}}>WebMd</h3>

      </div>
    </div>
  );
};

export default ResourceCard;
