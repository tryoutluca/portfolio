import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo-text1.png';
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link 
              as={HashLink} 
              to="/" 
              className={activeLink === "/" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("/")}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              to="/about" 
              className={activeLink === "/about" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("/about")}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={HashLink} 
              to="/projects" 
              className={activeLink === "/projects" ? "active navbar-link" : "navbar-link"}
              onClick={() => onUpdateActiveLink("/projects")}
            >
              Projects
            </Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/luca-luedi/' target="_blank" rel="noopener noreferrer">
                    <SiLinkedin className='white-icon'/>
                </a>
                <a href='https://github.com/tryoutluca' target="_blank" rel="noopener noreferrer">
                    <FaGithub className='white-icon'/>
                </a>
                <a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer">
                    <FaInstagram className='white-icon'/>
                </a>
            </div>
              <HashLink to='/contact'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBar;