import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
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
  const [nama, setNama] = useState(null)
  const [deskripsi, setDeskripsi] = useState(null)
  const [tipe, setTipe] = useState('1')
  const [error, setError] = useState(null)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) ?? null)
  const history = useHistory()


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    fetch('http://127.0.0.1:8000/kelas/store', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: user.id,
        nama: nama,
        deskripsi: deskripsi,
        tipe: tipe
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.error != null) {
          setError(responseJson.error)
        } else {
          setError(null)
          setNama(null)
          setDeskripsi(null)
          setTipe('1')
          history.push('/')
        }
      })
      .catch(e => console.log(e));
  };

  return (
    <div className={classes.container}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label className={classes.text}>Nama</Form.Label>
            <Form.Control required type="text" placeholder="Nama" onChange={e => setNama(e.target.value)} value={nama} />
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
                onChange={e => setDeskripsi(e.target.value)}
                value={deskripsi}
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
                value="1"
                checked="true"
                onClick={e => setTipe('1')}
              />
            </InputGroup>
            <InputGroup hasValidation required>
              <Form.Check
                label="Kelas Terbuka"
                name="group1"
                type="radio"
                id="radio2"
                value="2"
                onClick={e => setTipe('2')}
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
});
