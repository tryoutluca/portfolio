import React from 'react';
import NavBar from '../components/NavBar';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, Typography } from '@mui/material';
import Footer from '../components/footer';
import ImgMediaCard from '../components/card';
import fussballpic from '../assets/img/fussball.png';
import chesspic from '../assets/img/chesspic.jpg';
import programmierpic from '../assets/img/prog.jpg';
import reisepic from '../assets/img/reise1.jpg';
import CustomizedTimeline from '../components/timline';



function About() {

    return (
        <>
            <NavBar />
            <section className='hobbys'id="Hobbys">
                <Container>
                    <Row className='g-4'> 
                        <Col className='d-flex justify-content-center'>
                           <h1 className='display-1 wave-effect'>
                                {"Hobbys".split("").map((char, index) => (
                                    <span key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                                        {char}
                                    </span>
                                ))}
                            </h1>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xs={12} md={6} xl={3} className="d-flex justify-content-center">
                            <ImgMediaCard
                            image={fussballpic}
                            title='Fussball'
                            description='Ich spiele schon mein lebenlang Fussball. Es ist für mich der perfekte Ausgleich zum Alltag. Kopf freimachen und Energie ablassen.'
                            Popuptitle='Lionel Messi'
                            Popuptext=''
                            />
                        </Col>
                        <Col xs={12} md={6} xl={3} className="d-flex justify-content-center">
                            <ImgMediaCard
                            image={chesspic}
                            title='Schach'
                            description='Schach bedeutet mir viel und es erinnert mich gerne an die Zeit zurück, als ich in jungen Jahren meinen Vater herausgefordert habe.'
                            Popuptitle='Grandmaster'
                            Popuptext=''
                            />
                        </Col>
                        <Col xs={12} md={6} xl={3} className="d-flex justify-content-center">
                            <ImgMediaCard
                            image={programmierpic}
                            title='Programmieren'
                            description='Mein neustes Hobby ist es zuhaus am Laptop ein paar Webseiten zu programmieren. Es macht extrem viel Spass die Seiten zu Designen.'
                            Popuptitle='Full-Stack'
                            Popuptext='Momentan bin ich Skills mit Fokus auf das Frontend am erarbeiten. HTML und CSS liegen mir sehr gut, JavaScript habe ich noch einige defizite.
                            In Zukunft will ich mich auch dem Backend und Datenbanken widmen um ein Full-Stack Developer zu werden.'
                            />
                        </Col>
                        <Col xs={12} md={6} xl={3} className="d-flex justify-content-center">
                            <ImgMediaCard
                            image={reisepic}
                            title='Reisen'
                            description='Reisen ist etwas das mich am meisten fasziniert. Neue Kulturen, neue Menschen, neue Gewohnheiten und neue Rezepte, was gibt es besseres?'
                            Popuptitle='Abenteuer'
                            Popuptext='Auflistung der Reisprojekte'
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='karriere' id='karriere'>
                <Container>
                    <CustomizedTimeline/>
                </Container>
            </section>
            <Footer sx={{background: '#000'}}/></>
    );
}

export default About;
