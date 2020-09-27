import React from "react";

import "./CourseItem.css";

const CourseItem = (props) => {
  const course = props.course;

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
    </div>
  );
};

export default CourseItem;
