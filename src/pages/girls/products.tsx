import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Styles from '../../styles/pages/products.module.css';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GirlProducts = () => {
  // for navigate the screen
  const navigate = useNavigate();
  // this is state for show and hide
  const [isShowContent, setIsShowContent] = useState(false);

  // Function to handle button click
  const handleFrstSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4e0PEdo', '_blank');
  };

  // Function to handle button click
  const handleSecSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4aMOaRd', '_blank');
  };

  // Function to handle button click
  const handleThrdSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4e8TGQT', '_blank');
  };

  // Function to handle button click
  const handleFrthSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3KuZOW8', '_blank');
  };

  // Function to handle button click
  const handleSareSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3XazlEW', '_blank');
  };

  // Function to handle button click
  const handleBraSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3yPz6oM', '_blank');
  };

  // Function to handle image click
  const handleFrthImageClick = () => {
    // Navigate to the /about-us route
    navigate('/jewelry-pendants');
  };
  
  // Function to handle image click
  const handleSecImageClick = () => {
    // Navigate to the /about-us route
    navigate('/girls-sandals');
  };

  // Function to handle image click
  const handleThrdImageClick = () => {
    // Navigate to the /about-us route
    navigate('/girls-skin-care');
  };

  // Function to handle image click
  const handleFrstImageClick = () => {
    // Navigate to the /about-us route
    navigate('/girls-kurtis');
  };

  // Function to handle image click
  const handleSareeImageClick = () => {
    // Navigate to the /about-us route
    navigate('/girls-sarees');
  };

  // Function to handle image click
  const handleBraImageClick = () => {
    // Navigate to the /about-us route
    navigate('/girls-bras');
  };

  return (
    <>
      <Helmet>
        <title>Products For Girl's - Mohit's Shopping App</title>
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
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/girls-products"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Products For Girl's - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      {/* This is the Second Section of Home Page */}
      <section>
        <Container>
          <Row className="justify-content-center mb-3">
            <Col xs={12} sm={12} md={5} className="align-item">
              <h2>Women's Products</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.fSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/fourth.png`}
                  className={`${Styles.cardImage} ${Styles.pointer}`}
                  onClick={handleFrthImageClick}
                  alt="Please Check Your Internet connection.."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Rhodium-Plated Silver</Card.Title>
                  <Card.Text>
                    Pendant with Earrings Jewellery Set for Girls
                  </Card.Text>
                  <Button variant="outline-primary" onClick={handleFrthSecBuy}>
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.fSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/second.png`}
                  className={`${Styles.cardImage} ${Styles.pointer}`}
                  onClick={handleSecImageClick}
                  alt="Please Check Your Internet connection.."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Heeled Sandal </Card.Title>
                  <Card.Text>Shoetopia womens Abc Heeled Sandal</Card.Text>
                  <Button variant="outline-primary" onClick={handleSecSecBuy}>
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.fSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/thrd.png`}
                  onClick={handleThrdImageClick}
                  className={`${Styles.cardImage} ${Styles.pointer}`}
                  alt="Please Check Your Internet connection.."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>POND's Super Light Gel</Card.Title>
                  <Card.Text>
                    Oil-Free Moisturizer, 200G, For Hydrated
                  </Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab */}
                  <Button variant="outline-primary" onClick={handleThrdSecBuy}>
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.fSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/first.png`}
                  onClick={handleBraImageClick}
                  className={`${Styles.cardImage} ${Styles.pointer}`}
                  alt="Please Check Your Internet connection.."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  {/* Women's Kurtas & Kurtis */}
                  <Card.Title>Sports Bra </Card.Title>
                  <Card.Text>Clovia Women's Medium Impact Sports Bra</Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab */}
                  <Button variant="outline-primary" onClick={handleBraSecBuy}>
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
                        src={`${process.env.PUBLIC_URL}/images/girls/sarees/fifth.png`}
                        onClick={handleSareeImageClick}
                        className={`${Styles.cardImage} ${Styles.pointer}`}
                        alt="Please Check Your Internet connection.."
                      />
                      <hr className={Styles.hr} />
                      <Card.Body>
                        <Card.Title>Banarasi Silk Saree</Card.Title>
                        <Card.Text>
                          Women's Georgette Banarasi Silk Saree with Unstitched
                          Blouse
                        </Card.Text>
                        <Button
                          variant="outline-primary"
                          onClick={handleSareSecBuy}
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
                        src={`${process.env.PUBLIC_URL}/images/girls/kurtis/first.png`}
                        className={`${Styles.cardImage} ${Styles.pointer}`}
                        onClick={handleFrstImageClick}
                        alt="Please Check Your Internet connection.."
                      />
                      <hr className={Styles.hr} />
                      <Card.Body>
                        <Card.Title>Women Kurta</Card.Title>
                        <Card.Text>
                          GoSriKi Women Kurta with Pant & Dupatta
                        </Card.Text>
                        <Button
                          variant="outline-primary"
                          onClick={handleFrstSecBuy}
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
    </>
  );
};

export default GirlProducts;
