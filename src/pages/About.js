import React from 'react';
import NavBar from '../components/NavBar';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, Typography } from '@mui/material';
import Footer from '../components/footer';
import ImgMediaCard from '../components/card';
import fussballpic from '../assets/img/fussball.png'
import chesspic from '../assets/img/chesspic.jpg'
import programmierpic from '../assets/img/prog.jpg'


function About() {

    return (
        <>
            <NavBar />
            <section className='hobbys'id="Hobbys">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} md={6} xl={4} className="d-flex justify-content-center">
                            <ImgMediaCard
                            image={fussballpic}
                            title='Fussball'
                            description='Ich spiele schon mein lebenlang Fussball. Es ist für mich der perfekte Ausgleich zum Alltag. Kopf freimachen und Energie ablassen.'
                            />
                        </Col>
                        <Col xs={12} md={6} xl={4} className="d-flex justify-content-center">
                            <ImgMediaCard
                            image={chesspic}
                            title='Schach'
                            description='Schach bedeutet mir viel und es erinnert mich gerne an die Zeit zurück, als ich in jungen Jahren meinen Vater herausgefordert habe.'
                            />
                        </Col>
                        <Col xs={12} md={6} xl={4} className="d-flex justify-content-center">
                            <ImgMediaCard
                            image={programmierpic}
                            title='Programmieren'
                            description='Mein neustes Hobby ist es zuhaus am Laptop ein paar Webseiten zu programmieren. Es macht extrem viel Spass die Seiten zu Designen.'
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer sx={{background: '#000'}}/></>
    );
}

export default About;
