import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
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
    const { name, id } = useParams()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [komentar, setKomentar] = useState('')
    const [detail, setDetail] = useState(
        {
            tugas:
            {
                nama: '',
                deadline: '',
                slug: '',
                deskripsi: '',
                file: '',
                user: {
                    nama: '',
                }
            },
            komentar: [],
            submission: {},
            deadline: '',
            created_at: ''
        }
    )

    useEffect(() => {
        fetch('http://127.0.0.1:8000/tugas/show?slug=' + id)
            .then(response => response.json())
            .then(responseJson => {
                setDetail(responseJson)
            })
            .catch(e => console.log(e));
    }, [detail])

    const btnKomentar = (e) => {
        e.preventDefault()
        fetch('http://127.0.0.1:8000/tugas/komentar/store', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: user.id,
                slug: detail.tugas.slug,
                komentar: komentar
            })
        })
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    setKomentar('')
                }
            })
            .catch(e => console.log(e));
    }

    return (
        <div className={styles.container}>
            <Container>
                <Row>
                    <Col sm={1}>
                        <div className={styles.iconBookBookmark}>
                            <BiBookBookmark className={styles.icons} />
                        </div>
                    </Col>
                    <Col sm={8}>
                        <h2> {detail.tugas.nama ?? ''} </h2>
                        <p> {detail.tugas.user.nama} • {detail.created_at} </p>
                        <div className={styles.pointAndTime}>
                            <p> 100 points </p>
                            <p> Due {detail.deadline ?? ''} </p>
                        </div>

                        <hr />

                        <div className={styles.contentDetail}>
                            {detail.tugas.file != '' ? <a href={detail.tugas.file}>Download file</a> : null}
                            {detail.tugas.deskripsi ?? ''}
                        </div>

                        <hr />

                        <div className={styles.viewComment}>
                            <Row>
                                {
                                    detail.komentar.length > 0 ? detail.komentar.map(data => {
                                        return (
                                            <>

                                                <Col sm={1}>
                                                    <Image
                                                        src="https://picsum.photos/200/300"
                                                        className={styles.imagesProfile}
                                                        roundedCircle
                                                    />
                                                </Col>
                                                <Col sm={11}>
                                                    <p> {data.user.nama} </p>
                                                    <p> {data.komentar} </p>
                                                </Col></>
                                        )
                                    })
                                        : null
                                }
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
                                            required
                                            value={komentar}
                                            onChange={e => setKomentar(e.target.value)}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col sm={1}>
                                    <Button type="submit" className={styles.buttonSendComment} onClick={btnKomentar}>
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
