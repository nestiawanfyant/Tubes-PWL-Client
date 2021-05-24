import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
// bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Image, Button, Form, Row, Col, Card, Popover } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// assets
import { Color } from "../../assets/color";
import "../../assets/css/font.css";
// icon
import { BiBookBookmark, BiDotsVerticalRounded, BiSend } from "react-icons/bi";

const cardListMateri = ({ nama, user, deskripsi, id }) => {
  const styles = style();

  return (
    <Card>
      <BrowserRouter className={styles.linkheaderCard}>
        <Card.Header className={styles.cardContenHeader}>
          <Row>
            <Col sm={11}>
              <div className={styles.nameCardTitle}>
                <BiBookBookmark className={styles.iconCardTitle} />
                <p className={styles.textCardTitle}>
                  {" "}
                  {user} posted a new material: {nama}{" "}
                </p>
              </div>
            </Col>
            <Col sm={1}>
              <OverlayTrigger
                trigger="click"
                key="left"
                placement="left"
                overlay={
                  //   <Popover id={`popover-positioned-${placement}`}>
                  <Popover id="popover-positioned-left">
                    <Popover.Content>
                      <Link className={styles.pop}>Hapus Materi</Link>
                    </Popover.Content>
                    <Popover.Content>
                      <Link className={styles.pop}>Edit Materi</Link>
                    </Popover.Content>
                  </Popover>
                }
              >
                <BiDotsVerticalRounded className={styles.DotsVerticalRounded} />
              </OverlayTrigger>
            </Col>
          </Row>
        </Card.Header>
      </BrowserRouter>
      {deskripsi == 'null' ? null : <Card.Body>
        <Card.Text className={styles.textContentCard}>
          {deskripsi}
        </Card.Text>
      </Card.Body>}
      <Card.Footer className={styles.footerCard}>
        <Row>
          <Col sm={1}>
            <Image
              src="https://picsum.photos/200/300"
              className={styles.imagesProfile}
              roundedCircle
            />
          </Col>
          <Col sm={11}>
            <Form className={styles.formInsertCode}>
              <Row>
                <Col sm={11}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      className={styles.inputComment}
                      type="text"
                      placeholder="Tambah komentar"
                    />
                  </Form.Group>
                </Col>
                <Col sm={1}>
                  <Button type="submit" className={styles.buttonSendComment}>
                    <BiSend className={styles.iconBtnSendComment} />
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default cardListMateri;

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
    "&:hover": {
      cursor: "pointer",
    },
  },
  pop: {
    fontSize: 15,
    color: Color.primary,
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
