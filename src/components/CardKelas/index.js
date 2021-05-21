import React from "react";

import { Image } from "react-bootstrap";

import "./CardKelas.css";
import { createUseStyles } from "react-jss";
import { Color } from "../../assets/color";
import { Mola } from "../../assets/image";
import { BiMessageAdd, BiMessageDots, BiSmile } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import "../../assets/css/font.css";

const CardKelas = ({ title, dosen, gambar }) => {
  const classes = styles();
  return (
      <div className={classes.cardContainer}>
        <div className={classes.cardHeader}>
          <div className={classes.box1}>
            <div className={classes.titleHeader}>Pemrograman Web Lanjut</div>
            <div className={classes.time}>Sabtu 14:00 - 16:00 </div>
            <div className={classes.textHeader}>Fikri Halim ch</div>
          </div>
          <div className={classes.box2}>
            <FiSettings className={classes.iconHeader} />
            {/* <img src={Mola} alt="kucing"> */}
            <div className={classes.imageHeader}></div>
          </div>
        </div>
        <div className={classes.cardBody}>
          {/* <ul className={classes.listBody}>
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
  container: {
    width: '94%',
    margin: '0 auto',
  },
  cardContainer: {
    overflow: "hidden",
    maxWidth: 310,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    border: '1px solid #F5F5F5',
    boxShadow: '3px 12px 16px -4px rgba(235,235,235,0.44)',
  },
  cardHeader: {
    backgroundColor: Color.primary,
    height: 'auto',
    padding: 10,
    display: "flex",
  },
  box1: {
    display: "flex",
    flexDirection: "column",
    height: 'auto',
    marginRight: 10,
  },
  box2: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
    flex: 1,
  },
  titleHeader: {
    fontSize: 21,
    color: Color.white,
    textOverflow: 'ellipsis',
    fontFamily: 'DM Sans',
  },
  textHeader: {
    fontSize: 14,
    color: Color.white,
    fontFamily: 'DM Sans',
  },
  time: {
    fontSize: 14,
    fontFamily: 'DM Sans',
    color: Color.white,
  },
  imageHeader: {
    width: 60,
    height: 60,
    backgroundColor: Color.blackDoff,
    borderRadius: 50,
    borderWidth: 3,
    position: "relative",
    top: "50%",
  },
  iconHeader: {
    // flex: 1,
    alignSelf: "flex-end",
    fontSize: 19,
    color: Color.white,
    marginTop: 7,
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
    // backgroundColor: Color.secondary,
    height: 50,
    display: "flex",
    justifyContent: "flex-end",
    aligItems: "stretch",
    borderTop: '1px solid #f5f5f5'
  },
  iconFooter: {
    marginRight: 20,
    color: Color.blackDoff,
    alignSelf: "center",
    fontSize: 25,
  },
});
