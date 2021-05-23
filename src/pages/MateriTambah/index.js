import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
//bootstra
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { createUseStyles } from "react-jss";
//assets
import { Color } from "../../assets/color";
//components
import { CardKelas } from "../../components";
//icon
import { FiFileText, FiX } from "react-icons/fi";

const MateriTambah = () => {
  const classes = styles();
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(true);
  // function
  const handleShow = () => setShow(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className={classes.container}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label className={classes.text}>Topik</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingin membahas apa selanjutnya ?"
            />
            <Form.Control.Feedback>Sudah Terisi</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Wajib mencamtumkan topik
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <Form.Label className={classes.text}>Deskripsi</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Deskripsikan gambaran umum topik"
              />
              <Form.Control.Feedback>(Opsional)</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label className={classes.text}>File Pendukung</Form.Label>
            <br />
            <Form.Label className={classes.text}>
              <Form.File id="exampleFormControlFile1" name="file" required />
              {/* ini buat edit */}
              {/* {show ? (
                <div>
                  <span className={classes.namaFile}>Ini nama Filenya.zip</span>
                  <span className={classes.icon} onClick={handleShow}>
                    <FiX />
                    Hapus
                  </span>
                </div>
              ) : (
                <Form.File id="exampleFormControlFile1" name="file" required />
              )} */}
            </Form.Label>
          </Form.Group>
        </Form.Row>
        <Button type="submit" className={classes.button}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MateriTambah;

const styles = createUseStyles({
  container: {
    width: "90%",
    margin: "20px auto",
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
  namaFile: {
    fontSize: 15,
    marginRight: 15,
    fontWeight: "bold",
    color: Color.black,
  },
  icon: {
    fontSize: 15,
    fontWeight: "bold",
    color: Color.red,
  },
});
