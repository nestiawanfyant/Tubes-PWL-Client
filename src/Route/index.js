import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Button, Modal, Form, Row, Col } from 'react-bootstrap';

// stylesheet
import { Color } from "../assets/color";
import {createUseStyles} from 'react-jss';
import { BiPlus } from 'react-icons/bi';
import "../assets/css/font.css";

// page for route
import {Home, Profile, ViewCard, ListPeserta, Login} from '../pages'

const NavBar = () => {

    // State
    const [show, setShow] = useState(false);
    const [viewNavClass, setViewNavClass] = useState(true);

    // function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const classes = styles();

    return (
      <Router>
          <div className={ classes.navbar }>
            <div className={ classes.titleNavbar }>
                <Link to={"/"} className={classes.textAStyle}>
                  <h2 className={ classes.titleNavbarText }> ClassRoom </h2>
                </Link>
            </div>

            <ul className={ classes.ulnavigation }>
              <li className={ classes.liNavigationClass } >
                <Link to={"/kelas/metpen"} className={ classes.linkNavigationTextClass} > Stream </Link>
              </li>
              <li className={ classes.liNavigationClass } >
                <Link to={"/tambah/kelas"} className={ classes.linkNavigationTextClass} > ClassWork </Link>
              </li>
              <li className={ classes.liNavigationClass } >
                <Link to={ "/peserta/kelas/udin" } className={ classes.linkNavigationTextClass} > People </Link>
              </li>
            </ul>

            <ul className={ classes.ulnavigationClass }>
              <li className={ classes.liNavigation }>
                <Link className={ classes.linkNavigationText }>
                  <Button className={ classes.addClassBTN } onClick={handleShow}> <BiPlus className={ classes.BiPlus } /> </Button>
                </Link>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Tambah Kelas</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p> Silakan Masukan Kode Kelas </p>
                    <Form className={ classes.formInsertCode }>
                    <Row>
                      <Col sm={8}>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control type="text" placeholder="Enter email" />
                        </Form.Group>
                      </Col>
                      <Col sm={4}>
                        <Button variant="primary" type="submit"> Submit </Button>
                      </Col>
                    </Row>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </li>
              <li className={ classes.liNavigation }>
                <Link to={"/profile"} className={ classes.linkNavigationText }>
                  <Image src="https://picsum.photos/200/300" className={classes.imagesProfile} roundedCircle />
                </Link>
              </li>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/profile" component={ Profile } />
              <Route path="/kelas/:name" component={ ViewCard } />
              <Route path="/tambah/kelas/" component={ Login } />
              <Route path="/peserta/kelas/:name" component={ ListPeserta } />s
            </Switch>
          </div>
      </Router>
    )
}

export default NavBar;

const styles = createUseStyles({
  textAStyle:{
    color: '#1D1D1D',
    '&:hover': {
      textDecoration: 'none',
      color: '#1D1D1D',
    }
  },
  container: {
    width: '94%',
    margin: '0 auto',
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    borderBottom: '1px solid #E2E2E2',
    paddingLeft: 30,
    paddingRight: 30,
  },
  addClassBTN:{
    backgroundColor: 'transparent',
    border: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
      border: 'none',
    },
    '&:focus': {
      backgroundColor: 'transparent',
      border: 'none',
    },
    '&:active': {
      backgroundColor: 'transparent',
      border: 'none',
    }
  },
  BiPlus: {
    color: Color.blackDoff,
    fontSize: 26
  },
  titleNavbarText:{
    fontSize: 22,
    fontFamily: 'DM Sans',
    fontWeight: '500',
  },
  ulnavigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ulnavigationClass: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  liNavigation: {
    listStyle: 'none',
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  liNavigationClass: {
    listStyle: 'none',
    marginTop:10,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  imagesProfile: {
    borderRadius: 50,
    width: 45,
    height: 45,
    transition: 'all .2s',
    '&:hover':{
      boxShadow: '2px 3px 16px -1px rgba(189,189,189,0.48);'
    },
    formInsertCode: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  },
  linkNavigationTextClass: {
    color: Color.blackDoff,
    fontFamily: 'DM Sans',
    marginBottom: 0, 
    '&:hover': {
      textDecoration: 'none',
      color: Color.primary,
      borderBottom: '2px solid' + Color.primary,
      paddingBottom: 23,
    }
  }
});