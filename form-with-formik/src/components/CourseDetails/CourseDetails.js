import React from "react";

import coursesData from "../../data/courses.json";

import "./CourseDetails.css";

const CourseDetails = (props) => {
  const courseID = props.match.params.id;
  const course = coursesData.find((course) => course.id === Number(courseID));

  return (
    <div className="course__details">
      {/* ---- image ---- */}
      <div className="img__container--details">
        <img
          src={course.courseImage}
          alt={course.title}
          className="course__img--details"
        />
      </div>

      {/* ---- information ---- */}
      <div className="course__content--details">
        <span className={course.isHot ? "course__status--details" : ""}>
          {course.isHot ? "Hot" : null}
        </span>
        <h3 className="course__title--details">{course.title}</h3>
        <p className="course__desc--details">{course.desc}</p>
        <span className="course__price--details">{course.price}€</span>
        <div className="course__categories--details">
          {course.categories.map((cat) => (
            <p>{cat}</p>
          ))}
        </div>
        <p className="course__students--details">Students: {course.students}</p>
        <p className="course__date--details">Date: {course.publishedDate}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
