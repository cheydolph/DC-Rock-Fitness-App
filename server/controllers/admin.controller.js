const Exercise = require('../models/Exercise.model');
const Workout = require('../models/Workout.model');
const mongoose = require('mongoose');

const addExercise = (req, res, next) => {
    Exercise.create(req.body, (err, exercise) => {
        if (err) throw err;
        res.status(200).json(exercise);        
    });
};

const assignWorkout = (req, res, next) => {    
    console.log(req.body.exercises[0]);
    let workout = new Workout(req.body);
    for (let exercise in req.body.exercises) {
        workout.exercises.push(exercise);
    }
    //workout.exercises[0] = mongoose.Types.ObjectId(req.body.exercises[0]);
    workout.save((err, workout) => {
        if (err) throw err;
        res.status(200).json(workout);
    });
};

const getExercises = function(req, res, next) {
    Exercise
      .find()
      .exec((err, exercise) => {
          res.status(200).json(exercise);
      });
};

module.exports = {
    addExercise,    
    assignWorkout,
    getExercises
};