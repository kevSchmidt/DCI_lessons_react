import { combineReducers } from "redux";

import data from "../data/courses.json";

// ---- initial state ----
const initState = {
  courses: data,
  inputSearch: "",
  saved: [],
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

const savedList = (state = initState, action) => {
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      saved: [...state.saved, action.payload],
    };
  } else if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      saved: state.saved.filter((item) => item.id !== action.payload),
    };
  }
  return state;
};

// ---- reducers compilation ----
export default combineReducers({
  displayCourses,
  savedList,
});
