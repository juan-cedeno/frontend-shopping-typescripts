
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {


  return (
    <Router>
        <div>
        <Switch>
          <Route  path = '/' component = {DashboardRouter}></Route>
        </Switch>
      </div>
    </Router>
  );
};
