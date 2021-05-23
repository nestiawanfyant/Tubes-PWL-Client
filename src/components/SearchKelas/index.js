import React from "react";
import { createUseStyles } from "react-jss";

//assets
import { Color } from "../../assets/color";
import "../../assets/css/font.css";

const SearchKelas = () => {
  const classes = styles();
  return (
    <span>
      <input
        type="text"
        placeholder="Cari Judul Kelas"
        className={classes.box}
      />
      <button className={classes.button}>Cari</button>
    </span>
  );
};

export default SearchKelas;

const styles = createUseStyles({
  box: {
    width: 300,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 50,
    borderColor: Color.primary,
    border: "3px solid #E2E2E2",
    "&:hover": {
      borderColor: Color.primary,
      border: "3px solid #E2E2E2",
    },
    "&:focus": {
      borderColor: Color.s,
      border: "3px solid #E2E2E2",
    },
    "&:active": {
      borderColor: Color.primary,
      border: "3px solid #E2E2E2",
    },
  },
  button: {
      marginLeft: 15,
    paddingLeft: 10,
    color: Color.primary,
    fontWeight: 'bold',
    paddingRight: 10,
    borderRadius: 50,
    borderColor: Color.primary,
    border: "3px solid #E2E2E2",
    backgroundColor: Color.white
  },
});
