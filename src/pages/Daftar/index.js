import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//bootstra
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image } from "react-bootstrap";
import { createUseStyles } from "react-jss";
//assets
import { Color } from "../../assets/color";
import { RegisterImage } from "../../assets/image";

const Login = () => {
  const classes = styles();

  return (
    <Row>
      <Col sm={5} className={classes.box}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={classes.label}>Nama</Form.Label>
            <Form.Control type="email" placeholder="Masukkan nama lengkap" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className={classes.label}>Email</Form.Label>
            <Form.Control type="email" placeholder="Masukkan email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className={classes.label}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className={classes.label}>Validasi Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Masukkan kembali password"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className={classes.label}>Foto</Form.Label>
            <br />
            <Form.Label className={classes.label}>
              <Form.File id="exampleFormControlFile1" name="file" required />
            </Form.Label>
          </Form.Group>
          <Form.Text className="text-muted">
            *Privasi anda tidak akan disebarluaskan
          </Form.Text>
          <Button type="submit" className={classes.button}>
            Daftar
          </Button>
        </Form>
      </Col>
      <Col sm={7}>
        <Image src={RegisterImage} className={classes.image} />
      </Col>
    </Row>
  );
};

export default Login;

const styles = createUseStyles({
  box: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "1",
    margin: "auto auto",
    // backgroundColor: Color.primary,
    // justifyContent: 'stretch',
    alignItems: "center",
  },
  image: {
    height: "80vh",
    width: "80%",
    backgroundColor: Color.primary,
  },
  text: {
    fontSize: 13,
    marginTop: 15,
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    color: Color.primary,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Color.primary,
    fontWeight: "bold",
  },
});
