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
  const [error, setError] = useState(null)
  const [email, setEmail] = useState({ value: '', error: null })
  const [password, setPassword] = useState({ value: '', error: null })

  const Login = (e) => {
    e.preventDefault()
    const re = /\S+@\S+\.\S+/

    if (email.value && password.value) {
      if (re.test(email.value)) {
        fetch('http://127.0.0.1:8000/login', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
        })
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson)
            if (responseJson.user != null) {
              localStorage.setItem('id', responseJson.user.id)
              localStorage.setItem('token', responseJson.user.token)
              setError(null)
              setPassword({ ...password, value: '', error: null })
              setEmail({ ...email, value: '', error: null })
            } else {
              setEmail({ ...email, error: null })
              setPassword({ ...password, error: null })
              setError(responseJson.error)
            }
          })
          .catch(e => console.log(e));
      } else {
        setEmail({ ...email, error: 'Email tidak sesuai' })
        setPassword({ ...password, error: null })
      }
    } else {
      setError(null)
      if (!email.value) {
        setEmail({ ...email, error: 'Masukkan Email' })
      } else {
        setEmail({ ...email, error: null })
      }

      if (!password.value) {
        setPassword({ ...password, error: 'Masukkan Password' })
      } else {
        setPassword({ ...password, error: null })
      }
    }
  }

  const handleEmail = (e) => {
    setEmail({ ...email, value: e.target.value })
  }

  const handlePassword = (e) => {
    setPassword({ ...password, value: e.target.value })
  }

  return (
    <Row>
      <Col sm={5} className={classes.box}>
        <Form>
          {error != null ? <h4 className={classes.error}>{error}</h4> : null}
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={classes.label}>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Masukkan email" required onChange={handleEmail} value={email.value} autoComplete="off" />
            {email.error != null ? <h4 className={classes.error}>{email.error}</h4> : null}
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label className={classes.label}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required onChange={handlePassword} value={password.value} />
            {password.error != null ? <h4 className={classes.error}>{password.error}</h4> : null}
          </Form.Group>

          <h6 className={classes.text}>
            Belum memiliki akun ? <Link to={"/daftar"}>Daftar disini</Link>
          </h6>

          <Button type="submit" className={classes.button} onClick={Login}>
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
  error: {
    fontSize: 15,
    color: 'red',
    fontWeight: "bold",
    marginTop: 5,
    marginLeft: 5
  }
});
