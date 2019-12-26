import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './App';

export default class Root extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Router>
    );
  }
}
