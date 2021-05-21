import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import '.././App.css';

//components
import {CardKelas} from '../../components'

// bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {createUseStyles} from 'react-jss'

// stylesheet
// import '../../assets/css/HomeCss/index.css'


const Home = () => {
    const classes = styles()

    return ( 
        <div>
            <p className={classes.homeText}> Home </p>
        </div>
    )
    

}

export default Home;

const styles = createUseStyles({
    homeText: {
        fontSize: 30, 
        color: '#004d40',
    }
});