import { combineReducers } from "redux";

import data from "../data/courses.json";

// ---- initial state ----
const initState = {
  courses: data,
  inputSearch: "",
};

// ---- reducers ----
const displayCourses = (state = initState, action) => {
  if (action.type === "SEARCH_COURSES") {
    return {
      courses: state.courses,
      inputSearch: action.payload,
    };
  }

  return state;
};

// ---- reducers compilation ----
export default combineReducers({
  displayCourses,
});
