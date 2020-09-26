import React from "react";
import { Link } from "react-router-dom";

import "./CourseItem.css";

const CourseItem = ({ course }) => {
  return (
    <div className="course">
      {/* ----image ---- */}
      <div className="img__container">
        <img
          className="course__img"
          src={course.courseImage}
          alt={course.title}
        />
      </div>

      {/* ---- information ---- */}
      <Link to={`/courses/${course.id}`} className="course__title--link">
        <h3 className="course__title margin-left">{course.title}</h3>
      </Link>

      <span className="course__author margin-left">
        Made by: {course.author}
      </span>

      {/* ---- price ---- */}
      <div className="course__price margin-left">
        <span className="course__price--number">{course.price}</span>
        <span className="course__price--device">€</span>
      </div>

      {/* ---- status ---- */}
      <span className={course.isHot ? "course__status" : ""}>
        {course.isHot ? "Hot" : null}
      </span>
    </div>
  );
};

export default CourseItem;
