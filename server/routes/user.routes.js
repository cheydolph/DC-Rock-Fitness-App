const express = require('express'); 
const userContoller = require('../controllers/user.controller');

const router = express.Router();

router.route('/api/users/register')
  .post(userContoller.register);

router.route('/api/users/login')
  .post(userContoller.login);

router.get('/users/workout', userContoller.getWorkout);

router.post('/users/calendar', userContoller.sendAppointment);

module.exports = router;