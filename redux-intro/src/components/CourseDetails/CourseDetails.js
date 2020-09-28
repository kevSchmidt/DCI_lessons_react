import React from "react";
import { connect } from "react-redux";

import { addSavedItem, removeSavedItem } from "../../actions/index";

import "./CourseDetails.css";

const CourseDetails = ({
  courses,
  match,
  saved,
  addSavedItem,
  removeSavedItem,
}) => {
  const courseID = match.params.id;
  const course = courses.find((course) => course.id === Number(courseID));

  return (
    <div className="course__details">
      {/* ---- image ---- */}
      <div className="img__container--d">
        <img
          className="course__img--d"
          src={course.courseImage}
          alt={course.title}
        />
      </div>

      {/* ---- information ---- */}
      <div className="course__content--d">
        <span className={course.isHot ? "course__status--d" : ""}>
          {course.isHot ? "Hot" : null}
        </span>
        <h3 className="course__title--d">{course.title}</h3>
        <p className="course__desc--d">{course.desc}</p>
        <span className="course__price--d">{course.price} $</span>
        <div className="catigories--d">
          {course.categories.map((cat) => (
            <p>{cat}</p>
          ))}
        </div>
        <p className="course__students--d">
          {course.students} students enrolled
        </p>
        <p className="course__date--d">published: {course.publishedDate}</p>

        {/* ---- saved icon ---- */}
        <span
          className="course__saved--d"
          onClick={
            saved.includes(course)
              ? () => removeSavedItem(course.id)
              : () => addSavedItem(course)
          }
        >
          {saved.includes(course) ? (
            <img
              src="https://img.icons8.com/dusk/45/000000/bookmark-ribbon.png"
              alt="bookmark"
            />
          ) : (
            <img
              src="https://img.icons8.com/wired/45/000000/bookmark-ribbon.png"
              alt="bookmark"
            />
          )}
        </span>
      </div>
    </div>
  );
};

// ---- connect component with redux ----
const getCoursesFromStore = (state) => {
  return {
    courses: state.displayCourses.courses,
    saved: state.savedList.saved,
  };
};

export default connect(getCoursesFromStore, { addSavedItem, removeSavedItem })(
  CourseDetails
);
