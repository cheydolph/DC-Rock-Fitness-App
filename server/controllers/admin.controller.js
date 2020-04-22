const Exercise = require("../models/Exercise.model");
const User = require("../models/User.model");
const Workout = require("../models/Workout.model");
const mongoose = require("mongoose");
const Appointment = require("../models/Appointment.model");

const addExercise = (req, res, next) => {
    Exercise.create(req.body, (err, exercise) => {
        if (err) throw err;
        res.status(200).json(exercise);
    });
};

const assignWorkout = (req, res, next) => {
    let workout = new Workout(req.body);
    workout.save((err, workout) => {
        if (err) throw err;
        res.status(200).json(workout);
    });
};

const getExercises = function (req, res, next) {
    Exercise.find().exec((err, exercise) => {
        res.status(200).json(exercise);
    });
};

const getClients = function (req, res, next) {
    User.find().exec((err, clients) => {
        res.status(200).json(clients);
    });
};

const getWorkouts = function (req, res, next) {
    Workout
        .find({ userId: req.params.userId })
        .populate("exercises")
        .exec((err, workouts) => {
            res.status(200).json(workouts);
        });
};

const getAppointment = (req, res, next) => {  
    Appointment
    .findOne({'time': req.params.time, 'date': new Date(req.params.date)})
    .exec((err, appointments) => {
      if (err) {
        console.log(err);
      }
      res.status(200).json(appointments);
    });
}

module.exports = {
    addExercise,
    assignWorkout,
    getExercises,
    getClients,
    getWorkouts,
    getAppointment
};
