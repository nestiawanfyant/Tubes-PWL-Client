import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import { createUseStyles } from "react-jss";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Nav, Form, Row, Col, Card } from "react-bootstrap";
// assets
import { Color } from "../../assets/color";
import "../../assets/css/font.css";
// icon
import {
  BiBookBookmark,
  BiDotsVerticalRounded,
  BiSend,
  BiPlus,
} from "react-icons/bi";
// component
import { CardListMateri } from "../../components";
//pages
import { Profile, ViewMateri, ViewTugas } from '../../pages'

const ViewCard = () => {
  const styles = style();
  const { name } = useParams()
  const [kelas, setKelas] = useState(
    {
      nama: '',
      deskripsi: '',
    }
  )

  useEffect(() => {
    fetch('http://127.0.0.1:8000/kelas/show?' + 'slug=' + name)
      .then(response => response.json())
      .then(responseJson => {
        setKelas(responseJson)
      })
      .catch(e => console.log(e));
  })

  return (
    <div className={styles.ViewContainer}>
      <Card className={styles.cardCover}>
        <Card.Img
          className={styles.imgCardCover}
          src="https://picsum.photos/200/300"
          alt="Card image"
        />
        <Card.ImgOverlay className={styles.imgOVerly}>
          <Card.Title className={styles.textTitle}>
            {kelas.nama}
          </Card.Title>
          <Card.Text className={styles.textContent}>
            {kelas.deskripsi}
          </Card.Text>
          {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
        </Card.ImgOverlay>
      </Card>

      {/* content */}

      <Row>
        <Col sm={3}>
          <Card>
            <Card.Body>
              <Card.Title className={styles.titleLeftCard}>
                {" "}
                Upcoming{" "}
              </Card.Title>
              <Card.Text className={styles.textLeftCard}>
                {" "}
                Woohoo, no work due soon!{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={9}>
          <Switch>
            <Route path="/kelas/:name/materi">
              <ViewMateri />
            </Route>
            <Route path="/kelas/:name/tugas">
              <ViewTugas />
            </Route>
            <Route path="/kelas/:name/forum" component={Profile} />
          </Switch>
          {/* <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                        Disabled
                        </Nav.Link>
                    </Nav.Item>
                </Nav> */}
          {/* <CardListMateri /> <br /> */}
        </Col>
      </Row>
    </div>
  );
};

export default ViewCard;

const style = createUseStyles({
  ViewContainer: {
    width: "73%",
    margin: "0 auto",
  },
  ViewCard: {
    marginTop: 10,
    marginBottom: 10,
  },
  cardCover: {
    marginTop: 25,
    marginBottom: 25,
    borderRadius: 10,
    border: "none",
    background: Color.blackDoff,
  },
  imgCardCover: {
    borderRadius: 10,
    height: 260,
    objectFit: "cover",
    opacity: 0.4,
    color: Color.White,
  },
  textTitle: {
    color: Color.white,
    fontFamily: "DM Sans",
    fontSize: 32,
    fontWeight: "500",
  },
  imgOVerly: {
    padding: 40,
  },
  textContent: {
    color: Color.white,
    fontFamily: "DM Sans",
    fontSize: 16,
  },
  titleLeftCard: {
    fontFamily: "DM Sans",
    fontSize: 14,
    fontWeight: "500",
    color: Color.blackLight,
  },
  textLeftCard: {
    fontSize: 13,
    fontFamily: "DM Sans",
    color: Color.blackLight,
  },
  cardContenHeader: {
    backgroundColor: "transparent",
    paddingTop: 7,
    paddingBottom: 9,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameCardTitle: {
    display: "flex",
    flexDirection: "row",
    marginTop: 7,
  },
  linkheaderCard: {
    textDecoration: "none",
    transition: "all .2s",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: Color.softGray,
    },
  },
  iconCardTitle: {
    // marginTop: 5,
    marginRight: 5,
    fontSize: 37,
    backgroundColor: Color.secondaryPrimary,
    padding: 6,
    borderRadius: 100,
    color: Color.white,
  },
  textCardTitle: {
    marginTop: 8,
    marginLeft: 8,
    fontFamily: "DM Sans",
    fontSize: 14.4,
    color: Color.blackDoff,
    letterSpacing: 0.4,
    fontWeight: "600",
  },
  DotsVerticalRounded: {
    marginTop: 10,
    fontSize: 25,
    display: "flex",
  },
  textContentCard: {
    fontSize: 14,
    fontFamily: "DM Sans",
  },
  imagesProfile: {
    width: 35,
    height: 35,
  },
  formInsertCode: {
    marginBottom: 0,
    paddingBottom: 0,
  },
  footerCard: {
    marginBottom: 0,
    paddingBottom: 0,
    backgroundColor: "transparent",
  },
  inputComment: {
    borderRadius: 35,
    fontSize: 14,
    fontFamily: "DM Sans",
  },
  buttonSendComment: {
    display: "block",
    backgroundColor: "transparent",
    border: "none",
    Color: Color.blackDoff,
    width: 0,
    height: 0,
    "&:hover": {
      backgroundColor: "transparent",
      border: "none",
    },
    "&:active": {
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      boxShadow: "none",
    },
    "&:focus": {
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      boxShadow: "none",
    },
    "&:target": {
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      boxShadow: "none",
    },
    "&:visited": {
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
      boxShadow: "none",
    },
  },
  iconBtnSendComment: {
    color: Color.blackDoff,
    fontSize: 23,
    marginTop: "-10px",
    marginRight: 30,
    position: "relative",
    right: 20,
  },
});
