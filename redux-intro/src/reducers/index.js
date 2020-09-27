import { combineReducers } from "redux";

import data from "../data/courses.json";

// ---- initial state ----
const initState = {
  courses: data,
};

// ---- reducers ----
const displayCourses = (state = initState, action) => {
  return state;
};

// ---- reducer compilation ----
export default combineReducers({
  displayCourses,
});
