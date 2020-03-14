const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SetSchema = new Schema({
    reps: {
        type: Number,
    },
    exercises: {
        type: Array,
        default: []
    }
});

module.exports = Set = mongoose.model("sets", SetSchema);