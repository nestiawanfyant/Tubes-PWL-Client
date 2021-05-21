import React from "react";
import { createUseStyles } from "react-jss";

//assets
import { Color } from "../../assets/color";
import "../../assets/css/font.css";

const TextHeader = ({ title }) => {
  const classes = styles();
  return (
    <div className={classes.box}>
      <h4 className={classes.text}>{title}</h4>
    </div>
  );
};

export default TextHeader;

const styles = createUseStyles({
    box:{
        marginTop: 35,
        marginBottom: 30,
        borderBottomColor: Color.primary,
        borderBottom: "1px solid #F5F5F5",
    },
    text: {
        color: Color.primary,
        fontFamily: 'DM Sans',
        fontWeight: '600',
        letterSpacing: 2
    }
});
