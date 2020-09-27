import React from "react";
import { connect } from "react-redux";

import CourseItem from "../CourseItem/CourseItem";

import "./CourseList.css";

const CourseList = ({ courses }) => {
  return (
    <div className="courses">
      {courses.length === 0
        ? "not items found"
        : courses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
    </div>
  );
};

// ---- connect component with redux ----
const getCoursesFromStore = (state) => {
  return {
    courses: state.displayCourses.courses,
  };
};

export default connect(getCoursesFromStore)(CourseList);
