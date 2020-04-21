const express = require('express'); 
const userController = require('../controllers/user.controller');

const router = express.Router();

router.route('/api/users/register')
  .post(userController.register);

router.route('/api/users/login')
  .post(userController.login);

router.get('/users/:userId/workout/:date', userController.getWorkout);

router.post('/users/calendar', userController.sendAppointment);
router.get('/users/calendar/:date', userController.getAppointments);

router.get("/admin/calendar/:time:date", userController.getAppointmentAdmin);
module.exports = router;