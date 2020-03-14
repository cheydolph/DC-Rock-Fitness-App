const express = require("./config/express.js");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users.routes");

const app = express.init();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// MongoDB config
const db = require("./config/config").db;

// Connect to MongoDB
mongoose
  .connect(db.uri, { useNewUrlParser: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

// Use env port or default
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server now running on port ${port}!`));
