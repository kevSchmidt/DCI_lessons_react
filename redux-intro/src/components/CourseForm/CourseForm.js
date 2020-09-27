import React from "react";
import { connect } from "react-redux";

import { searchCourses } from "../../actions/index";

import "./CourseForm.css";

const CourseForm = ({ searchCourses, inputSearch }) => {
  return (
    <form className="search__form">
      <input
        type="text"
        placeholder="Search for courses.."
        className="search__input"
        onChange={(e) => searchCourses(e.target.value)}
        value={inputSearch}
      />
    </form>
  );
};

// ---- connect component with redux ----
const getInputSearchFromStore = (state) => {
  return {
    inputSearch: state.displayCourses.inputSearch,
  };
};

export default connect(getInputSearchFromStore, { searchCourses })(CourseForm);
