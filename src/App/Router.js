import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "./Resume";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Resume} />
  </Switch>
);
export default Router;
