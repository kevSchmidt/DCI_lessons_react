import React from "react";
import { connect } from "react-redux";

import CourseItem from "../CourseItem/CourseItem";
import CourseForm from "../CourseForm/CourseForm";

import "./CourseList.css";

const CourseList = ({ courses, inputSearch }) => {
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(inputSearch.toLowerCase())
  );

  return (
    <React.Fragment>
      <CourseForm />
      <div className="courses">
        {filteredCourses.length === 0
          ? "not items found"
          : filteredCourses.map((course) => (
              <CourseItem key={course.id} course={course} />
            ))}
      </div>
    </React.Fragment>
  );
};

// ---- connect component with redux ----
const getCoursesFromStore = (state) => {
  console.log(state);

  return {
    courses: state.displayCourses.courses,
    inputSearch: state.displayCourses.inputSearch,
  };
};

export default connect(getCoursesFromStore)(CourseList);
