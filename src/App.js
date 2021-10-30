import React, { Component } from 'react';
import { Route } from 'react-router';

import { Auth, Home } from 'pages';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Route path={["/", "/login", "/register"]} component={Auth} exact />
        <Route path="/im" component={Home} exact />
      </div>
    )
  }
}

