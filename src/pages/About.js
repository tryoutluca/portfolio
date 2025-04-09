import React, { useEffect, useState } from 'react';
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
import AnimatedCardWrapper from '../components/animatedcardwrapper'
import culturepic from '../assets/img/culturepic.jpg'


function About() {
    const hobbies = [
        {
          image: fussballpic,
          title: 'Fussball',
          description: 'Ich spiele schon mein Leben lang Fussball. Es ist der perfekte Ausgleich zum Alltag.',
          Popuptitle: 'Lionel Messi',
          Popuptext: 'Zuerst war es Thierry Henry mit Fernando Torres und Luca Toni. Dann nur noch Lionel Messi. Sein Weltmeistertitel im Jahr 2022 war für mich ein sehr emotionaler Moment',
        },
        {
          image: chesspic,
          title: 'Schach',
          description: 'Schach ist eines der vielfältigsten Spiele der Welt. Jedes Spiel verläuft anders.',
          Popuptitle: 'Grandmaster',
          Popuptext: 'Ja, das Ziel, einmal als Grandmaster an einem internationalen Turnier aufzulaufen, hatte ich schon früh. Leider konnte ich mich dem Spiel nie in einen kompititiven Modus begeben, ausser natürlich gegen Freunde und Familie.',
        },
        {
          image: programmierpic,
          title: 'Programmieren',
          description: 'Mein neuestes Hobby: Webseiten erstellen und Programmiersprachen lernen.',
          Popuptitle: 'Full-Stack',
          Popuptext: 'Momentan erarbeite ich mir Frontend-Skills mit React (wie auch diese Website aufgebaut ist) und vor allem dann Angular. Ich will mein Wisse, nach dem erlernen des Frontends im Backend vertiefen. Datenbanken und Server sind auch auf dem Lehrplan, damit ich mal meine eigene Software bauen kann.',
        },
        {
          image: reisepic,
          title: 'Reisen',
          description: 'Reisen und die verschiedenen Kulturen faszinieren mich schon lange.',
          Popuptitle: 'Abenteuer',
          Popuptext: 'Medellin - Bogota - Rio de Janeiro - Buenos Aires - Rosario\nHamburg - Kopenhagen - Stockholm - Oslo - Nordkapp\nAddis Abeba - Nairobi - Mombasa/Sansibar - Kapstadt',
        },
      ];

    return (
        <>
            <NavBar />
            <section className='karriere' id='karriere'>
                <Container>
                    <CustomizedTimeline/>
                </Container>
            </section>
            <section className='Skills' id='skills'>
                <Container>
                    
                </Container>
            </section>
            <section className='hobbys'id="Hobbys">
                <Container>
                    <Row className="justify-content-center">
                        {hobbies.map((card, i) => (
                            <Col
                            key={i}
                            xs={12}
                            md={6}
                            xl={3}
                            className="d-flex justify-content-center"
                            >
                            <AnimatedCardWrapper delay={i * 0.2} className='d-flex justify-content-center'>
                                <ImgMediaCard className='hovercard'
                                image={card.image}
                                title={card.title}
                                description={card.description}
                                Popuptitle={card.Popuptitle}
                                Popuptext={card.Popuptext}
                                />
                            </AnimatedCardWrapper>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <Footer sx={{background: '#000'}}/></>
    );
}

export default About;
