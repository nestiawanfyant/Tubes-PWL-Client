import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
//components
import { CardListKelas } from "../../components";
//assets
import { Color } from "../../assets/color";
//icon
import { GiCoffeeCup, GiRobe } from "react-icons/gi";

function KelasTerbuka() {
  const styles = style();
  const [kelas, setKelas] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/kelas/terbuka')
      .then(response => response.json())
      .then(responseJson => {
        setKelas(responseJson)
      })
      .catch(e => console.log(e));
  }, [kelas])

  return (
    <div className={styles.container}>
      {
        kelas.length > 0 ?
          kelas.map(data => {
            return <CardListKelas key={data.id} title={data.nama} id={data.id} pengampu={data.user.nama} gambar="https://picsum.photos/200/300" deskripsi={data.deskripsi ?? ''} />
          }) :
          <h5>Tidak ada kelas terbuka</h5>
      }

    </div>
  );
}

export default KelasTerbuka;

const style = createUseStyles({
  container: {
    width: "73%",
    margin: "20px auto",
  },
  none: {
    // backgroundColor: Color.primary,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 50,
    color: Color.primary,
  },
  text: {
    color: Color.primary,
    fontSize: 20,
  },
});
