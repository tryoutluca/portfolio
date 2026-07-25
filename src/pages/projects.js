import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';
import AnimatedCardWrapper from '../components/animatedcardwrapper';
import './Projects.css';

const projectList = [
    {
        title: 'KI-Co-Analyst',
        description: 'Eigenentwickeltes Tool, das als KI-gestützter Co-Analyst bei Datenauswertungen unterstützt.',
        link: 'https://ki-co-analyst.vercel.app/',
        linkLabel: 'Zur Anwendung',
    },
    {
        title: 'CAS Agentic AI & Deep Learning',
        description: 'Weiterbildung (CAS) an der FHNW zu agentischen KI-Systemen und Deep Learning.',
        link: 'https://www.fhnw.ch/de/informatik/weiterbildung/angebot/weiterbildungen/cas-deep-learning',
        linkLabel: 'Zum Lehrgang',
    },
    {
        title: 'Implementierung Agentic AI bei der Pensionskasse SBB',
        description: 'Einführung und Umsetzung agentischer KI-Lösungen im Applikationsmanagement der Pensionskasse SBB.',
        link: null,
        linkLabel: null,
    },
];

function Projects() {
    return (
        <>
            <NavBar />
            <section className='project' id='projects'>
                <Container>
                    <Row className="justify-content-center">
                        {projectList.map((project, i) => (
                            <Col key={project.title} xs={12} md={6} xl={4} className="d-flex">
                                <AnimatedCardWrapper delay={i * 0.2}>
                                    <div className='project-card'>
                                        <h4>{project.title}</h4>
                                        <p>{project.description}</p>
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='project-link'
                                            >
                                                {project.linkLabel}
                                            </a>
                                        )}
                                    </div>
                                </AnimatedCardWrapper>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Projects;
