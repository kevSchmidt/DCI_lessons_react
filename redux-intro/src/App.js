import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import CourseList from "./components/CourseList/CourseList";
import CourseDetails from "./components/CourseDetails/CourseDetails";
import Navbar from "./components/Navbar/Navbar";
import SavedList from "./components/SavedList/SavedList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/home" component={CourseList} />
        <Route path="/saved" component={SavedList} />
        <Route path="/courses/:id" component={CourseDetails} />
        <Redirect from="/" to="/home" />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
export default App;
