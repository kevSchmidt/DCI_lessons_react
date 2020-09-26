import React from "react";
import _ from "lodash";

import coursesData from "../../data/courses.json";
import CourseItem from "../CourseItem/CourseItem";
import CourseForm from "../CourseForm/CourseForm";

import "./Courses.css";

class Courses extends React.Component {
  constructor() {
    super();

    this.state = {
      coursesData,
      inputSearch: "",
      sortTerm: "",
      sortOrder: "asc",
    };
  }

  handleInput = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const filteredCourses = this.state.coursesData.filter((course) =>
      course.title
        .toLocaleLowerCase()
        .includes(this.state.inputSearch.toLocaleLowerCase())
    );

    // lodash library
    const sortedCourses = _.orderBy(
      filteredCourses,
      [this.state.sortTerm],
      [this.state.sortOrder]
    );

    return (
      <div className="item-list">
        <CourseForm
          filteredCourses={filteredCourses}
          inputSearch={this.state.inputSearch}
          handleInput={this.handleInput}
        />

        {/* ---- courses  ---- */}
        <div className="courses">
          {sortedCourses.length === 0
            ? "Sorry no items found.."
            : sortedCourses.map((course) => (
                <CourseItem key={course.id} course={course} />
              ))}
        </div>
      </div>
    );
  }
}

export default Courses;
