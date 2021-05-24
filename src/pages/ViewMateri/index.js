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
import { CardListMateri } from "../../components";
// page for route
import { MateriTambah } from "../../pages";
import { useParams } from "react-router-dom";

const ViewMateri = () => {
  const styles = style();
  const { name } = useParams();
  const [materi, setMateri] = useState([]);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/materi/list?" + "slug=" + name)
      .then((response) => response.json())
      .then((responseJson) => {
        setMateri(responseJson);
      })
      .catch((e) => console.log(e));
  }, [materi]);

  return (
    <div>
      <Accordion className={styles.accordion}>
        <Card>
          <Accordion.Toggle as={Card.Header} onClick={handleShow}>
            <div className={styles.iconBox}>
              Tambah Materi <BiPlus className={styles.icon} />
            </div>
          </Accordion.Toggle>
        </Card>
      </Accordion>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Materi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MateriTambah slug={name} />
        </Modal.Body>
      </Modal>
      <br />
      {materi.length > 0 ? (
        materi.map((data) => {
          return (
            <>
              <CardListMateri
                key={data.id}
                nama={data.nama}
                user={data.user.nama}
                deskripsi={data.deskripsi}
                id={data.id}
                slug={data.slug}
              />{" "}
              <br />
            </>
          );
        })
      ) : (
        <h3>Belum ada materi</h3>
      )}
    </div>
  );
};

export default ViewMateri;

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
