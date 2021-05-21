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
//pages
import { ViewCard } from "../index";

const Profile = () => {
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
          <Form.File
            id="exampleFormControlFile1"
            required
          />
        </Form.Group>
      </Form.Row>
      <Button type="submit">Submit form</Button>
    </Form>
  );
};

export default Profile;

const styles = createUseStyles({
  text: {
    color: Color.primary,
    fontWeight: 'bold',
    
  },
});
