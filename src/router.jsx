import React from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import Login from '@container/Login';

import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export default function RouterComponent() {
    return (
        <Router history={history}>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/score">
            34534
          </Route>
        </Router>
    )
}
