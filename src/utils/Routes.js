import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navigation from '../components/Navigation/index';
import Home from '../pages/Home/index';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Navigation />
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
