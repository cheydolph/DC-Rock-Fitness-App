const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: { type: String, required: true },
    reps: { type: String, required: true },
    videoUrl: String,
    notes: [String]
});

module.exports = Exercise = mongoose.model("exercises", ExerciseSchema);