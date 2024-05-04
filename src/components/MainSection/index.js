import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button, Col, Form, Image } from "react-bootstrap";
import './style.css'
import vector from './../../assets/img/vector.png'

const MainSection = () => {
    return (
        <Container className="main-bg">
            <Row>
                <Col className="col-order">
                    <div className="heding-tx">Invest in everything</div>
                    <div className="regular-tx">Online platform to invest in stocks, derivatives, mutual funds, and more</div>
                    <div className="d-flex form-padding">
                        <Form className="box-align"> 
                            <Form.Group className="mb-3 f-position" controlId="formBasicEmail">
                                <span>+91</span>
                                <Form.Control type="email" placeholder="Enter your number" />
                            </Form.Group>
                        </Form>
                        <Button variant="primary register-btn">Register</Button>
                    </div>
                </Col>

                <Col className="img-align">
                    <Image alt="img" src={vector} />
                </Col>
            </Row>
        </Container>
    )
}

export default MainSection