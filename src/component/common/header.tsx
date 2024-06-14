import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Styles from '../../styles/common/header.module.css';
import { useState, useEffect, useCallback } from 'react';
import classnames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Header = () => {
  // State to track the expansion of the navbar
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  // this is handling for scroll state
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  let lastScrollY = window.pageYOffset;

  // Function to toggle the expanded state of the navbar
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  // Function to collapse the navbar
  const handleClose = () => {
    setExpanded(false);
  };

  const handleScroll = useCallback(() => {
    if (window.pageYOffset > lastScrollY) {
      setIsScrollingUp(false);
    } else {
      setIsScrollingUp(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    lastScrollY = window.pageYOffset;
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className={classnames('', {
        [Styles.hiddenHeader]: !isScrollingUp,
        [Styles.visibleHeader]: isScrollingUp,
      })}
      style={{ backgroundColor: '#ffbd59' }}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <LazyLoadImage
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
            {/* <Nav.Link
              as={NavLink}
              to="/about-us"
              className={classnames(Styles.navLink, {
                [Styles.active]: location.pathname === '/about-us',
              })}
              onClick={handleClose}
            >
              About Us
            </Nav.Link> */}
            {/* <Nav.Link
              as={NavLink}
              to="/contact"
              className={classnames(Styles.navLink, {
                [Styles.active]: location.pathname === '/contact',
              })}
              onClick={handleClose}
            >
              Contact
            </Nav.Link> */}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className={Styles.searchButton}>
              Search
            </Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
