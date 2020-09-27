import React from "react";
import { connect } from "react-redux";

import { addSavedItem, removeSavedItem } from "../../actions/index";

import "./CourseItem.css";

const CourseItem = ({ course, addSavedItem, saved, removeSavedItem }) => {
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

      {/* ---- saved item icon ---- */}
      <span
        className="add"
        onClick={
          saved.includes(course)
            ? () => removeSavedItem(course.id)
            : () => addSavedItem(course)
        }
      >
        {saved.includes(course) ? (
          <img
            src="https://img.icons8.com/dusk/50/000000/bookmark-ribbon.png"
            alt="bookmark"
          />
        ) : (
          <img
            src="https://img.icons8.com/wired/50/000000/bookmark-ribbon.png"
            alt="bookmark"
          />
        )}
      </span>
    </div>
  );
};

// ---- connect component with redux ----
const getSavedFromStore = (state) => {
  return {
    saved: state.savedList.saved,
  };
};

export default connect(getSavedFromStore, { addSavedItem, removeSavedItem })(
  CourseItem
);
