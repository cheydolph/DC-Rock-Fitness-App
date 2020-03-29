const express = require("./config/express.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const userRoutes = require("./routes/user.routes");
const adminRoutes = require('./routes/admin.routes');

const app = express.init();

// Bodyparser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const db = require("./config/config").db;
mongoose
  .connect(db.uri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
require("./config/passport")(passport);

// Routes
app.use("/", userRoutes);
app.use('/', adminRoutes);

// Use env port or default
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server now running on port ${port}!`));
