import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from './components/HomePage';
import ListTripsPage from './components/ListTripsPage';
import FormPage from './components/FormPage';

import LoginPage from './components/LoginPage';
import AdmPage from './components/AdmPage';
import AdmCreateTripPage from './components/AdmCreateTripPage';
import AdmDetailsPage from './components/AdmDetailsPage';
import AdmTripsPage from './components/AdmTripsPage';

const App = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/list-trips">
            <ListTripsPage />
          </Route>
          <Route exact path="/form/:id">
            <FormPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/adm">
            <AdmPage />
          </Route>
          <Route exact path="/adm-createtrip">
            <AdmCreateTripPage />
          </Route>
          <Route exact path="/adm-details/:id">
            <AdmDetailsPage />
          </Route>
          <Route exact path="/adm-trip">
            <AdmTripsPage />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
