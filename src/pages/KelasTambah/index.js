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

const KelasTambah = () => {
  const classes = styles();
  const [validated, setValidated] = useState(false);

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
            <Form.Label className={classes.text}>Nama</Form.Label>
            <Form.Control required type="text" placeholder="Nama" />
            <Form.Control.Feedback>Sudah Terisi</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Wajib mencamtumkan nama kelas
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <Form.Label className={classes.text}>Deskripsi</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Waktu pembelajaran"
              />
              <Form.Control.Feedback>(Opsional)</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="12" controlId="validationCustomUsername">
            <Form.Label className={classes.text}>Jenis Kelas</Form.Label>
            <InputGroup hasValidation required>
              <Form.Check
                label="Kelas Khusus"
                name="group1"
                type="radio"
                id="radio1"
                value="Kelas Khusus"
                checked="true"
              />
            </InputGroup>
            <InputGroup hasValidation required>
              <Form.Check
                label="Kelas Terbuka"
                name="group1"
                type="radio"
                id="radio2"
                value="Kelas Terbuka"
              />
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Button type="submit" className={classes.button}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default KelasTambah;

const styles = createUseStyles({
  container: {
    width: "50%",
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
});
