const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {sendemail} = require("../mail")

const keys = require("../config/config");
const User = require("../models/User.model");
const Exercise = require('../models/Exercise.model');
const Workout = require('../models/Workout.model');
const Appointment = require('../models/Appointment.model');
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

const register = (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: (req.body.isAdmin == 'true')
      });

      // Hash passwords before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
};

const login = (req, res, next) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(400).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched; create JWT payload
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 31556926 }, // 1 year in seconds
          (err, token) => {
            res.json({ success: true, token: "Bearer " + token });
          }
        );
      } else {
        return res.status(400).json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
};

const getUserById = function (req, res, next) {
  User.findOne({ email: req.body.email })
    .populate('workouts')
    .exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          error: 'User not found'
        });
      }
      req.user = user;
      next();
    });
};

const getWorkout = function (req, res, next) {
  console.log(req.params.userId + ' ' + req.params.date);
  Workout
    .findOne({ userId: req.params.userId, date: new Date(req.params.date) })
    .populate('exercises')
    .exec((err, workout) => {
      res.status(200).json(workout);
    });
};

const sendAppointment = (req, res, next) => {
  console.log(req.body, "this is here");
  let ReminderMessage = `Appoinment Confirmation about ${req.body.reason} with DC Rock Fitness at ${req.body.timeslot} on ${req.body.date}.`;
  let name = `${req.body.firstname} ${req.body.lastname}`;
  sendemail(req.body.email, name, ReminderMessage, "Appointment",(err,data) => {
    if(err){
      res.status(500).json({message: 'Internal Error'});
    }else{
      res.json({message: 'Email Sent!!'});
      console.log("Email Sent");
    }
  });
  // sendemail(req.body.email, name, message, "ClientReminder",(err,data) => {
  //   if(err){
  //     res.status(500).json({message: 'Internal Error'});
  //   }else{
  //     res.json({message: 'Email Sent!!'});
  //   }
  // });
  
  
  Appointment.findOne({ email: req.body.email }).then(appointment => {
    if (appointment) {
      return res.status(400).json({ email: "You can only have one scheduled appointment at a time." });
    } else {
      const newAppointment = new Appointment({
        email: req.body.email,
        date: new Date(req.body.date),
        time: req.body.timeslot
      });
      
      newAppointment.save().then(appointment => res.json(appointment)).catch(err => console.log(err));
    }
    console.log("Saved!");
  });
}

const getAppointments = (req, res, next) => {  
  console.log(req.params.date);
  console.log(new Date(req.params.date));
  Appointment
  .find({date: new Date(req.params.date)})
  .exec((err, appointments) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(appointments);
  });
}

module.exports = {
  register,
  login,
  getUserById,
  getWorkout,
  sendAppointment,
  getAppointments
};