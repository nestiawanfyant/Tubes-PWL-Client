import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
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
  const history = useHistory();
  const [kelas, setKelas] = useState([])
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  useEffect(() => {
    const isLogin = () => localStorage.getItem('token') ? null : history.replace('/login')
    isLogin()

    fetch('http://127.0.0.1:8000/kelas/list?' + 'id=' + user.id)
      .then(response => response.json())
      .then(responseJson => {
        setKelas(responseJson)
      })
      .catch(e => console.log(e));
  }, [kelas])

  return (
    <div className={classes.container}>
      <p className={classes.homeText}> Daftar Kelas </p>
      <div className={classes.flexCard}>
<<<<<<< HEAD
        <CardKelas
          title="Pengembangan Web Lanjut"
          dosen="Fikri Halim Ch"
          gambar="https://picsum.photos/200/300"
          className={classes.cardStyle}
        />
        <CardKelas
          title="Pengembangan Web Lanjut"
          dosen="Fikri Halim Ch"
          gambar="https://picsum.photos/200/300"
          className={classes.cardStyle}
        />
        <CardKelas
          title="Pengembangan Web Lanjut"
          dosen="Fikri Halim Ch"
          gambar="https://picsum.photos/200/300"
          className={classes.cardStyle}
        />
        <CardKelas
          title="Pengembangan Web Lanjut"
          dosen="Fikri Halim Ch"
          gambar="https://picsum.photos/200/300"
          className={classes.cardStyle}
        />
        <CardKelas
          title="Pengembangan Web Lanjut"
          dosen="Fikri Halim Ch"
          gambar="https://picsum.photos/200/300"
          className={classes.cardStyle}
        />
=======
        {
          kelas.length > 0 ?
            kelas.map((value) => {
              return <CardKelas
                title={value.kelas.nama}
                dosen={value.kelas.user.nama}
                deskripsi={value.kelas.deskripsi}
                gambar="https://picsum.photos/200/300"
                link={value.kelas.slug}
                className={classes.cardStyle}
              />
            }) :
            // STYLE TIDAK ADA KELAS
            <h2>takde kelas</h2>
        }

>>>>>>> b839f050c6325793cf098cac989fd5f640f5a1ef
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
