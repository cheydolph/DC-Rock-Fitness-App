const express = require("express");
const router = express.Router();

const keys = require("../config/config");
const adminController = require('../controllers/admin.controller');
const userController = require('../controllers/user.controller');

router.post('/admin/exercise', adminController.addExercise);

router.post('/admin/workout', adminController.assignWorkout);

router.get('/admin/exercises', adminController.getExercises);

//router.param('userId', userController.userById);

module.exports = router;