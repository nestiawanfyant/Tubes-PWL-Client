import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

// bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Modal, Form, Row, Col, Popover } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// stylesheet
import { Color } from "../assets/color";
import { createUseStyles } from "react-jss";
import { BiPlus } from "react-icons/bi";
import "../assets/css/font.css";
//component
import { NavKelas, SearchKelas } from "../components";
// page for route
import {
  Home,
  Profile,
  ViewCard,
  ListPeserta,
  ViewTugas,
  KelasTerbuka,
  KelasTambah,
  DetailTugas
} from "../pages";

const NavBar = () => {
  // State
  const [show, setShow] = useState(false);
  const [showBuat, setShowBuat] = useState(false);
  const [viewNavClass, setViewNavClass] = useState(true);
  const [kodeKelas, setKodeKelas] = useState()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [error, setError] = useState(null)
  const history = useHistory()

  // function
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseBuat = () => setShowBuat(false);
  const handleShowBuat = () => setShowBuat(true);

  const btnMasukKelas = (e) => {
    e.preventDefault()
    fetch('http://127.0.0.1:8000/kelas/join', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: user.id,
        kode: kodeKelas
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson == true) {
          setShow(false)
          setKodeKelas('')
          history.push('/')
        } else {
          e.preventDefault()
          setError(responseJson)
        }
      })
      .catch(e => console.log(e));
  }

  const classes = styles();

  return (
    <Router>
      <div className={classes.navbar}>
        <div className={classes.titleNavbar}>
          <Link to={"/"} className={classes.textAStyle}>
            <h2 className={classes.titleNavbarText}> ClassRoom </h2>
          </Link>
          <Link to={"/login"} onClick={() => localStorage.clear()} className={classes.textAStyle}>
            <h2 className={classes.titleNavbarText}> Logout </h2>
          </Link>
        </div>

        <Route path="/kelas/:name" component={NavKelas} />
        <Route path="/kelasterbuka" component={SearchKelas} />

        <ul className={classes.ulnavigationClass}>
          <li className={classes.liNavigation}>
            <Link className={classes.linkNavigationText}>
              <OverlayTrigger
                trigger="focus"
                key="left"
                placement="left"
                overlay={
                  //   <Popover id={`popover-positioned-${placement}`}>
                  <Popover id="popover-positioned-left">
                    <Popover.Content>
                      <Link className={classes.pop} onClick={handleShow}>
                        Masuk Kelas
                      </Link>
                    </Popover.Content>
                    <Popover.Content>
                      <Link className={classes.pop} onClick={handleShowBuat}>
                        Buat Kelas
                      </Link>
                    </Popover.Content>
                    <Popover.Content>
                      <Link to="/kelasterbuka" className={classes.pop}>
                        Kelas Terbuka
                      </Link>
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button className={classes.addClassBTN}>
                  {" "}
                  <BiPlus className={classes.BiPlus} />{" "}
                </Button>
              </OverlayTrigger>
            </Link>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Masuk Kelas</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className={styles.label}>Kode Kelas </p>
                <Form className={classes.formInsertCode}>
                  <Row>
                    {/* STYLE KELAS TIDAK DITEMUKAN */}
                    <h4>{error != null ? error : null}</h4>
                    <Col sm={8}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          placeholder="Masukkan kode kelas"
                          required
                          value={kodeKelas}
                          onChange={e => setKodeKelas(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col sm={4}>
                      <Button variant="primary" type="submit" onClick={btnMasukKelas}>
                        {" "}
                        Submit{" "}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Modal.Body>
            </Modal>
            <Modal show={showBuat} onHide={handleCloseBuat}>
              <Modal.Header closeButton>
                <Modal.Title>Buat Kelas</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <KelasTambah />
              </Modal.Body>
            </Modal>
          </li>
          <li className={classes.liNavigation}>
            <Link to={"/profile"} className={classes.linkNavigationText}>
              <Image
                src={user.foto}
                className={classes.imagesProfile}
                roundedCircle
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/kelas/:name/tugas/:id">
            <DetailTugas />
          </Route>
          <Route path="/kelas/:name/peserta" component={ListPeserta} />
          <Route path="/detailTugas" component={DetailTugas} />
          <Route path="/kelas/:name">
            <ViewCard />
          </Route>
          <Route exact path="/kelasterbuka" component={KelasTerbuka} />
          {/* <Route path="/tambah/kelas/" component={Login} /> */}
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;

const styles = createUseStyles({
  textAStyle: {
    color: "#1D1D1D",
    "&:hover": {
      textDecoration: "none",
      color: "#1D1D1D",
    },
  },
  container: {
    width: "94%",
    margin: "0 auto",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    borderBottom: "1px solid #E2E2E2",
    paddingLeft: 30,
    paddingRight: 30,
  },
  addClassBTN: {
    backgroundColor: "transparent",
    border: "none",
    "&:hover": {
      backgroundColor: "transparent",
      border: "none",
    },
    "&:focus": {
      backgroundColor: "transparent",
      border: "none",
    },
    "&:active": {
      backgroundColor: "transparent",
      border: "none",
    },
  },
  BiPlus: {
    color: Color.blackDoff,
    fontSize: 26,
  },
  pop: {
    fontSize: 15,
    color: Color.primary,
  },
  titleNavbarText: {
    fontSize: 22,
    fontFamily: "DM Sans",
    fontWeight: "500",
  },
  ulnavigation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ulnavigationClass: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  liNavigation: {
    listStyle: "none",
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  liNavigationClass: {
    listStyle: "none",
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  imagesProfile: {
    borderRadius: 50,
    width: 45,
    height: 45,
    transition: "all .2s",
    "&:hover": {
      boxShadow: "2px 3px 16px -1px rgba(189,189,189,0.48);",
    },
    formInsertCode: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  linkNavigationTextClass: {
    color: Color.blackDoff,
    fontFamily: "DM Sans",
    marginBottom: 0,
    "&:hover": {
      textDecoration: "none",
      color: Color.primary,
      borderBottom: "2px solid" + Color.primary,
      paddingBottom: 23,
    },
  },
  label: {
    fontSize: 15,
    color: Color.primary,
    fontWeight: "bold",
  },
});
