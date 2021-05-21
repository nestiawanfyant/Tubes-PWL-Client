import React from "react";

import { Image } from "react-bootstrap";

import "./CardKelas.css";
import { createUseStyles } from "react-jss";
import { Color } from "../../assets/color";
import { Mola } from "../../assets/image";
import { BiMessageAdd, BiMessageDots, BiSmile } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const CardKelas = ({ title, dosen, gambar }) => {
  const classes = styles();
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardHeader}>
        <div className={classes.box1}>
          <div className={classes.titleHeader}>{title}</div>
          <div className={classes.textHeader}>{dosen}</div>
        </div>
        <div className={classes.box2}>
          <FiSettings className={classes.iconHeader} />
          {/* <img src={Mola} alt="kucing"> */}
          <Image src={gambar} className={classes.imageHeader} roundedCircle />
          {/* <div className={classes.imageHeader}></div> */}
        </div>
      </div>
      <div className={classes.cardBody}>
        {/* kalau ada tugas 
        <ul className={classes.listBody}>
          <li>Tugas 1 - HTML Dasar</li>
          <li>Tugas 2 - CSS Dasar</li>
          <li>Tugas 1 - HTML Dasar</li>
          <li>Tugas 2 - CSS Dasar</li>
          <li>Tugas 1 - HTML Dasar</li>
          <li>Tugas 2 - CSS Dasar</li>
        </ul> */}
        {/* kalau ga ada Tugas */}
        <div className={classes.textBody}>Silahkan tidur, tidak ada tugas</div>
        <div className={classes.textBody}>
          <BiSmile className={classes.iconBody} />
        </div>
      </div>
      <div className={classes.cardFooter}>
        <BiMessageAdd className={classes.iconFooter} />
        <BiMessageDots className={classes.iconFooter} />
      </div>
    </div>
  );
};

export default CardKelas;

const styles = createUseStyles({
  cardContainer: {
    overflow: "hidden",
    maxWidth: 300,
    marginBottom: 30,
    borderWidth: 3,
    borderRadius: 10,
    boxShadow: "0px 10px 15px -10px rgba(0,0,0,0.21)",
    // boxShadow: "0px 13px 20px -1px rgba(0,0,0,0.22)",
  },
  cardHeader: {
    backgroundColor: Color.primary,
    height: 100,
    padding: 10,
    display: "flex",
  },
  box1: {
    display: "flex",
    flexDirection: "column",
    flex: 3,
  },
  box2: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    flex: 1,
  },
  titleHeader: {
    fontSize: 22,
    color: Color.white,
    textOverflow: "ellipsis",
  },
  textHeader: {
    fontSize: 15,
    color: Color.white,
  },
  imageHeader: {
    width: 80,
    height: 80,
    backgroundColor: Color.black,
    borderRadius: 50,
    borderWidth: 3,
    position: "absolute",
    top: 40,
  },
  iconHeader: {
    // flex: 1,
    alignSelf: "flex-end",
    fontSize: 25,
    color: Color.white,
  },
  homeText: {
    fontSize: 40,
    color: Color.primary,
  },
  cardBody: {
    padding: 20,
    borderColor: Color.secondary,
    border: "0.1px solid #000000",
  },
  listBody: {
    marginLeft: -15,
  },
  textBody: {
    fontSize: 15,
    fontWeight: "bold",
    color: Color.primary,
    textAlign: "center",
    marginTop: 20,
  },
  iconBody: {
    marginRight: 20,
    marginBottom: 20,
    color: Color.primary,
    alignSelf: "center",
    fontSize: 50,
  },
  cardFooter: {
    backgroundColor: Color.secondary,
    height: 50,
    display: "flex",
    justifyContent: "flex-end",
    aligItems: "stretch",
  },
  iconFooter: {
    marginRight: 20,
    color: Color.white,
    alignSelf: "center",
    fontSize: 25,
  },
});
