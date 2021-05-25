import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { Link, useHistory } from "react-router-dom";

//bootstrap
import {
  Image,
  Popover,
  Button,
  Modal,
  Form,
  Col,
  InputGroup,
} from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

// assets
import "./CardKelas.css";
import { Color } from "../../assets/color";
import "../../assets/css/font.css";

// icon
import { BiMessageAdd, BiMessageDots, BiSmile } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const CardKelas = ({
  title,
  dosen,
  gambar,
  kode,
  link,
  user,
  kelasUser,
  deskripsi,
  kelasId,
  tipe,
}) => {
  const classes = styles();
  // State
  const [show, setShow] = useState(false);
  const [nama, setNama] = useState(title);
  const [getDeskripsi, setDeskripsi] = useState(deskripsi);
  const [showHapus, setShowHapus] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const history = useHistory();

  // function
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseHapus = () => setShowHapus(false);
  const handleShowHapus = () => setShowHapus(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const btnEditKelas = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/kelas/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        id: kelasId,
        nama: nama,
        deskripsi: deskripsi,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        handleCloseEdit();
      })
      .catch((e) => console.log(e));
  };

  const btnKeluarKelas = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/kelas/keluar", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        kelas: kelasId,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        history.push("/");
      })
      .catch((e) => console.log(e));
  };

  const btnHapusKelas = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/kelas/destroy", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        kelas_id: kelasId,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        history.push("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardHeader}>
        <div className={classes.box1}>
          <Link
            to={"kelas/" + link + "/materi"}
            className={classes.textDecorationNone}
          >
            <div className={classes.titleHeader}>{title}</div>
            <div className={classes.textHeader}>{dosen}</div>
          </Link>
        </div>
        <div className={classes.box2}>
          <OverlayTrigger
            trigger="focus"
            key="left"
            placement="left"
            overlay={
              //   <Popover id={`popover-positioned-${placement}`}>
              <Popover id="popover-positioned-left">
                {user === kelasUser ? (
                  <>
                    <Popover.Content>
                      <Link className={classes.pop} onClick={handleShowHapus}>
                        Hapus Kelas
                      </Link>
                    </Popover.Content>
                    <Popover.Content>
                      <Link className={classes.pop} onClick={handleShowEdit}>
                        Edit Kelas
                      </Link>
                    </Popover.Content>
                  </>
                ) : null}
                <Popover.Content>
                  <Link className={classes.pop} onClick={handleShow}>
                    Keluar Kelas
                  </Link>
                </Popover.Content>
              </Popover>
            }
          >
            <Button className={classes.addClassBTN}>
              {" "}
              <FiSettings className={classes.iconHeader} />
            </Button>
          </OverlayTrigger>
          {/* modal keluar kelas */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              {/* <Form> */}
              <h5>
                Apakah anda yakin ingin keluar dari{" "}
                <b className={classes.bold}>{title}</b>
              </h5>
              {/* </Form> */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={btnKeluarKelas}>
                Ya, Keluar
              </Button>
              <Button className={classes.button} onClick={handleClose}>
                Batal
              </Button>
            </Modal.Footer>
          </Modal>
          {/* modal hapus kelas */}
          <Modal show={showHapus} onHide={handleCloseHapus}>
            <Modal.Body>
              {/* <Form> */}
              <h5>
                Menghapus Kelas akan menghilangkan semua data didalam kelas,
                apakah anda yakin ingin menghapus kelas{" "}
                <b className={classes.bold}>{title}</b>
              </h5>
              {/* </Form> */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="light" onClick={btnHapusKelas}>
                Ya, Hapus
              </Button>
              <Button className={classes.button} onClick={handleCloseHapus}>
                Batal
              </Button>
            </Modal.Footer>
          </Modal>
          {/* modal edit kelas */}
          <Modal show={showEdit} onHide={handleCloseEdit}>
            <Form>
              <Modal.Body>
                <Form.Row>
                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                    <Form.Label className={classes.text}>Nama</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Nama"
                      onChange={(e) => setNama(e.target.value)}
                      value={nama}
                    />
                    <Form.Control.Feedback>Sudah Terisi</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Wajib mencamtumkan nama kelas
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label className={classes.text}>Deskripsi</Form.Label>
                    <InputGroup hasValidation>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Waktu pembelajaran"
                        onChange={(e) => setDeskripsi(e.target.value)}
                        value={getDeskripsi}
                      />
                      <Form.Control.Feedback>(Opsional)</Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
              </Modal.Body>
              <Modal.Footer>
                <Button className={classes.button} onClick={btnEditKelas}>
                  Edit
                </Button>
                <Button variant="light" onClick={handleCloseEdit}>
                  Batal
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>

          {/* <img src={Mola} alt="kucing"> */}
          <Image src={gambar} alt="kucing" className={classes.imageHeader} />
        </div>
      </div>
      <div className={classes.cardBody}>
        {/* <ul className={classes.listBody}>
            <li>Tugas 1 - HTML Dasar</li>
            <li>Tugas 2 - CSS Dasar</li>
            <li>Tugas 1 - HTML Dasar</li>
            <li>Tugas 2 - CSS Dasar</li>
            <li>Tugas 1 - HTML Dasar</li>
            <li>Tugas 2 - CSS Dasar</li>
          </ul> */}
        {/* kalau ga ada Tugas */}
        <div className={classes.textBody}>Silahkan tidur, tidak ada tugas</div>
        <div className={classes.textBody}>
          <BiSmile className={classes.iconBody} />
        </div>
      </div>
      <div className={classes.cardFooter}>
        {tipe == "1" ? (
          <div className={classes.time}>Kode : {kode}</div>
        ) : (
          <div className={classes.time}>Kelas Terbuka</div>
        )}

        {/* <BiMessageAdd className={classes.iconFooter} />
        <BiMessageDots className={classes.iconFooter} /> */}
      </div>
    </div>
  );
};

export default CardKelas;

const styles = createUseStyles({
  container: {
    width: "50%",
    margin: "0 auto",
  },
  cardContainer: {
    overflow: "hidden",
    flexDirection: "column",
    // maxWidth: 350,
    width: 290,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    border: "1px solid #F5F5F5",
    boxShadow: "3px 12px 16px -4px rgba(235,235,235,0.44)",
    marginTop: 20,
  },
  cardHeader: {
    backgroundColor: Color.primary,
    height: "auto",
    padding: 10,
    display: "flex",
  },
  box1: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    flex: 3,
    marginRight: 10,
  },
  box2: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    flex: 1,
  },
  titleHeader: {
    fontSize: 21,
    color: Color.white,
    textOverflow: "ellipsis",
    fontFamily: "DM Sans",
  },
  textHeader: {
    fontSize: 15,
    color: Color.white,
    fontFamily: "DM Sans",
  },
  imageHeader: {
    width: 60,
    height: 60,
    backgroundColor: Color.blackDoff,
    borderRadius: 50,
    borderWidth: 3,
    position: "relative",
    top: "50%",
  },
  iconHeader: {
    // flex: 1,
    alignSelf: "flex-end",
    fontSize: 19,
    color: Color.white,
    marginTop: 7,
    "&:hover": {
      cursor: "pointer",
    },
  },
  homeText: {
    fontSize: 40,
    color: Color.primary,
  },
  textDecorationNone: {
    textDecoration: "none",
    "&:hover": {
      textDecorationColor: Color.white,
    },
  },
  pop: {
    fontSize: 15,
    color: Color.primary,
  },
  cardBody: {
    padding: 20,
    borderColor: Color.secondary,
    // border: "0.1px solid #000000",
  },
  listBody: {
    marginLeft: -15,
  },
  textBody: {
    fontSize: 15,
    fontWeight: "bold",
    color: Color.primary,
    textAlign: "center",
    marginTop: 20,
  },
  iconBody: {
    marginRight: 20,
    marginBottom: 20,
    color: Color.primary,
    alignSelf: "center",
    fontSize: 50,
  },
  cardFooter: {
    // backgroundColor: Color.secondary,
    height: 50,
    display: "flex",
    justifyContent: "center",
    aligItems: "center",
    borderTop: "1px solid #f5f5f5",
  },
  time: {
    // marginTop: 10,
    margin: "auto 0",
    fontSize: 14,
    fontFamily: "DM Sans",
    color: Color.primary,
  },
  iconFooter: {
    marginRight: 20,
    color: Color.blackDoff,
    alignSelf: "center",
    fontSize: 25,
  },
  addClassBTN: {
    backgroundColor: "transparent",
    alignSelf: "flex-end",
    padding: 0,
    border: "none",
    "&:hover": {
      backgroundColor: "transparent",
      border: "none",
    },
    "&:focus": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "none",
    },
  },
  bold: {
    color: Color.primary,
  },
  text: {
    color: Color.primary,
    fontWeight: "bold",
  },
  button: {
    margin: 0,
    backgroundColor: Color.primary,
    fontWeight: "bold",
  },
});
