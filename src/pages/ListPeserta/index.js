import React from "react";
import { createUseStyles } from "react-jss";
import { TextHeader, Orang, ValidasiOrang } from "../../components";
import { Color } from "../../assets/color";
import { GiCoffeeCup, GiRobe } from "react-icons/gi";

function ListPeserta() {
  const styles = style();

  return (
    <div className={styles.container}>
      <TextHeader title="Permintaan Bergabung" />
      <ValidasiOrang
        nama="Fikri Halim Ch"
        gambar="https://picsum.photos/200/300"
        motivasi="cita citaku bukan cita citamu"
      />
      <ValidasiOrang
        nama="Bukan Fikri"
        gambar="https://picsum.photos/200/300"
        motivasi="cita citaku bukan cita citamu"
      />
      <ValidasiOrang
        nama="Pura pura fikri"
        gambar="https://picsum.photos/200/300"
        motivasi="cita citaku bukan cita citamu"
      />

      <TextHeader title="Guru " />
      <Orang nama="Fikri Halim Ch" gambar="https://picsum.photos/200/300" />
      <Orang nama="Bukan Fikri" gambar="https://picsum.photos/200/300" />
      <Orang nama="Pura pura fikri" gambar="https://picsum.photos/200/300" />

      <TextHeader title="Asisten" />
      {/* untuk asisten kosong */}
      <div className={styles.none}>
        <GiRobe className={styles.icon} />
        <text className={styles.text}>
          Tambah asisten untuk meringankan pundakmu
        </text>
      </div>
      <Orang nama="Fikri Halim Ch" gambar="https://picsum.photos/200/300" />
      <Orang nama="Bukan Fikri" gambar="https://picsum.photos/200/300" />
      <Orang nama="Pura pura fikri" gambar="https://picsum.photos/200/300" />

      <TextHeader title="Siswa" />
      {/* untuk siswa kosong */}
      <div className={styles.none}>
        <GiCoffeeCup className={styles.icon} />
        <text className={styles.text}>
          Sebaik baiknya ilmu adalah ilmu yang disebarluaskan
        </text>
      </div>
      <Orang
        nama="Fikri Halim Ch"
        gambar="https://picsum.photos/200/300"
        type="validasi"
      />
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
