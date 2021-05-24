import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
//datetime picker
import DateMomentUtils from "@date-io/moment";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";

//bootstra
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { createUseStyles } from "react-jss";
//assets
import { Color } from "../../assets/color";
//components
import { CardKelas } from "../../components";
//icon
import { FiFileText, FiX } from "react-icons/fi";

const NavKelas = () => {
  const classes = styles();
  return (
    <ul className={classes.ulnavigation}>
      <li className={classes.liNavigationClass}>
        <Link
          to={"materi"}
          className={classes.linkNavigationTextClass}
        >
          Materi
        </Link>
      </li>
      <li className={classes.liNavigationClass}>
        <Link
          to={"/detailTugas"}
          className={classes.linkNavigationTextClass}
        >
          Tugas
        </Link>
      </li>
      <li className={classes.liNavigationClass}>
        <Link
          to={"forum"}
          className={classes.linkNavigationTextClass}
        >
          Forum
        </Link>
      </li>
      <li className={classes.liNavigationClass}>
        <Link to={"peserta"} className={classes.linkNavigationTextClass}>
          People
        </Link>
      </li>
    </ul>
  );
};

export default NavKelas;

const styles = createUseStyles({
  ulnavigation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ulnavigationClass: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  liNavigation: {
    listStyle: "none",
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  liNavigationClass: {
    listStyle: "none",
    marginTop: 10,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  linkNavigationTextClass: {
    color: Color.blackDoff,
    fontFamily: "DM Sans",
    marginBottom: 0,
    "&:hover": {
      textDecoration: "none",
      color: Color.primary,
      borderBottom: "2px solid" + Color.primary,
      paddingBottom: 23,
    },
  },
});
