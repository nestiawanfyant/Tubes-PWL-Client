import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
// bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Form, Row, Col, Card, Modal } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// assets
import { Color } from "../../assets/color";
import "../../assets/css/font.css";
// icon
import { BiBookBookmark, BiDotsVerticalRounded, BiSend } from "react-icons/bi";

const CardListKelas = ({ title, pengampu, gambar, deskripsi }) => {
  const styles = style();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Card>
      <BrowserRouter className={styles.linkheaderCard}>
        <Card.Header className={styles.cardContenHeader}>
          <Row>
            <Col sm={10}>
              <div className={styles.boxHeader}>
                <Image
                  src={gambar}
                  className={styles.imagesHeader}
                  roundedCircle
                />
                <div className={styles.nameCardTitle}>
                  <p className={styles.textCardTitle}>{title}</p>
                  <p className={styles.textCardPengampu}>{pengampu}</p>
                </div>
              </div>
            </Col>
            <Col sm={2}>
              <div className={styles.boxButton}>
                <Button className={styles.button} onClick={handleShow}>
                  Bergabung
                </Button>
              </div>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Permintaan bergabung</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p> Masukkan motivasi singkat mengikuti kelas {title} </p>
                  <Form className={styles.formInsertCode}>
                    <Row>
                      <Col sm={8}>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control type="text" placeholder="Motivasimu" />
                        </Form.Group>
                      </Col>
                      <Col sm={4}>
                        <Button className={styles.button}>Bergabung</Button>
                      </Col>
                    </Row>
                  </Form>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Card.Header>
      </BrowserRouter>
      <Card.Body>
        <Card.Text className={styles.textContentCard}>{deskripsi}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardListKelas;

const style = createUseStyles({
  boxHeader: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
  },
  boxButton: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: 7,
    paddingBottom: 9,
  },
  button: {
    backgroundColor: Color.primary,
    fontWeight: "bold",
  },
  cardContenHeader: {
    paddingTop: 7,
    paddingBottom: 9,
    display: "flex",
    flexDirection: "column",
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
    fontSize: 15,
    color: Color.blackDoff,
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
