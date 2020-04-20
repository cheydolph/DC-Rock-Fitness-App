const express = require('express'); 
const userContoller = require('../controllers/user.controller');

const router = express.Router();

router.route('/api/users/register')
  .post(userContoller.register);

router.route('/api/users/login')
  .post(userContoller.login);

router.get('/users/:userId/workout/:date', userContoller.getWorkout);

router.post('/users/calendar', userContoller.sendAppointment);
router.get('/users/calendar/:date', userController.getAppointments);
module.exports = router;