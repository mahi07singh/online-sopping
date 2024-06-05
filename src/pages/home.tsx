import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import Styles from '../styles/pages/home.module.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';

const Home: React.FC = () => {
  // this is state for show and hide
  const [isShowContent, setIsShowContent] = useState(false);
  // this is state for show and hide
  const [isShowSptContent, setIsShowSptContent] = useState(false);

  // navigate to oter page
  const navigate = useNavigate();
  // Function to handle button click
  const handleFstButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3R4b4wq', '_blank');
  };

  // Function to handle button click
  const handleSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3R60qoK', '_blank');
  };

  // Function to handle button click
  const handleThdButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3wReKe9', '_blank');
  };

  // Function to handle button click
  const handleFrthButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4e2YW8I', '_blank');
  };

  // Function to handle button click
  const handleLedButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3X84HMp', '_blank');
  };

  // Function to handle button click
  const handleFrzButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3yL5WXX', '_blank');
  };

  // second sports section
  // Function to handle button click
  const handleSprtFirButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3Ku4J9W', '_blank');
  };

  // Function to handle button click
  const handleSprtSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4e8hPqT', '_blank');
  };

  // Function to handle button click
  const handleSprtArcButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3X6ASvC', '_blank');
  };

  // Function to handle button click
  const handleSprtBtmnButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/458J0h6', '_blank');
  };

  // Function to handle button click
  const handleSprtWCrKitButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3KuvKKm', '_blank');
  };

  // Function to handle button click
  const handleSprtMCrKitButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3VaNVcL', '_blank');
  };

  // Function to handle image click
  const handleFstImageClick = () => {
    // Navigate to the /about-us route
    navigate('/mobile-phones#redmi');
  };

  // Function to handle image click
  const handleSecImageClick = () => {
    // Navigate to the /about-us route
    navigate('/wifi-adapter#wifi-adaper');
  };

  // Function to handle image click
  const handleThdImageClick = () => {
    // Navigate to the /about-us route
    navigate('/camera#camera');
  };

  // Function to handle image click
  const handleFrthImageClick = () => {
    // Navigate to the /about-us route
    navigate('/soundbar-subwoofer');
  };

  // Function to handle image click
  const handleLedImageClick = () => {
    // Navigate to the /about-us route
    navigate('/led-television');
  };

  // Function to handle image click
  const handleFrzImageClick = () => {
    // Navigate to the /about-us route
    navigate('/freezes');
  };

  // seconed section for sports images links
  // Function to handle image click
  const handleSptFImageClick = () => {
    // Navigate to the /about-us route
    navigate('/sports-t-shirts');
  };

  // Function to handle image click
  const handleSptSecImageClick = () => {
    // Navigate to the /about-us route
    navigate('/sports-spike-shoes');
  };

  // Function to handle image click
  const handleSptArcImageClick = () => {
    // Navigate to the /about-us route
    navigate('/sports-archery');
  };

  // Function to handle image click
  const handleSptBtmnImageClick = () => {
    // Navigate to the /about-us route
    navigate('/sports-badminton');
  };

  // Function to handle image click
  const handleSptWCrKitImageClick = () => {
    // Navigate to the /about-us route
    navigate('/sports-wcriket-kit');
  };

  // Function to handle image click
  const handleSptMCrKitImageClick = () => {
    // Navigate to the /about-us route
    navigate('/sports-mcriket-kit');
  };

  // Function to navigate to contact
  const handleClick = () => {
    // Navigate to the /about-us route
    navigate('/contact');
  };

  // Function to navigate to contact
  const handleGProductClick = () => {
    // Navigate to the /about-us route
    navigate('/girls-products');
  };

  return (
    <>
      <Helmet>
        <title>Home - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover the best deals on home goods, kitchenware, clothing, jewelry, and tech gadgets at Mohit's Shopping App."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Home - Mohit's Shopping App" />
        <meta
          property="og:description"
          content="Discover the best deals on home goods, kitchenware, clothing, jewelry, and tech gadgets at Mohit's Shopping App."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`}
        />
        <meta property="og:url" content="#" />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">Home - Online Shopping App & Website</h1>
      {/* This is the First Section of Home Page */}
      <section className={Styles.carouselSection}>
        <Container fluid className={Styles.firstContainer}>
          <Carousel interval={2000}>
            <Carousel.Item>
              <div className={Styles.overlay}></div>
              <img
                className={`${Styles.carouselImage} w-100`}
                src={`${process.env.PUBLIC_URL}/slide1.png`}
                alt="Fashionable clothing for girls"
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
                <Button
                  className={Styles.carouselButton}
                  variant="info"
                  onClick={handleGProductClick}
                >
                  Products
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className={Styles.overlay}></div>
              <img
                className={`${Styles.carouselImage} w-100`}
                src={`${process.env.PUBLIC_URL}/slide2.png`}
                alt="Fashionable clothing for Boys"
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
                alt="Electronic Gadages"
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
            <Col xs={12} sm={12} md={4} className="align-item">
              <h2 className="text-white">Electronic Gadgets</h2>
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
                  alt="Please Check Your Internet connection.."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Redmi 12 5G</Card.Title>
                  <Card.Text>
                    Redmi 12 5G Pastel Blue 4GB RAM 128GB ROM
                  </Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab */}
                  <Button
                    variant="outline-primary"
                    onClick={handleFstButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
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
                  alt="Please Check Your Internet connection.."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>WiFi Adapter</Card.Title>
                  <Card.Text>
                    Generic AR9271 802.11n 150 Mbps Wireless USB
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={handleSecButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
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
                  alt="Please Check Your Internet connection.."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Vlogging Camera </Card.Title>
                  <Card.Text>
                    For Youtube, 3 Inch Ips 64Mp Digital Camera
                  </Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab */}
                  <Button
                    variant="outline-primary"
                    onClick={handleThdButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
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
                  alt="Please Check Your Internet connection.."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>WiFi Adapter</Card.Title>
                  <Card.Text>
                    Generic AR9271 802.11n 150 Mbps Wireless USB
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={handleFrthButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {isShowContent ? (
            <section>
              <Container>
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Card className={Styles.fSecCard}>
                      <Card.Img
                        variant="top"
                        src={`${process.env.PUBLIC_URL}/images/home/led.png`}
                        onClick={handleLedImageClick}
                        className={`${Styles.cardImage} ${Styles.pointer}`}
                        alt="Please Check Your Internet connection.."
                      />
                      <hr className={Styles.hr} />
                      <Card.Body>
                        <Card.Title>Ultra HD Smart LED</Card.Title>
                        <Card.Text>
                          TCL 139 cm Metallic Bezel-Less Series 4K Ultra HD
                          Smart LED
                        </Card.Text>
                        <Button
                          variant="outline-primary"
                          onClick={handleLedButtonClick}
                        >
                          Buy Now{' '}
                          <FaShoppingCart style={{ marginLeft: '3px' }} />
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Card className={Styles.fSecCard}>
                      <Card.Img
                        variant="top"
                        src={`${process.env.PUBLIC_URL}/images/home/freeze.png`}
                        className={`${Styles.cardImage} ${Styles.pointer}`}
                        onClick={handleFrzImageClick}
                        alt="Please Check Your Internet connection.."
                      />
                      <hr className={Styles.hr} />
                      <Card.Body>
                        <Card.Title>Samsung 183 L, 4 Star</Card.Title>
                        <Card.Text>
                          Digital Inverter, Direct-Cool Single Door Refrigerator
                        </Card.Text>
                        <Button
                          variant="outline-primary"
                          onClick={handleFrzButtonClick}
                        >
                          Buy Now{' '}
                          <FaShoppingCart style={{ marginLeft: '3px' }} />
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : (
            <Row className="justify-content-center mt-3">
              <Col xs={12} sm={12} md={2} className="align-item">
                <Button
                  className="align-item"
                  variant="outline-info"
                  onClick={() => setIsShowContent(true)}
                >
                  View More <FaArrowRight style={{ marginLeft: '3px' }} />
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      {/* This is the Third Section of Home Page */}
      <section>
        <Container>
          <Row className="justify-content-center mb-3">
            <Col xs={12} sm={12} md={4} className="align-item">
              <h2>Sports Equipment</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.secSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/virat.png`}
                  onClick={handleSptFImageClick}
                  className={`${Styles.cardSecImage} ${Styles.pointer}`}
                  alt="Please Check Your Internet connection.."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>India t20 Jersey</Card.Title>
                  <Card.Text>
                    Positivity Sports India t20 Jersey 2024 World Cup
                  </Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab */}
                  <Button
                    variant="outline-primary"
                    onClick={handleSprtFirButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.secSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/spike.png`}
                  className={`${Styles.cardSecImage} ${Styles.pointer}`}
                  onClick={handleSptSecImageClick}
                  alt="Please Check Your Internet connection.."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Turbo Running Spikes</Card.Title>
                  <Card.Text>
                    Athletic Spikes Track & Field Shoes for Mens Spikes
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={handleSprtSecButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.secSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/archery.png`}
                  onClick={handleSptArcImageClick}
                  className={`${Styles.cardSecImage} ${Styles.pointer}`}
                  alt="Please Check Your Internet connection.."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Sports Super Archery </Card.Title>
                  <Card.Text>
                    Archery Bow and Arrow Set with Dart Target Board
                  </Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab */}
                  <Button
                    variant="outline-primary"
                    onClick={handleSprtArcButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.secSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/badminton.png`}
                  className={`${Styles.cardSecImage} ${Styles.pointer}`}
                  onClick={handleSptBtmnImageClick}
                  alt="Please Check Your Internet connection.."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Sports Badminton Kit</Card.Title>
                  <Card.Text>
                    2 Wide Body Shuttle Bat with Cover,10 Nylon Shuttles
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={handleSprtBtmnButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {isShowSptContent ? (
            <section>
              <Container>
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Card className={Styles.secSecCard}>
                      <Card.Img
                        variant="top"
                        src={`${process.env.PUBLIC_URL}/images/home/wcricket-kit.png`}
                        onClick={handleSptWCrKitImageClick}
                        className={`${Styles.cardSecImage} ${Styles.pointer}`}
                        alt="Please Check Your Internet connection.."
                      />
                      <hr className={Styles.hr} />
                      <Card.Body>
                        <Card.Title>CW SG Nylon Cricket Kit</Card.Title>
                        <Card.Text>
                          Combo with Spofly Brand Ideal for Age Between 10 to 11
                          Year
                        </Card.Text>
                        <Button
                          variant="outline-primary"
                          onClick={handleSprtWCrKitButtonClick}
                        >
                          Buy Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Card className={Styles.secSecCard}>
                      <Card.Img
                        variant="top"
                        src={`${process.env.PUBLIC_URL}/images/home/mcricket-kit.png`}
                        className={`${Styles.cardSecImage} ${Styles.pointer}`}
                        onClick={handleSptMCrKitImageClick}
                        alt="Please Check Your Internet connection.."
                      />
                      <hr className={Styles.hr} />
                      <Card.Body>
                        <Card.Title>
                          Virat Kolhi Complete Cricket Kit
                        </Card.Title>
                        <Card.Text>
                          SQ SPORTS MRF Grand Edition (Genius) VK-18 Cricket Kit
                        </Card.Text>
                        <Button
                          variant="outline-primary"
                          onClick={handleSprtMCrKitButtonClick}
                        >
                          Buy Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : (
            <Row className="justify-content-center mt-3">
              <Col xs={12} sm={12} md={2} className="align-item">
                <Button
                  className="align-item "
                  variant="outline-info"
                  onClick={() => setIsShowSptContent(true)}
                >
                  View More <FaArrowRight style={{ marginLeft: '3px' }} />
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default Home;
