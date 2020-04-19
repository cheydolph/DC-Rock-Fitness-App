import React, { Component, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const TempExerciseCard = ({ type, exercise, onRemove, onAdd }) => {
  const getVideoId = url => {
    // Thanks to mantish on StackOverflow
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      return match[2];
    } else {
      return "";
    }
  };
  const remove = () => {
    onRemove(exercise);
  };
  const add = () => {
    onAdd(exercise);
  }
  let button;
  if (type === 'temp') {
    button = (
      <Button variant="danger" onClick={remove}>
        Remove
      </Button>
    );
  } else if (type === 'prev') {
    button = (
      <Button variant="danger" onClick={add}>
        Add
      </Button>
    );
  }

  return (
    <Card
      style={{
        maxWidth: "12rem",
      }}
    >
      <Card.Img
        variant="top"
        src={
          "https://img.youtube.com/vi/" +
          getVideoId(exercise.videoUrl) +
          "/mqdefault.jpg"
        }
        alt="Demo Video"
      />
      <Card.Body>
        <Card.Title>
          {exercise.name} x{exercise.reps}
        </Card.Title>
        <Card.Text>{exercise.notes}</Card.Text>
      </Card.Body>
      <Card.Footer className='text-center'>{button}</Card.Footer>
    </Card>
  );
};

export default TempExerciseCard;
