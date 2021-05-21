import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

// stylesheet
import "../assets/css/RouteCss"

// page for route
import {Home, Profile} from '../pages'

class NavBar extends Component {

  constructor(props){
    super(props);
    this.state ={
      useActivenav: "home",
    }
  }

  render() {
    return (
      <Router>
        <div className="container">
          <div className="navbar">
            <ul className="ulNavbar">
              <li>
                <Link to={"/"} className={this.state.useActivenav === "home" ? "active li-Nav" : "li-Nav"} 
                  onClick={() => this.setState({ useActivenav: "home" })}><i class="fas fa-hockey-mask"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/profile"} className={this.state.useActivenav === "profile" ? "active li-Nav" : "li-Nav"} 
                  onClick={() => this.setState({ useActivenav: "profile" })}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/profile" component={ Profile } />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default NavBar;