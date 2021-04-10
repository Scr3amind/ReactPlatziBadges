import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Layout } from "../components/Layout";
import { BadgeNew } from "../pages/BadgeNew";
import { Badges } from "../pages/Badges";
import { HomePage } from "../pages/HomePage";
import { NotFound } from "../pages/NotFound";


export const AppRouter = () => {
    return (
        <Router>
            <Layout>

                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route component={NotFound}/>
                    {/* <Redirect to="/badges" /> */}
                </Switch>

            </Layout>
        </Router>
    )
}
