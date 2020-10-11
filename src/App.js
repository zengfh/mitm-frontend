// App.js

import React, { Component } from 'react';
import Player from './Components/Player.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/video/:ix"  render={(props) => (<Player key={props.match.params.ix} {...props} />) }/>
        </Switch>
      </Router>
    );
  }
}

export default App;