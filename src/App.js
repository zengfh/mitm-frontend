// App.js

import React, { Component } from 'react';
import Player from './Components/Player.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    console.log(process.env.PUBLIC_URL);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path = "/" component = {Player}></Route>
          {/* <Route path="/:ix"  render={(props) => (<Player key={props.match.params.ix} {...props} />) }/> */}
        </Switch>
      </Router>
    );
  }
}

export default App;