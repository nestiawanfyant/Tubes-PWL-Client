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
        <div className={ classes.container }>
            <p className={classes.homeText}> Home </p>
            <div className={ classes.flexCard }>
                <CardKelas className={ classes.cardStyle } />
                <CardKelas className={ classes.cardStyle } />
            </div>
        </div>
    )
    

}

export default Home;

const styles = createUseStyles({
    container: {
        width: '94%',
        margin: '0 auto',
    },
    homeText: {
        fontSize: 40, 
        color: '#004d40',
    },
    flexCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardStyle: {
        marginLeft: 10,
        marginRight: 10,
    }
});