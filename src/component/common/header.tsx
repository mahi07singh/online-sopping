import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Styles from '../../styles/common/header.module.css';
import { useState } from 'react';
import classnames from 'classnames';

const Header = () => {
  // State to track the expansion of the navbar
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // Function to toggle the expanded state of the navbar
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  // Function to collapse the navbar
  const handleClose = () => {
    setExpanded(false);
  };
  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className=""
      style={{ backgroundColor: '#ffbd59' }}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={`${process.env.PUBLIC_URL}/favicon.png`} // Public folder se image access
            width="30"
            height="30"
            className="d-inline-block align-top navebar-logo"
            alt="Mohit's Shopping App logo"
          />{' '}
          <span className={Styles.navebarHeader}>Shopping App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link
              as={NavLink}
              to="/"
              className={classnames(Styles.navLink, {
                [Styles.active]: location.pathname === '/',
              })}
              onClick={handleClose}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about-us"
              className={classnames(Styles.navLink, {
                [Styles.active]: location.pathname === '/about-us',
              })}
              onClick={handleClose}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={classnames(Styles.navLink, {
                [Styles.active]: location.pathname === '/contact',
              })}
              onClick={handleClose}
            >
              Contact
            </Nav.Link>
            <NavDropdown title="Link" className={Styles.navLink} id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/" className={Styles.navLink} onClick={handleClose}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/" className={Styles.navLink} onClick={handleClose}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/" className={Styles.navLink} onClick={handleClose}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className={Styles.searchButton}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
