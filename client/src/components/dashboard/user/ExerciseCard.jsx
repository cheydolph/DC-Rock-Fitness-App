import React, { Component, useState } from "react";
import { Card } from "react-bootstrap";
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
  return (
    <Card
      border="light"
      bg="primary"
      text="white"
      style={{
        maxWidth: "15rem"
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
    </Card>
  );
};

export default ExerciseCard;
