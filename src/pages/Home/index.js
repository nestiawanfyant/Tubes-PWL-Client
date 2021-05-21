import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row } from "react-bootstrap";

//components
import { CardKelas } from "../../components";

// bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import { Color } from "../../assets/color";

// stylesheet
// import '../../assets/css/HomeCss/index.css'

const Home = () => {
  const classes = styles();

  return (
    <div className={classes.container}>
      <p className={classes.homeText}> Daftar Kelas </p>
      <div className={classes.flexCard}>
        <Link className={classes.textDecorationNone}>
          <CardKelas
            title="Pengembangan Web Lanjut"
            dosen="Fikri Halim Ch"
            gambar="https://picsum.photos/200/300"
            className={classes.cardStyle}
          />
        </Link>
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
  textDecorationNone: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
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
