import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
// bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Image,
  Button,
  Form,
  Row,
  Col,
  Card,
  Popover,
  Modal,
} from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// assets
import { Color } from "../../assets/color";
import "../../assets/css/font.css";
// icon
import { BiBookBookmark, BiDotsVerticalRounded, BiSend , BiDownload} from "react-icons/bi";
import { BsChatQuote } from "react-icons/bs";

const CardListMateri = ({ nama, user, deskripsi, id, slug, file }) => {
  const styles = style();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showHapus, setShowHapus] = useState(false);
  const handleCloseHapus = () => setShowHapus(false);
  const handleShowHapus = () => setShowHapus(true);
  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  return (
    <Card>
      <div className={styles.linkheaderCard}>
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
                  <Popover id="popover-positioned-left">
                    <Popover.Content>
                      <Link className={styles.pop} onClick={handleShowHapus}>
                        Hapus Materi
                      </Link>
                    </Popover.Content>
                  </Popover>
                }
              >
                <BiDotsVerticalRounded className={styles.DotsVerticalRounded} />
              </OverlayTrigger>
              <Modal show={showHapus} onHide={handleCloseHapus}>
                <Modal.Body>
                  {/* <Form> */}
                  <h5>
                    Apakah anda yakin ingin mengeluarkan{" "}
                    <b className={styles.bold}>{nama}</b> ?
                  </h5>
                  {/* </Form> */}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="light">Ya, Keluarkan</Button>
                  <Button variant="primary" onClick={handleCloseHapus}>
                    Batal
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Card.Header>
      </div>
      {deskripsi == "null" ? null : (
        <Card.Body>
          <Card.Text className={styles.textContentCard}>{deskripsi}</Card.Text>
          <Card.Text className={styles.textContentCard}>
            <a href={file}><BiDownload className={styles.iconDownload}/> Download Materi</a>
          </Card.Text>
        </Card.Body>
      )}
      <Card.Footer className={styles.footerCard} onClick={handleShow}>
        <BsChatQuote className={styles.iconFooter} />
        <Card.Text className={styles.textFooter}>8 Komentar</Card.Text>
      </Card.Footer>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          {/* ini khusus post pertamanya */}
          <div className={styles.flexModal}>
            <Image
              src="https://picsum.photos/200/300"
              className={styles.imagesHeader}
              roundedCircle
            />
            <div className={styles.boxModal}>
              <span className={styles.namaModalBody}>
                Fikri Halim ch{" "}
                <span className={styles.waktuModalBody}>
                  (27/02/21 - 08:30)
                </span>
              </span>
              <span className={styles.komenModalBody}>
                ini komentarnya coba aja
              </span>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          {/* ini semua komen */}
          <div className={styles.flexModal}>
            <Image
              src="https://picsum.photos/200/300"
              className={styles.imagesHeader}
              roundedCircle
            />
            <div className={styles.boxModal}>
              <span className={styles.namaModalBody}>
                Fikri Halim ch{" "}
                <span className={styles.waktuModalBody}>
                  (27/02/21 - 08:30)
                </span>
              </span>
              <span className={styles.komenModalBody}>balasan 1</span>
            </div>
          </div>
          <div className={styles.flexModal}>
            <Image
              src="https://picsum.photos/200/300"
              className={styles.imagesHeader}
              roundedCircle
            />
            <div className={styles.boxModal}>
              <span className={styles.namaModalBody}>
                Fikri Halim ch{" "}
                <span className={styles.waktuModalBody}>
                  (27/02/21 - 08:30)
                </span>
              </span>
              <span className={styles.komenModalBody}>balasan 2</span>
            </div>
          </div>

          {/* ini khusus untuk yang mau nambah komentar */}
          <div className={styles.flexModalKomen}>
            <Image
              src="https://picsum.photos/200/300"
              className={styles.imagesHeader}
              roundedCircle
            />
            <input
              type="text"
              placeholder="masukkan komentar"
              className={styles.inputModal}
            />
            <button className={styles.buttonSend}>
              <BiSend className={styles.iconSend} />
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className={styles.button} onClick={handleClose}>
            Keluar
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};

export default CardListMateri;

const style = createUseStyles({
  iconDownload:{
fontSize: 25,
marginRight: 5,
  },
  button: {
    margin: 0,
    backgroundColor: Color.primary,
    fontWeight: "bold",
  },
  buttonSend: {
    border: "none",
    backgroundColor: "transparent",
  },
  iconSend: {
    fontSize: 25,
    color: Color.primary,
    marginLeft: 10,
  },
  flexModal: {
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
  },
  flexModalKomen: {
    display: "flex",
    marginTop: 15,
    paddingTop: 15,
    alignItems: "center",
    borderColor: Color.secondary,
    borderTop: "1px solid #E2E2E2",
  },
  inputModal: {
    paddingLeft: 10,
    paddingRight: 10,
    color: Color.primary,
    borderColor: Color.primary,
    borderTop: "1px solid #E2E2E2",
    borderRadius: 50,
    flex: 1,
  },
  imagesHeader: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  boxModal: {
    display: "flex",
    flexDirection: "column",
  },
  namaModalBody: {
    fontFamily: "DM Sans",
    fontSize: 17,
    color: Color.black,
  },
  waktuModalBody: {
    fontSize: 13,
    color: Color.blackDoff,
  },
  komenModalBody: {
    marginTop: -5,
    fontWeight: "bold",
    fontSize: 17,
    color: Color.primary,
  },
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
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  inputComment: {
    borderRadius: 35,
    fontSize: 14,
    fontFamily: "DM Sans",
  },
  buttonSendComment: {
    backgroundColor: Color.secondary,
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
  textFooter: {
    color: Color.primary,
    fontSize: 15,
  },
  iconFooter: {
    color: Color.primary,
    fontSize: 20,
    marginRight: 5,
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
});
