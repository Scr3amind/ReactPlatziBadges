import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { BadgeNew } from "../pages/BadgeNew";
import { Badges } from "../pages/Badges";


export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/badges" component={Badges}/>
                <Route exact path="/badges/new" component={BadgeNew}/>

                <Redirect to="/badges" />
            </Switch>
        </Router>
    )
}
