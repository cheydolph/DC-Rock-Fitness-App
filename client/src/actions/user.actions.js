import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import moment from 'moment';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";

// Register user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // Re-direct to login on register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      // Set token is Auth header
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      console.log(decoded);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const getWorkouts = function(id, date) {
  console.log(id + ' ' + moment(date).format('YYYY-MM-DD'));
  date = moment(date).format('YYYY-MM-DD');
  return fetch('/users/' + id + '/workout/' + date, {method: 'GET'})
    .then(response => {
      return response.json()
    }).catch(err => {
      console.log(err);
    });
  /*return axios
    .get('/users/' + id + '/workout/' + date)
    .then(response => {
      console.log(response.data);
      return response.data;
  }).catch((err) => console.log(err));*/  
};