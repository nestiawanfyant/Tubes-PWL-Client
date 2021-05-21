import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Button, Modal, Form, Row, Col, Card } from 'react-bootstrap';

// stylesheet
import { Color } from "../../assets/color";
import {createUseStyles} from 'react-jss';
import { BiPlus } from 'react-icons/bi';
import "../../assets/css/font.css";

// icon
import { BiBookBookmark, BiDotsVerticalRounded, BiSend } from 'react-icons/bi';

// component
import { CardListMateri } from "../../components"

const ViewCard = () => {

    const styles = style();

    return(
        <div className={ (styles.ViewContainer) }>
            <Card className={styles.cardCover}>
                <Card.Img className={ styles.imgCardCover } src="https://picsum.photos/200/300" alt="Card image" />
                <Card.ImgOverlay className={styles.imgOVerly}>
                    <Card.Title className={ styles.textTitle }>Metodologi Penelitian</Card.Title>
                    <Card.Text className={ styles.textContent }>
                        Jumat, 14.00 - 15.40 WIB, Semester Genap T.A. 2020/2021
                    </Card.Text>
                    {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
                </Card.ImgOverlay>
            </Card>

            {/* content */}

            <Row>
                <Col sm={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title className={ styles.titleLeftCard }> Upcoming </Card.Title>
                            <Card.Text className={ styles.textLeftCard }> Woohoo, no work due soon! </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={9}>
                    
                    <CardListMateri /> <br />
                    <CardListMateri /> <br />
                    <CardListMateri /> <br />
                    <CardListMateri /> <br />

                </Col>
            </Row>
        </div>
    )
}

export default ViewCard;

const style = createUseStyles({
    ViewContainer:{
        width: "73%",
        margin: "0 auto",
    },
    ViewCard: {
        marginTop: 10,
        marginBottom: 10, 
    },
    cardCover: {
        marginTop: 25,
        marginBottom: 25, 
        borderRadius: 10,
        border: 'none',
        background: Color.blackDoff,
    },
    imgCardCover: {
        borderRadius: 10,
        height: 260,
        objectFit: 'cover',
        opacity: .4,
        color: Color.White,
    },
    textTitle: {
        color: Color.white,
        fontFamily: 'DM Sans',
        fontSize: 32,
        fontWeight: '500',
    },
    imgOVerly: {
        padding: 40,
    },
    textContent: {
        color: Color.white,
        fontFamily: 'DM Sans',
        fontSize: 16,
    },
    titleLeftCard:{
        fontFamily: 'DM Sans',
        fontSize: 14,
        fontWeight: '500',
        color: Color.blackLight
    },
    textLeftCard:{
        fontSize: 13,
        fontFamily: 'DM Sans',
        color: Color.blackLight
    },
    cardContenHeader: {
        backgroundColor: 'transparent',
        paddingTop: 7,
        paddingBottom: 9,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    nameCardTitle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 7,
    },
    linkheaderCard:{
        textDecoration: 'none',
        transition: "all .2s",
        '&:hover': {
            textDecoration: 'none',
            backgroundColor: Color.softGray,
        }
    },
    iconCardTitle: {
        // marginTop: 5,
        marginRight: 5, 
        fontSize: 37,
        backgroundColor:Color.secondaryPrimary,
        padding: 6,
        borderRadius: 100, 
        color: Color.white
    },
    textCardTitle: {
        marginTop: 8,
        marginLeft: 8,
        fontFamily: 'DM Sans',
        fontSize: 14.4,
        color: Color.blackDoff,
        letterSpacing: .4,
        fontWeight: '600'
    },
    DotsVerticalRounded: {
        marginTop: 10,
        fontSize: 25,
        display: 'flex',
    },
    textContentCard:{ 
        fontSize: 14,
        fontFamily: 'DM Sans',
    },
    imagesProfile:{
        width: 35,
        height: 35
    },
    formInsertCode: {
        marginBottom: 0,
        paddingBottom: 0
    },
    footerCard: {
        marginBottom: 0,
        paddingBottom: 0,
        backgroundColor: 'transparent',
    },
    inputComment: {
        borderRadius: 35,
        fontSize: 14,
        fontFamily: 'DM Sans',
    },
    buttonSendComment: {
        display: 'block',
        backgroundColor: 'transparent',
        border: 'none',
        Color: Color.blackDoff,
        width: 0,
        height: 0,
        '&:hover': {
            backgroundColor: 'transparent',
            border: 'none',
        },
        '&:active': {
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
        },
        '&:focus': {
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
        },
        '&:target': {
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
        },
        '&:visited': {
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
        }
    },
    iconBtnSendComment: {
        color: Color.blackDoff,
        fontSize: 23,
        marginTop: '-10px',
        marginRight: 30,
        position: 'relative',
        right: 20,
    }
});