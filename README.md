# **DC Fitness Web App**
## _Run Escape_

### Overview
Our team was tasked with creating a web app for the client's personal training and fitness business. She wanted to be able to post workouts, videos, and nutrition information for clients, as well as allow users to schedule appointments with her.

### Features
We implemented the following features to achieve the given requirements:
- "Workouts" page: Admin can create workouts for clients. She can select the client and the date, and add exercises with corresponding videos. She can also add exercises from clients' past workouts. Users will see the exercises she has assigned for that day.
- "Calendar" page: Potential clients as well as current clients can schedule see her availability and schedule appointments in open slots. As requested by the client, they must enter a code she gives them before an appointment can be made. The admin can see what appointments have been made through the web app and recieves an email when a client schedules an appointment.
- "Nutrition" page: Clients can see nutriton posted information and filter by catagory
- "Payment" page: Clients can view payment Cashapp payment information
- "Resources" page: Clients can see fitness-realated articles and videos
- "Contact" page: Clients can learn about the business
- Login system: Clients can make an account, which adds them to the list of users for whom the admin can assign workouts

### APIs
We used the following service APIs in our project:
- MongoDB Atlas for our database
- Mailgun for sending emails

We used the following packages in our web app:
- bcryptjs for encrypting and salting passwords
- body-parser for decoding http request bodies
- date-fns for date manipulation
- formidable for form handling
- is-empty for form validation
- jsonwebtoken for login validation
- mongoose for database manipulations
- morgan for http request logging
- nodemaier for sending emails
- nodemailer-mailgun-transport for using nodemailier with mailgun
- passport & passport-jwt for login
- reactjs-popup for popup
- should for validation
- validator for validation
- axios for requests
- react-bootstrap for premade react components
- classnames
- creat-react-class
- jwt-decode to decode json web tokens
- react-datepicker for date picker component
- react-dom
- react-redux for storing global state
- react-scripts
- redux
- redux thunk





