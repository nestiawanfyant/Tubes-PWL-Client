import React, { useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
//datetime picker
import DateMomentUtils from "@date-io/moment";
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

//bootstra
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { createUseStyles } from "react-jss";
//assets
import { Color } from "../../assets/color";

const TugasTambah = ({ slug }) => {
  const classes = styles();
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [nama, setNama] = useState(null)
  const [deskripsi, setDeskripsi] = useState(null)
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)
  const [selectedDate, handleDateChange] = useState(new Date());
  const [show, setShow] = useState(true);
  // function
  const handleShow = () => setShow(false);

  const handleSubmit = (event) => {

    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    const waktu = selectedDate
    const tahun = waktu.getFullYear()
    let bulan = waktu.getMonth() + 1
    bulan = bulan >= 10 ? bulan : '0' + bulan
    let tanggal = waktu.getDate()
    tanggal = tanggal >= 10 ? tanggal : '0' + tanggal
    let jam = waktu.getHours()
    jam = jam >= 10 ? jam : '0' + jam
    let minute = waktu.getMinutes()
    minute = minute >= 10 ? minute : '0' + jam
    console.log(tahun + ' ' + bulan + ' ' + tanggal + ' ' + jam + ' ' + minute)

    const data = new FormData()
    data.append('nama', nama)
    data.append('deskripsi', deskripsi)
    data.append('file', file)
    data.append('deadline', bulan + '-' + tanggal + '-' + tahun + ' ' + jam + ':' + minute)
    data.append('slug', slug)
    data.append('id', user.id)
    data.append('slug', slug)

    fetch('http://127.0.0.1:8000/tugas/store', {
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
          handleDateChange(new Date())
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
          {/* {selectedDate} */}
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
          <Form.Group as={Col} md="12" controlId="validationCustomDate">
            <Form.Label className={classes.text}>Tenggat Waktu</Form.Label>
            <InputGroup hasValidation>
              <MuiPickersUtilsProvider utils={DateMomentUtils}>
                <DateTimePicker
                  variant="inline"
                  format="MM/DD/yyy HH:mm"
                  disablePast
                  ampm={false}
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
              <Form.Control.Feedback>(Opsional)</Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group>
            <Form.Label className={classes.text}>File Pendukung</Form.Label>
            <br />
            <Form.Label className={classes.text}>
              <Form.File id="exampleFormControlFile1" name="file" required accept=".png, .jpg, .jpeg, .zip, .doc, .docx, .pdf" onChange={e => setFile(e.target.files[0])} />
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

export default TugasTambah;

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
