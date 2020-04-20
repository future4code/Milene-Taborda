import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from '../HomePage/HomePage';
import CreateTripPage from '../CreateTripPage/CreateTripPage';
import ListTripsPage from '../ListTripsPage/ListTripsPage';
import TripDetailsPage from '../TripDetailsPage/TripDetailsPage';
import ApplicationFormPage from '../ApplicationFormPage/ApplicationFormPage';

export const routes = {
  root: "/",
  login: "/login",
  userForm: "/application-form",
  listTrips: "/trips/list",
  createTrips: "/trips/create",
  datailsTrip: "/trips/details"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.userForm} component={ApplicationFormPage} />
        <Route exact path={routes.createTrips} component={CreateTripPage} />
        <Route exact path={routes.listTrips} component={ListTripsPage} />
        <Route exact path={routes.datailsTrip} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
