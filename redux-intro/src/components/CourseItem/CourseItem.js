import React from "react";
import { connect } from "react-redux";

import { addSavedItem } from "../../actions/index";

import "./CourseItem.css";

const CourseItem = ({ course, addSavedItem }) => {
  return (
    <div className="course">
      {/* ---- image ---- */}
      <div className="img__container">
        <img
          className="course__img"
          src={course.courseImage}
          alt={course.title}
        />
      </div>

      {/* ---- information --- */}
      <h3 className="course__title m-left">{course.title}</h3>
      <span className="course__author m-left">By: {course.author}</span>
      <div className="course__price">
        <span className="price__number">{course.price}</span>
        <span>$</span>
      </div>
      <span className={course.isHot ? "course__status" : ""}>
        {course.isHot ? "Hot" : null}
      </span>
      <span className="add" onClick={() => addSavedItem(course)}>
        Add
      </span>
    </div>
  );
};

// ---- connect component with redux ----
export default connect(null, { addSavedItem })(CourseItem);
