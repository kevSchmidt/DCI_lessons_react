import React from "react";
import { connect } from "react-redux";

import { searchCourses } from "../../actions/index";

import "./CourseForm.css";

const CourseForm = ({ searchCourses }) => {
  return (
    <form className="search__form">
      <input
        type="text"
        placeholder="Search for courses.."
        className="search__input"
        onChange={(e) => searchCourses(e.target.value)}
      />
    </form>
  );
};

// ---- connect component with redux ----
export default connect(null, { searchCourses })(CourseForm);
