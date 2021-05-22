import React from "react";
import { createUseStyles } from "react-jss";
//components
import { CardListKelas } from "../../components";
//assets
import { Color } from "../../assets/color";
//icon
import { GiCoffeeCup, GiRobe } from "react-icons/gi";

function KelasTerbuka() {
  const styles = style();

  return (
    <div className={styles.container}>
      <CardListKelas title="Pemrograman Web" pengampu="Fikri Halim Ch" gambar="https://picsum.photos/200/300" deskripsi="pokonya bakal banyak gitu isi nya <br/> tapi bisa ga ya ada br gini"/> <br/>
      <CardListKelas title="Pemrograman Web" pengampu="Fikri Halim Ch" gambar="https://picsum.photos/200/300" deskripsi="pokonya bakal banyak gitu isi nya <br/> tapi bisa ga ya ada br gini"/> <br/>
      <CardListKelas title="Pemrograman Web" pengampu="Fikri Halim Ch" gambar="https://picsum.photos/200/300" deskripsi="pokonya bakal banyak gitu isi nya <br/> tapi bisa ga ya ada br gini"/> <br/>
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
