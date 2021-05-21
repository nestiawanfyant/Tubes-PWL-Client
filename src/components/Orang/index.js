import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
//bootstrap
import { Image, Popover, Button, Modal, Col, Row } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
//assets
import { Color } from "../../assets/color";
import "../../assets/css/font.css";
//icon
import { FiXSquare, FiMoreVertical } from "react-icons/fi";


const Orang = ({ nama, gambar, type }) => {
  // State
  const [show, setShow] = useState(false);

  // function
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const classes = styles();
  return (
    <div className={classes.box}>
      <Image className={classes.image} src={gambar} roundedCircle />
      <div className={classes.textBox}>
        <h6 className={classes.text}>{nama}</h6>
      </div>
      <FiXSquare className={classes.iconRed} onClick={handleShow} />
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          {/* <Form> */}
          <h3>
            Apakah anda yakin ingin mengeluarkan{" "}
            <b className={classes.bold}>{nama}</b>
          </h3>
          {/* </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Ya, Keluarkan
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Batal
          </Button>
        </Modal.Footer>
      </Modal>

      <OverlayTrigger
        trigger="click"
        key="left"
        placement="left"
        overlay={
          //   <Popover id={`popover-positioned-${placement}`}>
          <Popover id="popover-positioned-left">
            <Popover.Content>
              <Link className={classes.pop}>Jadikan Guru</Link>
            </Popover.Content>
            <Popover.Content>
              <Link className={classes.pop}>Jadikan Asisten</Link>
            </Popover.Content>
          </Popover>
        }
      >
        <FiMoreVertical className={classes.icon} />
      </OverlayTrigger>
    </div>
  );
};

export default Orang;

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
