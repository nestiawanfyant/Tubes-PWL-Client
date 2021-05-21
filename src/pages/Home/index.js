import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row } from "react-bootstrap";
// import '.././App.css';

//components
import { CardKelas } from "../../components";

// bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { createUseStyles } from "react-jss";

// stylesheet
// import '../../assets/css/HomeCss/index.css'

const Home = () => {
  const classes = styles();

  return (
    <div>
      <p className={classes.homeText}> Home </p>
      <Row className={classes.row}>
        <CardKelas
          title="Pengembangan Web Lanjut"
          dosen="Fikri Halim Ch"
          gambar="https://picsum.photos/200/300"
        />
        <CardKelas
          title="Pengembangan Web Lanjut"
          dosen="Fikri Halim Ch"
          gambar="https://picsum.photos/200/300"
        />
        <CardKelas
          title="Pengembangan Web Lanjut"
          dosen="Fikri Halim Ch"
          gambar="https://picsum.photos/200/300"
        />
        <CardKelas
          title="Pengembangan Web Lanjut"
          dosen="Fikri Halim Ch"
          gambar="https://picsum.photos/200/300"
        />
        <CardKelas
          title="Pengembangan Web Lanjut"
          dosen="Fikri Halim Ch"
          gambar="https://picsum.photos/200/300"
        />
        <CardKelas
          title="Pengembangan Web Lanjut"
          dosen="Fikri Halim Ch"
          gambar="https://picsum.photos/200/300"
        />
      </Row>
    </div>
  );
};

export default Home;

const styles = createUseStyles({
  homeText: {
    fontSize: 40,
    color: "#004d40",
  },
  row: {
    padding: 30,
    justifyContent: "space-between",
  },
});
