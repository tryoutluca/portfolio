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


function About() {
    const hobbies = [
        {
          image: fussballpic,
          title: 'Fussball',
          description: 'Ich spiele schon mein Leben lang Fussball...',
          Popuptitle: 'Lionel Messi',
          Popuptext: '',
        },
        {
          image: chesspic,
          title: 'Schach',
          description: 'Für mich ist Schach das grandioseste Brettspiel der Welt.',
          Popuptitle: 'Grandmaster',
          Popuptext: '',
        },
        {
          image: programmierpic,
          title: 'Programmieren',
          description: 'Mein neustes Hobby ist Webseiten erstellen...',
          Popuptitle: 'Full-Stack',
          Popuptext: 'Momentan erarbeite ich mir Frontend-Skills...',
        },
        {
          image: reisepic,
          title: 'Reisen',
          description: 'Reisen fasziniert mich schon mein ganzes Leben.',
          Popuptitle: 'Abenteuer',
          Popuptext: 'Auflistung der Reiseprojekte',
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
                            <AnimatedCardWrapper delay={i * 0.2}>
                                <ImgMediaCard
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
