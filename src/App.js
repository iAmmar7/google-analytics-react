import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import { Home, About } from './components';
import './App.css';

const trackingId = process.env.REACT_APP_GA_TRACKING_ID;

function App() {
  useEffect(() => {
    ReactGA.initialize(trackingId);
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div className="App">
      <div className="App-header">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
