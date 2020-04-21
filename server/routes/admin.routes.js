const express = require("express");
const router = express.Router();

const keys = require("../config/config");
const adminController = require("../controllers/admin.controller");

router.post("/admin/exercise", adminController.addExercise);

router.post("/admin/workout", adminController.assignWorkout);

router.get("/admin/exercises", adminController.getExercises);

router.get("/admin/clients", adminController.getClients);

router.get("/admin/workouts/:userId", adminController.getWorkouts);

//router.param('userId', userController.userById);

module.exports = router;
