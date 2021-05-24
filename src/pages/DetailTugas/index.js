import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { createUseStyles } from "react-jss";
// bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Button, Col, Container, Form, Card, Image } from "react-bootstrap";
//assets
import { Color } from "../../assets/color";
import { BiBookBookmark } from "react-icons/bi";
import { BsTextCenter } from "react-icons/bs";
import { BiSend } from "react-icons/bi";


const DetalTugas = () => {

    const styles = style();

    return (
        <div className={styles.container}>
            <Container>
                <Row>
                    <Col sm={1}>
                        <div className={ styles.iconBookBookmark }>
                            <BiBookBookmark className={ styles.icons } />
                        </div>
                    </Col>
                    <Col sm={8}>
                        <h2> UAS SOCIO, Senin 24 Mei 2021 </h2>
                        <p> mohamad idris • 7:33 AM </p>
                        <div className={ styles.pointAndTime }>
                            <p> 100 points </p>
                            <p> Due 9:35 AM </p> 
                        </div>

                        <hr />

                        <div className={styles.contentDetail}>
                            ATURAN UJIAN UAS SOCIO
                            Ujian bersifat individu dan closed book, internet maupun gadget
                            Waktu ujian: Senin 24 Mei 2021 Pukul 07.30 WIB s/d Pukul 09.10 WIB
                            Setiap mahasiswa wajib mengikuti aturan ujian yang telah ditentukan
                            Apabila ada indikasi plagiarisme antara 2 orang atau lebih, maka keseluruhan mahasiswa yang terdeteksi plagiarisme akan mendapat nilai UAS = 0
                            Keterlambatan submit Google Form dikenai pengurangan Poin (dikurangi 5 poin per menit keterlambatan). 
                            Kesalahan penulisan Nama dan NIM mengakibatkan pekerjaan anda tidak di nilai (Sesuaikan penulisan nama dan NIM anda dengan yang tertera di siakad.itera.ac.id)
                            Peserta wajib hadir di Zoom 10 menit sebelum pelaksanaan ujian (link di berikan 15 Menit sebelum ujian berlangsung).
                            Peserta wajib join ke breakout room sesuai dengan kelas dan pengampu masing-masing
                            Format penamaan akun Zoom pada saat ujian: Kelas_NamaDepan_NIM
                            Peserta wajib menyalakan kamera dan mikrofon di laptop atau gadget, serta wajib menggunakan baju berkerah.
                            Peserta yang akan meninggalkan lokasi ujian pada saat ujian berlangsung harus meminta izin terlebih dahulu
                            Peserta yang telah selesai mengerjakan UAS perlu melapor via personal chat di Zoom kepada host
                        </div>

                        <hr />

                        <div className={styles.viewComment}>
                        <Row>
                            <Col sm={1}>
                            <Image
                                src="https://picsum.photos/200/300"
                                className={styles.imagesProfile}
                                roundedCircle
                                />
                            </Col>
                            <Col sm={11}>
                                <p> Nestiawan ferdiyanto </p>
                                <p> kan meninggalkan lokasi ujian pada saat ujian berlangsung harus meminta izin terlebih dahulu
                            Peserta yang telah selesai mengerjakan UAS perlu melapor via personal chat di Zoom kepada host </p>
                            </Col>
                        </Row>
                        </div>

                        <Form className={styles.formInsertCode}>
                            <Row>
                                <Col sm={11}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                    className={styles.inputComment}
                                    type="text"
                                    placeholder="Tambah komentar"
                                    />
                                </Form.Group>
                                </Col>
                                <Col sm={1}>
                                <Button type="submit" className={styles.buttonSendComment}>
                                    <BiSend className={styles.iconBtnSendComment} />
                                </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Your Work</Card.Title>
                                <Card.Text>
                                    <Form className={styles.formInsertCode}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Control
                                            className={styles.inputComment}
                                            type="file"
                                            placeholder="Submission Tugas"
                                            />
                                        </Form.Group>
                                        <Button type="submit" className={styles.buttonSendComment}>
                                            kumpul Tugas
                                        </Button>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetalTugas;

const style = createUseStyles({
    container: {
        width: "94%",
        margin: "2.5rem auto",
    },
    iconBookBookmark: {
        width: 50,
        height: 50,
        backgroundColor: Color.primary,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textCenter: 'center',    
        alignItems: 'center',
        borderRadius: 100,
    },
    icons: {
        color: Color.white,
        fontSize: 25,
    },
    pointAndTime: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonSendComment: {
        width: '100%',
    },
    imagesProfile: {
        width: 45,
        height: 45,
    },
    viewComment: {
        marginBottom: 20,
    }
});
