import React from "react";
import {createUseStyles} from 'react-jss';
import { TextHeader, Orang } from "../../components";

function ListPeserta() {

  const styles = style();
  
  return (
    <div className={ styles.container }>
      <TextHeader title="Teachers" className={styles.teacher} />
      <Orang nama="Fikri Halim Ch" gambar="https://picsum.photos/200/300" />
      <Orang nama="Bukan Fikri" gambar="https://picsum.photos/200/300" />
      <Orang nama="Pura pura fikri" gambar="https://picsum.photos/200/300" />

      <TextHeader title="Asisten" className={styles.asisten} />
      <Orang nama="Fikri Halim Ch" gambar="https://picsum.photos/200/300" />
      <Orang nama="Bukan Fikri" gambar="https://picsum.photos/200/300" />
      <Orang nama="Pura pura fikri" gambar="https://picsum.photos/200/300" />
    </div>
  );
}

export default ListPeserta;

const style = createUseStyles({
  container: {
    width: "73%",
    margin: "20px auto",
  },
});
