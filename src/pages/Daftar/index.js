import React, { useState, useEffect } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";

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
  const history = useHistory()

  const Register = (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('email', email)
    data.append('nama', nama)
    data.append('password', password)
    data.append('password_confirmation', passwordConfirmation)
    data.append('foto', foto)
    fetch('http://127.0.0.1:8000/register', {
      method: 'POST',
      enctype: 'multipart/form-data',
      headers: {
        Accept: 'application/json',
        // 'Content-Type': 'application/json',
      },
      body: data
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.error != null) {
          setError(responseJson.error)
        } else {
          setError(null)
          setNama(null)
          setEmail(null)
          setPassword(null)
          setPasswordConfirmation(null)
          setFoto(null)
          history.push('/login')
        }
      })
      .catch(e => console.log(e));
  }


  useEffect(() => {
    const isLogin = () => localStorage.getItem('token') ? history.push('/') : null
    isLogin()
  });

  return (
    <Row>
      <Col sm={5} className={classes.box}>
        <Form>
          {error ?
            <ul>
              {
                Object.keys(error).map(
                  data => {
                    return (
                      error[data].map(
                        (value, i) => {
                          // Styling error disini
                          return (<li>{value}</li>)
                        })
                    )
                  }
                )
              }
            </ul>
            : null
          }
          <Form.Group controlId="formBasicName">
            <Form.Label className={classes.label}>Nama</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama lengkap" autoComplete="off" required value={nama} onChange={(e) => setNama(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className={classes.label}>Email</Form.Label>
            <Form.Control type="email" placeholder="Masukkan email" autoComplete="off" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className={classes.label}>Password</Form.Label>
            <Form.Control type="password" placeholder="Masukkan password" required value={password} onChange={(e) => setPassword(e.target.value)} />
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
          </Form.Group>

          <Form.Group>
            <Form.Label className={classes.label}>Foto</Form.Label>
            <br />
            <Form.Label className={classes.label}>
              <Form.File id="exampleFormControlFile1" required accept=".png, .jpg, .jpeg" onChange={(e) => setFoto(e.target.files[0])} />
            </Form.Label>
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
