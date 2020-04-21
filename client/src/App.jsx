import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/user.actions";

import { Provider } from "react-redux";

import store from "./store";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Calendar from "./components/calendar/Calendar";
import AdminCalendar from "./components/calendar/AdminCalendar";
import About from "./components/about/About";
import Payment from "./components/payment/Payment";
import Resources from "./components/resources/Resources";
import Nutrition from "./components/nutrition/Nutrition";
import UserDash from "./components/dashboard/user/UserDash";
import AdminDash from "./components/dashboard/admin/AdminDash";

import fonts from "./assets/font.css";
import "./assets/custom-bootstrap-theme.scss";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token for user info and expiration
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/contact" component={About} />
            <Route exact path="/payment" component={Payment} />
			      <Route exact path="/nutrition" component={Nutrition} />
            <Route exact path="/resources" component={Resources} />

            <Switch>
              <PrivateRoute exact path="/Calendar" userComponent={Calendar} adminComponent = {AdminCalendar}/>
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/dashboard"
                userComponent={UserDash}
                adminComponent={AdminDash}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
