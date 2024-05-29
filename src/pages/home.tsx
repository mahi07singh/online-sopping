import React from 'react';
import { Helmet } from 'react-helmet';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import Styles from '../styles/pages/home.module.css';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  // Function to handle button click
  const handleFstButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://amzn.to/3R4b4wq',
      '_blank'
    );
  };

  // Function to handle button click
  const handleSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://amzn.to/3R60qoK',
      '_blank'
    );
  };

  // Function to handle button click
  const handleThdButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://amzn.to/3wReKe9',
      '_blank'
    );
  };

  // Function to handle button click
  const handleFrthButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://amzn.to/4e2YW8I',
      '_blank'
    );
  };

  // Function to handle image click
  const handleFstImageClick = () => {
    // Navigate to the /about-us route
    navigate('/mobile-phones');
  };

  // Function to handle image click
  const handleSecImageClick = () => {
    // Navigate to the /about-us route
    navigate('/wifi-adapter');
  };

  // Function to handle image click
  const handleThdImageClick = () => {
    // Navigate to the /about-us route
    navigate('/camera');
  };

  // Function to handle image click
  const handleFrthImageClick = () => {
    // Navigate to the /about-us route
    navigate('/soundbar-subwoofer');
  };

  // Function to navigate to contact
  const handleClick = () => {
    // Navigate to the /about-us route
    navigate('/contact');
  };

  return (
    <>
      <Helmet>
        <title className="header-title">Home - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover the best deals on home goods, kitchenware, clothing, jewelry, and tech gadgets at Mohit's Shopping App."
        />
      </Helmet>
      {/* This is the First Section of Home Page */}
      <section className={Styles.carouselSection}>
        <Container fluid style={{ padding: 0, margin: 0 }}>
          <Carousel interval={2000}>
            <Carousel.Item>
              <div className={Styles.overlay}></div>
              <img
                className={`${Styles.carouselImage} w-100`}
                src={`${process.env.PUBLIC_URL}/slide1.png`}
                alt="Not Supported"
              />
              <Carousel.Caption className={Styles.carouselCaption}>
                <p className={Styles.carouselTitle}>
                  Explore the Latest Trends in Girls' Fashion
                </p>
                <p className={Styles.carouselText}>
                  Discover an amazing collection of fashionable clothing,
                  accessories, and more for girls. Enjoy a seamless shopping
                  experience with unbeatable deals and top-notch quality at
                  Mohit's Shopping App.
                </p>
                <Button
                  className={Styles.carouselButton}
                  variant="outline-light"
                  onClick={handleClick}
                >
                  Contacts
                </Button>
                <Button className={Styles.carouselButton} variant="info">
                  Products
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className={Styles.overlay}></div>
              <img
                className={`${Styles.carouselImage} w-100`}
                src={`${process.env.PUBLIC_URL}/slide2.png`}
                alt="Not Supported"
              />
              <Carousel.Caption className={Styles.carouselCaption}>
                <p className={Styles.carouselTitle}>
                  Discover the Latest Trends in Boys' Fashion
                </p>
                <p className={Styles.carouselText}>
                  Explore a diverse collection of trendy clothing, accessories,
                  and more for boys. Enjoy a hassle-free shopping experience
                  with unbeatable deals and top-quality products at Mohit's
                  Shopping App.
                </p>
                <Button
                  className={Styles.carouselButton}
                  variant="outline-light"
                  onClick={handleClick}
                >
                  Contacts
                </Button>
                <Button className={Styles.carouselButton} variant="info">
                  Products
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className={Styles.overlay}></div>
              <img
                className={`${Styles.carouselImage} w-100`}
                src={`${process.env.PUBLIC_URL}/slide3.png`}
                alt="Not Supported"
              />
              <Carousel.Caption className={Styles.carouselCaption}>
                <p className={Styles.carouselTitle}>
                  Discover the Best Deals on Electronic Devices
                </p>
                <p className={Styles.carouselText}>
                  Explore a wide range of high-quality electronic devices and
                  gadgets. From smartphones and laptops to smart home
                  appliances, find everything you need for your tech needs at
                  competitive prices on Mohit's Shopping App.
                </p>
                <Button
                  className={Styles.carouselButton}
                  variant="outline-light"
                  onClick={handleClick}
                >
                  Contacts
                </Button>
                <Button className={Styles.carouselButton} variant="info">
                  Products
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      {/* This is the Second Section of Home Page */}
      <section style={{ backgroundColor: 'gray' }}>
        <Container>
          <Row className="justify-content-center mb-3">
            <Col xs={12} sm={12} md={4}>
              <h1 className="text-white">Electronic Gadgets</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.fSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/first.png`}
                  onClick={handleFstImageClick}
                  className={`${Styles.cardImage} ${Styles.pointer}`}
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Redmi 12 5G</Card.Title>
                  <Card.Text>
                    Redmi 12 5G Pastel Blue 4GB RAM 128GB ROM
                  </Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab */}
                  <Button variant="primary" onClick={handleFstButtonClick}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.fSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/second.png`}
                  className={`${Styles.cardImage} ${Styles.pointer}`}
                  onClick={handleSecImageClick}
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>WiFi Adapter</Card.Title>
                  <Card.Text>
                    Generic AR9271 802.11n 150 Mbps Wireless USB
                  </Card.Text>
                  <Button variant="primary" onClick={handleSecButtonClick}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.fSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/third.png`}
                  onClick={handleThdImageClick}
                  className={`${Styles.cardImage} ${Styles.pointer}`}
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Vlogging Camera </Card.Title>
                  <Card.Text>
                    For Youtube, 3 Inch Ips 64Mp Digital Camera
                  </Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab */}
                  <Button variant="primary" onClick={handleThdButtonClick}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.fSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/fourth.png`}
                  className={`${Styles.cardImage} ${Styles.pointer}`}
                  onClick={handleFrthImageClick}
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>WiFi Adapter</Card.Title>
                  <Card.Text>
                    Generic AR9271 802.11n 150 Mbps Wireless USB
                  </Card.Text>
                  <Button variant="primary" onClick={handleFrthButtonClick}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* This is the Third Section of Home Page */}
      {/* <section>
        <Row className="justify-content-center mb-3">
          <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
            <h1 className="text-center text-black">Electronic Gadgets</h1>
          </Col>
        </Row>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/first.png`}
                  onClick={handleFstImageClick}
                  className={`${Styles.pointer}`}
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Redmi 12 5G</Card.Title>
                  <Card.Text>
                    Redmi 12 5G Pastel Blue 4GB RAM 128GB ROM
                  </Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab
                  <Button variant="primary" onClick={handleFstButtonClick}>
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/second.png`}
                  className={`${Styles.pointer}`}
                  onClick={handleSecImageClick}
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>WiFi Adapter</Card.Title>
                  <Card.Text>
                    Generic AR9271 802.11n 150 Mbps Wireless USB
                  </Card.Text>
                  <Button variant="primary" onClick={handleSecButtonClick}>
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
};

export default Home;
