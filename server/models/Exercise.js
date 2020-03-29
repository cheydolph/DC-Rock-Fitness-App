const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    isStretch: {
        type: Boolean
    },
    reps: {
        type: Number,
    },
    duration: {
        type: Number
    },
    notes: {
        type: Array
    }
});

module.exports = Exercise = mongoose.model("exercises", ExerciseSchema);