import React, {useEffect} from 'react';
import {
    Route, Redirect,
  } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router'
import Login from '@container/Login';
import ConfirmInfo from '@container/ConfirmInfo';
import { history } from '@common/redux'

export default function RouterComponent(props) {
  const { context } = props;

  return (
      <ConnectedRouter history={history} context={context}>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/confirmInfo">
          <ConfirmInfo />
        </Route>
      </ConnectedRouter>
  )
}
