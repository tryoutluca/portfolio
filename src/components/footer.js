import { Container, Row, Col } from "react-bootstrap";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center hide-on-small">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <a href='https://www.linkedin.com/in/luca-luedi/' target="_blank" rel="noopener noreferrer">
                <SiLinkedin className='white-icon-footer'/>
            </a>
            <a href='https://github.com/tryoutluca' target="_blank" rel="noopener noreferrer">
                <FaGithub className='white-icon-footer'/>
            </a>
            <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                <FaInstagram className='white-icon-footer'/>
            </a>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}