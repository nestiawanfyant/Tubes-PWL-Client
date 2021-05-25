import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
//bootstra
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { createUseStyles } from "react-jss";
//assets
import { Color } from "../../assets/color";

const MateriTambah = ({ slug, click }) => {
  const classes = styles();
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [show, setShow] = useState(true);
  const [nama, setNama] = useState(null);
  const [deskripsi, setDeskripsi] = useState(null)
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  // function
  const handleShow = () => setShow(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    const data = new FormData()
    data.append('nama', nama)
    data.append('deskripsi', deskripsi)
    data.append('file', file)
    data.append('slug', slug)
    data.append('id', user.id)

    fetch('http://127.0.0.1:8000/materi/store', {
      method: 'POST',
      enctype: 'multipart/form-data',
      headers: {
        Accept: 'application/json',
      },
      body: data
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.error != null) {
          setError(responseJson.error)
        } else {
          setNama('')
          setDeskripsi('')
          setFile('')
          setShow(false)
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
            <Form.Label className={classes.text}>Topik</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Ingin membahas apa selanjutnya ?"
              value={nama}
              onChange={e => setNama(e.target.value)}
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
                value={deskripsi}
                onChange={e => setDeskripsi(e.target.value)}
              />
              <Form.Control.Feedback>(Opsional)</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label className={classes.text}>File Pendukung</Form.Label>
            <br />
            <Form.Label className={classes.text}>
              <Form.File id="exampleFormControlFile1" name="file" required accept=".png, .jpg, .jpeg, .zip, .doc, .docx, .pdf" onChange={e => setFile(e.target.files[0])} />
            </Form.Label>
          </Form.Group>
        </Form.Row>
        <Button type="submit" className={classes.button} onClick={click}>
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
