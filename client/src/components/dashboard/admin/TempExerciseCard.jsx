import React, { Component, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const ExerciseCard = ({ exercise, onRemove }) => {
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
  return (
    <Card style={{ width: "18rem" }}>
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
        <Button variant="danger" onClick={remove}>
          Remove
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ExerciseCard;
