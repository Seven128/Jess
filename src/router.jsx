import React from 'react';
import {
    Route,
    BrowserRouter as Router
  } from "react-router-dom";
import Login from '@container/Login';
import ConfirmInfo from '@container/ConfirmInfo';
import Admin from '@container/Admin';

export default function RouterComponent(props) {

  return (
      <Router >
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/confirmInfo">
          <ConfirmInfo />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Router>
  )
}
