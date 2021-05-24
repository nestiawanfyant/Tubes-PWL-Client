import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card, Modal } from "react-bootstrap";
// assets
import { Color } from "../../assets/color";
import "../../assets/css/font.css";
// icon
import { BiPlus } from "react-icons/bi";
// component
import { CardListTugas } from "../../components";
// page for route
import { TugasTambah } from "../../pages";
import { useParams } from "react-router-dom";

const ViewTugas = () => {
  const styles = style();
  const { name } = useParams();
  const [tugas, setTugas] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    fetch("http://127.0.0.1:8000/tugas/list?" + "slug=" + name)
      .then((response) => response.json())
      .then((responseJson) => {
        setTugas(responseJson);
      })
      .catch((e) => console.log(e));
  }, [tugas]);

  return (
    <div>
      <Accordion className={styles.accordion}>
        <Card>
          <Accordion.Toggle as={Card.Header} onClick={handleShow}>
            <div className={styles.iconBox}>
              Tambah Tugas <BiPlus className={styles.icon} />
            </div>
          </Accordion.Toggle>
        </Card>
      </Accordion>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Tugas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TugasTambah slug={name} />
        </Modal.Body>
      </Modal>
      <br />
      {tugas.length > 0 ? (
        tugas.map((data) => {
          return (
            <>
              <CardListTugas
                key={data.id}
                nama={data.nama}
                user={data.user.nama}
                deskripsi={data.deskripsi}
                id={data.id}
                deadline={data.deadline}
                slug={data.slug}
              />{" "}
              <br />
            </>
          );
        })
      ) : (
        <h3>Belum ada tugas</h3>
      )}
    </div>
  );
};

export default ViewTugas;

const style = createUseStyles({
  accordion: {
    boxShadow: "3px 12px 16px -4px rgba(235,235,235,0.44)",
    "&:hover": {
      cursor: "pointer",
    },
  },
  iconBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: Color.primary,
    fontSize: 20,
  },
  icon: {
    marginLeft: 10,
    fontFamily: "DM Sans",
    fontWeight: "bold",
  },
});
