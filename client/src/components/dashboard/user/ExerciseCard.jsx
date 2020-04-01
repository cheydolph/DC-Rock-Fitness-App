import React, { Component, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

const ExerciseCard = ({ exercise }) => {
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
  const viewVideoClicked = () => {
    window.open(exercise.videoUrl, "_blank");
  };
  return (
    <Card
      border="primary"
      text="primary"
      style={{
        maxWidth: "20rem"
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
      <Card.Footer className="text-center">
        <Button onClick={viewVideoClicked}>Watch</Button>
      </Card.Footer>
    </Card>
  );
};

export default ExerciseCard;
