import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

//bootstrap
import { Image, Popover } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

// assets
import "./CardKelas.css";
import { Color } from "../../assets/color";
import "../../assets/css/font.css";

// icon
import { BiMessageAdd, BiMessageDots, BiSmile } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";

const CardKelas = ({ title, dosen, gambar }) => {
  const classes = styles();
  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardHeader}>
        <div className={classes.box1}>
          <Link to={"kelas/metopen/materi"} className={classes.textDecorationNone}>
            <div className={classes.titleHeader}>Pemrograman Web Lanjut</div>
            <div className={classes.time}>Sabtu 14:00 - 16:00 </div>
            <div className={classes.textHeader}>Fikri Halim ch</div>
          </Link>
        </div>
        <div className={classes.box2}>
          <OverlayTrigger
            trigger="click"
            key="left"
            placement="left"
            overlay={
              //   <Popover id={`popover-positioned-${placement}`}>
              <Popover id="popover-positioned-left">
                <Popover.Content>
                  <Link className={classes.pop}>Hapus Kelas</Link>
                </Popover.Content>
                <Popover.Content>
                  <Link className={classes.pop}>Edit Kelas</Link>
                </Popover.Content>
                <Popover.Content>
                  <Link className={classes.pop}>Keluar Kelas</Link>
                </Popover.Content>
              </Popover>
            }
          >
            <FiSettings className={classes.iconHeader} />
          </OverlayTrigger>

          {/* <img src={Mola} alt="kucing"> */}
          <Image src={gambar} alt="kucing" className={classes.imageHeader} />
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
    width: "94%",
    margin: "0 auto",
  },
  cardContainer: {
    overflow: "hidden",
    flexDirection: "column",
    maxWidth: 296,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    border: "1px solid #F5F5F5",
    boxShadow: "3px 12px 16px -4px rgba(235,235,235,0.44)",
    marginTop: 20,
  },
  cardHeader: {
    backgroundColor: Color.primary,
    height: "auto",
    padding: 10,
    display: "flex",
  },
  box1: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
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
    textOverflow: "ellipsis",
    fontFamily: "DM Sans",
  },
  textHeader: {
    fontSize: 14,
    color: Color.white,
    fontFamily: "DM Sans",
  },
  time: {
    fontSize: 14,
    fontFamily: "DM Sans",
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
    "&:hover": {
      cursor: "pointer",
    },
  },
  homeText: {
    fontSize: 40,
    color: Color.primary,
  },
  textDecorationNone: {
    textDecoration: "none",
    "&:hover": {
      textDecorationColor: Color.white,
    },
  },  
  pop: {
    fontSize: 15,
    color: Color.primary,
  },
  cardBody: {
    padding: 20,
    borderColor: Color.secondary,
    // border: "0.1px solid #000000",
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
    borderTop: "1px solid #f5f5f5",
  },
  iconFooter: {
    marginRight: 20,
    color: Color.blackDoff,
    alignSelf: "center",
    fontSize: 25,
  },
});
