import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
// bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Button } from "react-bootstrap";
//assets
import { Color } from "../../assets/color";
//components
import { CardKelas } from "../../components";
// pages
import { ViewCard } from "../index";

const Home = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <p className={classes.homeText}> Daftar Kelas </p>
      <div className={classes.flexCard}>
        <CardKelas
          title="Pengembangan Web Lanjut"
          dosen="Fikri Halim Ch"
          gambar="https://picsum.photos/200/300"
          className={classes.cardStyle}
        />
      </div>
    </div>
  );
};

export default Home;

const styles = createUseStyles({
  container: {
    width: "94%",
    margin: "0 auto",
  },
  homeText: {
    fontSize: 26,
    color: Color.blackDoff,
    marginTop: 10,
    marginLeft: 10,
  },
  flexCard: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
  },
  cardStyle: {
    marginLeft: 10,
    marginRight: 10,
  },
});
