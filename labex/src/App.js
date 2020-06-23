import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import CreateTripPage from './components/CreateTripPage';
import ListTripsPage from './components/ListTripsPage';
import TripDetailsPage from './components/TripDetailsPage';
import FormPage from './components/FormPage';
import AdmPage from './components/AdmPage';


const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/createtrip">
            <CreateTripPage />
          </Route>
          <Route exact path="/list-trips">
            <ListTripsPage />
          </Route>
          <Route exact path="/trip-details">
            <TripDetailsPage />
          </Route>
          <Route exact path="/form">
            <FormPage />
          </Route>
          <Route exact path="/admpage">
            <AdmPage />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
