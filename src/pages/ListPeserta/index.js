import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
//components
import { TextHeader, Orang, ValidasiOrang } from "../../components";
//assets
import { Color } from "../../assets/color";
//icon
import { GiCoffeeCup, GiRobe } from "react-icons/gi";
import { useParams } from 'react-router-dom'

function ListPeserta() {
  const styles = style();
  const { name } = useParams()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const [role, setRole] = useState('3')
  const [guru, setGuru] = useState([])
  const [asisten, setAsisten] = useState([])
  const [siswa, setSiswa] = useState([])
  const [permintaan, setPermintaan] = useState([])
  const [tipe, setTipe] = useState('1')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/kelas/tipe?slug=' + name)
      .then(response => response.json())
      .then(responseJson => {
        setTipe(responseJson)
      })
      .catch(e => console.log(e))

    fetch('http://127.0.0.1:8000/kelas/role?user=' + user.id + '&slug=' + name)
      .then(response => response.json())
      .then(responseJson => {
        setRole(responseJson.role)
      })
      .catch(e => console.log(e))

    fetch('http://127.0.0.1:8000/kelas/peserta?slug=' + name)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        setGuru(responseJson.guru)
        setAsisten(responseJson.asisten)
        setSiswa(responseJson.murid)
        setPermintaan(responseJson.pengajuan)
      })
      .catch(e => console.log(e));
  }, [guru, asisten, siswa])

  return (
    <div className={styles.container}>
      {
        tipe == '1' ? null :
          <>
            <TextHeader title="Permintaan Bergabung" />
            {
              permintaan.length > 0 ?
                permintaan.map(data => {
                  return (
                    <ValidasiOrang
                      key={data.id}
                      id={data.id}
                      nama={data.user.nama}
                      gambar={data.user.foto}
                      motivasi={data.essay}
                    />)
                })
                : null
            }
          </>
      }

      <TextHeader title="Guru " />
      {
        guru.length > 0 ? guru.map(data => {
          return <Orang key={data.id} roleId={data.id} nama={data.user.nama} user={user.id} role={role} gambar={data.user.foto} owner={data.id} />
        }) : null
      }

      <TextHeader title="Asisten" />
      {/* untuk asisten kosong */}
      { asisten.length > 0 ? null :
        <div className={styles.none}>
          <GiRobe className={styles.icon} />
          <text className={styles.text}>
            Tambah asisten untuk meringankan pundakmu
        </text>
        </div>
      }

      {
        asisten.length > 0 ? asisten.map(data => {
          return <Orang key={data.id} roleId={data.id} nama={data.user.nama} user={user.id} role={role} gambar={data.user.foto} />
        }) : null
      }

      <TextHeader title="Siswa" />
      {/* untuk siswa kosong */}
      {siswa.length > 0 ? null :
        <div className={styles.none}>
          <GiCoffeeCup className={styles.icon} />
          <text className={styles.text}>
            Sebaik baiknya ilmu adalah ilmu yang disebarluaskan
      </text>
        </div>
      }

      {
        siswa.length > 0 ? siswa.map(data => {
          return <Orang key={data.id} roleId={data.id} nama={data.user.nama} user={user.id} role={role} gambar={data.user.foto} />
        }) : null
      }
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
