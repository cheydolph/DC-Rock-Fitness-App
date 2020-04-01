import React from "react";
import { CardDeck, Jumbotron } from "react-bootstrap";

import ExerciseCard from "./ExerciseCard";

const dailyInfo = ({ name, workout }) => {
  return (
    <Jumbotron>
      <h1>Hey,{" " + name + "!"}</h1>
      <h3>Here's your workout for today:</h3>
      {!workout ? (
        <p>No excercises, enjoy the day off!</p>
      ) : (
        <CardDeck>
          {workout.exercises &&
            workout.exercises.map(item => <ExerciseCard exercise={item} />)}
        </CardDeck>
      )}
    </Jumbotron>
  );
};

export default dailyInfo;
