const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Exercise = require('../models/Exercise.model');

const WorkoutSchema = new Schema({
    userId: { type: String, required: true },
    date: { type: Date, required: true },
    exercises: [{ type: Schema.Types.ObjectId, ref: Exercise}]
});

module.exports = Workout = mongoose.model("workouts", WorkoutSchema);