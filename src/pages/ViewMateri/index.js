import React from "react";
import { createUseStyles } from "react-jss";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion, Card } from "react-bootstrap";
// assets
import { Color } from "../../assets/color";
import "../../assets/css/font.css";
// icon
import { BiPlus } from "react-icons/bi";
// component
import { CardListMateri } from "../../components";
// page for route
import { MateriTambah } from "../../pages";

const ViewMateri = () => {
  const styles = style();

  return (
    <div>
      <Accordion className={styles.accordion}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <div className={styles.iconBox}>
              Tambah Materi <BiPlus className={styles.icon} />
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <MateriTambah />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br />
      <CardListMateri /> <br />
      <CardListMateri /> <br />
      <CardListMateri /> <br />
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
