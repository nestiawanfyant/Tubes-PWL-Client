import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
//bootstra
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, container, Card, Image } from "react-bootstrap";
import { createUseStyles } from "react-jss";
//assets
import { Color } from "../../assets/color";
//components
import { CardKelas } from "../../components";
//pages
import { ViewCard } from "../index";

const Profile = () => {
  const [validated, setValidated] = useState(false);

  const styles = style  ();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className={styles.container}>
      <Card className={styles.cardCover}>
        <Card.Img
          className={styles.imgCardCover}
          src="https://picsum.photos/200/300"
          alt="Card image"
        />
        <Card.ImgOverlay className={styles.imgOVerly}>
          <Card.Title className={styles.textTitle}>Nazla Andintya Wijaya</Card.Title>
          <Card.Text className={styles.textContent}>
            Bandar Lampung - Lampung
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <Image
          src="https://picsum.photos/200/300"
          className={styles.imagesProfile}
          roundedCircle
        />

    <div className={styles.deskripsi}>
      <h2> Deskripsi </h2> 
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
        type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
        passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p> 
    </div>

    </div>
  );
};

export default Profile;

const style = createUseStyles({
  container:{ 
    width: '94%',
    margin: '20px auto'
  },
  imagesProfile:{
    width: 120,
    height: 120,
    position: 'relative',
    top: "-90px",
    left: "30px",
  },
  text: {
    color: Color.primary,
    fontWeight: 'bold',
  },
  cardCover: {
    marginTop: 25,
    marginBottom: 25,
    borderRadius: 10,
    border: "none",
    background: Color.blackDoff,
  },
  imgCardCover: {
    borderRadius: 10,
    height: 260,
    objectFit: "cover",
    opacity: 0.4,
    color: Color.White,
  },
  textTitle: {
    color: Color.white,
    fontFamily: "DM Sans",
    fontSize: 32,
    fontWeight: "500",
  },
  imgOVerly: {
    padding: 40,
  },
  textContent: {
    color: Color.white,
    fontFamily: "DM Sans",
    fontSize: 16,
  },
});
