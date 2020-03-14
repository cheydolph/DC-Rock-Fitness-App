const express = require("express");
const router = express.Router();

const keys = require("../../config/config");

const Exercise = require("../../models/Exercise");
const Set = require("../../models/Set");
const Workout = require("../../models/Workout");

router.post("/workout", (req, res) => {

});