import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";

import 'bootstrap/dist/css/bootstrap.min.css';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
