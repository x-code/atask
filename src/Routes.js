import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Profile from "./pages/Profile/index";
const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Home Screen */}
        <Route path="/" component={Profile} />
      </Switch>
    </Router>
  );
};

export default Routes;
