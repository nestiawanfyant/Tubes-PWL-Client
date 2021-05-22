import React, { useState, useEffect } from "react";
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
  const [error, setError] = useState(null)
  const [nama, setNama] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [passwordConfirmation, setPasswordConfirmation] = useState(null)
  const [foto, setFoto] = useState(null)

  const Register = (e) => {
    e.preventDefault()
    fetch('http://127.0.0.1:8000/register', {
      method: 'POST',
      enctype: 'multipart/form-data',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nama: nama,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        foto: foto
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.error != null) {
          console.log(responseJson)

          responseJson.error.nama.forEach(errorDataname => {
              setNama(errorDataname);
          });

          responseJson.error.email.forEach(errorDataEmail => {
              setEmail(errorDataEmail);
          });

          responseJson.error.password.forEach(errorDataPass => {
            setPassword(errorDataPass);
          });

          responseJson.error.password_confirmation.forEach(errorDataPassCof => {
            setPasswordConfirmation(errorDataPassCof);
          });

          responseJson.error.foto.forEach(errorDataFoto => {
            setFoto(errorDataFoto);
          });

        } else {
          // console.log(responseJson)
          // console.log("tes")
          setNama(responseJson.error.nama);
          console.log(nama);
          setError(responseJson.error)

        }
      })
      .catch(e => console.log(e));
  }


  useEffect(() => {

  });

  return (
    <Row>
      <Col sm={5} className={classes.box}>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label className={classes.label}>Nama</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama lengkap" autoComplete="off" required value={nama} onChange={(e) => setNama(e.target.value)} />
            <p> { nama } </p>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className={classes.label}>Email</Form.Label>
            <Form.Control type="email" placeholder="Masukkan email" autoComplete="off" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <p> { email } </p>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className={classes.label}>Password</Form.Label>
            <Form.Control type="password" placeholder="Masukkan password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <p> { password } </p>
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label className={classes.label}>Konfirmasi Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Masukkan konfirmasi password"
              required
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <p> { passwordConfirmation } </p>
          </Form.Group>

          <Form.Group>
            <Form.Label className={classes.label}>Foto</Form.Label>
            <br />
            <Form.Label className={classes.label}>
              <Form.File id="exampleFormControlFile1" required accept=".png, .jpg, .jpeg" onChange={(e) => setFoto(e.target.files[0])} />
            </Form.Label>
            <p> { foto } </p>
          </Form.Group>
          <Form.Text className="text-muted">
            *Privasi anda tidak akan disebarluaskan
          </Form.Text>
          <Button type="submit" className={classes.button} onClick={Register}>
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
