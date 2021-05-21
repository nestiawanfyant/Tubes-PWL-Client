import React, { useState } from "react";
import { Image, Popover, Button, Modal, Col, Row } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

import { BiUserCheck, BiUserX } from "react-icons/bi";

import { Color } from "../../assets/color";
import "../../assets/css/font.css";

const ValidasiOrang = ({ nama, gambar, motivasi }) => {
  // State
  const [showTolak, setShowTolak] = useState(false);
  const [showTerima, setShowTerima] = useState(false);

  // function
  const handleCloseTolak = () => setShowTolak(false);
  const handleShowTolak = () => setShowTolak(true);
  const handleCloseTerima = () => setShowTerima(false);
  const handleShowTerima = () => setShowTerima(true);

  const classes = styles();
  return (
    <div className={classes.box}>
      <Image className={classes.image} src={gambar} roundedCircle />
      <div className={classes.textBox}>
        <h6 className={classes.text}>{nama}</h6>
        <h6 className={classes.textMasuk}>{motivasi}</h6>
      </div>

      <BiUserX className={classes.iconRed} onClick={handleShowTolak} />
      <Modal show={showTolak} onHide={handleCloseTolak}>
        <Modal.Body>
          <h3>
            Tolak {" "}
            <b className={classes.bold}>{nama}</b>
            {" "} untuk mengikuti kelas ?
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleCloseTolak}>
            Ya, Tolak
          </Button>
          <Button variant="primary" onClick={handleCloseTolak}>
            Batal
          </Button>
        </Modal.Footer>
      </Modal>

      <BiUserCheck className={classes.icon} onClick={handleShowTerima} />
      <Modal show={showTerima} onHide={handleCloseTerima}>
        <Modal.Body>
          <h3>
            Terima {" "}
            <b className={classes.bold}>{nama}</b>
            {" "} kedalam kelas ?
          </h3>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseTerima}>
            Ya, Terima
          </Button>
          <Button variant="light" onClick={handleCloseTerima}>
            Batal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ValidasiOrang;

const styles = createUseStyles({
  box: {
    alignItems: "center",
    borderBottom: "1px solid #F5F5F5",
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
    paddingBottom: 5,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Color.blackDoff,
    fontFamily: "DM Sans",
  },
  textMasuk: {
    fontSize: 12,
    fontFamily: "DM Sans",
    color: Color.primary,
    marginTop: -5,
  },
  icon: {
    fontSize: 25,
    color: Color.primary,
    marginLeft: 15,
  },
  iconRed: {
    fontSize: 25,
    color: Color.red,
    marginLeft: 15,
  },
  pop: {
    fontSize: 15,
    color: Color.primary,
  },
  bold: {
    color: Color.primary,
  },
});
