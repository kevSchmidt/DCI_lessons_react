import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Courses from "./components/Courses/Courses";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Jobs from "./components/Jobs/Jobs";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/home" exact component={Courses} />
        <Route path="/courses" exact component={Courses} />
        <Route path="/courses/:id" component={CourseDetails} />
        <Route path="/about" exact component={About} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Redirect from="/" to="/home" />
        <Redirect to="/about" />
      </Switch>
    </div>
  );
};

export default App;
