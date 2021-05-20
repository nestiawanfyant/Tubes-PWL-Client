import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import '.././App.css';

// bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

// stylesheet
import ".././assets/styles.css"

// page for route

export default class Home extends Component {

    constructor(props){
        super(props);
        this.state ={
        }
    }

    render() {
        return ( 
            <div>
                <p> Home </p>
            </div>
        )
    }
    

}