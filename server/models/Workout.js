const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    sets: {
        type: Array,
        default: []
    }
});

module.exports = Workout = mongoose.model("workouts", WorkoutSchema);