import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home, Login, Daftar } from "./pages";
import NavBar from "./Route";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={NavBar} />
          <Route path="/login" component={Login} />
          <Route path="/daftar" component={Daftar} />
        </Switch>
      </Router>
    );
  }
}

export default App;
