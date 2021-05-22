import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

//bootstra
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Image } from "react-bootstrap";
import { createUseStyles } from "react-jss";
//assets
import { Color } from "../../assets/color";
import { LoginImage } from "../../assets/image";

const Login = () => {
  const classes = styles();

  return (
    <Row>
      <Col sm={5} className={classes.box}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={classes.label}>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Masukkan email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className={classes.label}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <h6 className={classes.text}>
            Belum memiliki akun ? <Link to={"/daftar"}>Daftar disini</Link>
          </h6>

          <Button type="submit" className={classes.button}>
            Submit
          </Button>
        </Form>
      </Col>
      <Col sm={7}>
        <Image src={LoginImage} className={classes.image} />
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
