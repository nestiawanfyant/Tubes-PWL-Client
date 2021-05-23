import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
// bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Row, Col, Card } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// assets
import { Color } from "../../assets/color";
import "../../assets/css/font.css";
// icon
import {
  BsClock,
  BsExclamationCircle,
  BsCheckCircle,
  BsXCircle,
} from "react-icons/bs";

const CardListKelas = () => {
  const styles = style();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const icon = () => {
  //   if
  // };
  return (
    <Card>
      <BrowserRouter className={styles.linkheaderCard}>
        <Card.Body className={styles.cardContenHeader}>
          <div className={styles.boxHeader}>
            <Image
              src="https://picsum.photos/200/300"
              className={styles.imagesHeader}
              roundedCircle
            />
            <div className={styles.nameCardTitle}>
              <p className={styles.textCardTitle}>Tugas Pertemuan 1</p>
              <p className={styles.textCardPengampu}>24/02/2021 - 23:59 WIB</p>
            </div>
          </div>
          <div className={styles.boxStatus}>
            <div className={styles.textStatus}>
              Belum Mengumpul <BsClock className={styles.iconStatus}/>
            </div>
          </div>
        </Card.Body>
      </BrowserRouter>
    </Card>
  );
};

export default CardListKelas;

const style = createUseStyles({
  boxHeader: {
    display: "flex",
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  boxStatus: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: 7,
    paddingBottom: 9,
  },
  textStatus: {
    color: Color.primary,
    fontSize: 15,
    fontFamily: "DM Sans",
    fontWeight: "bold",
  },
  iconStatus: {
    marginLeft: 5,
    fontSize: 25,
  },
  cardContenHeader: {
    paddingTop: 7,
    paddingBottom: 9,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // justifyContent: "center",
  },
  nameCardTitle: {
    // marginTop: 7,
  },
  linkheaderCard: {
    textDecoration: "none",
    transition: "all .2s",
    "&:hover": {
      textDecoration: "none",
      backgroundColor: Color.softGray,
    },
  },
  textCardTitle: {
    fontFamily: "DM Sans",
    fontSize: 17,
    color: Color.blackDoff,
    letterSpacing: 0.4,
    fontWeight: "600",
    marginBottom: 0,
  },
  textCardPengampu: {
    fontFamily: "DM Sans",
    fontSize: 13,
    color: Color.primary,
    letterSpacing: 0.4,
    fontWeight: "500",
    marginBottom: 0,
    alignText: "center",
  },
  textContentCard: {
    fontSize: 14,
    fontFamily: "DM Sans",
  },
  imagesHeader: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
});
