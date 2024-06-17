import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Styles from '../../styles/pages/camera.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const GirlSandalProducts: React.FC = () => {
  // Function to handle button click
  const handleFrstBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3xlXu0J', '_blank');
  };

  // Function to handle button click
  const handleSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4b7fWIq', '_blank');
  };

  // Function to handle button click
  const handleThrdBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4c1RWrs', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Girl's Sandals - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore a wide range of sandals for girls at Mohit's Shopping App. Find trendy and comfortable sandals for girls of all ages. Shop now for the best deals on girl's sandals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Girl's Sandals - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Discover a wide range of sandals for girls at Mohit's Shopping App. Find trendy and comfortable sandals for girls of all ages. Shop now for the best deals on girl's sandals."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/girls-sandals"
        />
        <meta
          name="keywords"
          content="girl sandals, girls footwear, girls shoes, girls fashion, girls sandals online, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Girl's Sandals - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/frstsecone.png`}
                  alt="Shoetopia womens Abc Heeled Sandal."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/frstsecsec.png`}
                  alt="Shoetopia womens Abc Heeled Sandal."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/frstsecthrd.png`}
                  alt="Shoetopia womens Abc Heeled Sandal."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/frstsecfrth.png`}
                  alt="Shoetopia womens Abc Heeled Sandal."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Heeled Sandal</h2>
              <p className="">
                Shoetopia womens Abc Heeled Sandal
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>Size & Fit : Heel height: 6.15 cm(2.5 inches)</li>
                <li>
                  Material & Care :Synthetic Wipe with a clean, dry cloth to
                  remove dust{' '}
                </li>
                <li>
                  Type : Sandals | Heel Type : Wedge | Sole Material : Resin |
                  Fastening and Back Detail : Open Back | Toe Shape : Round Toe
                  | Ankle Height : Regular | Pattern : Woven Design
                </li>
              </ul>
              <Button variant="outline-primary" onClick={handleFrstBuy}>
                Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* This is the second Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.secDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/secsecone.png`}
                  alt="Shoetopia Embroidered Ethnic Kolhapuri Wedgess For Women & Girls."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/secsecsec.png`}
                  alt="Shoetopia Embroidered Ethnic Kolhapuri Wedgess For Women & Girls."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/secsecthrd.png`}
                  alt="Shoetopia Embroidered Ethnic Kolhapuri Wedgess For Women & Girls."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/secsecfrth.png`}
                  alt="Shoetopia Embroidered Ethnic Kolhapuri Wedgess For Women & Girls."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Shoetopia Embroidered </h2>
              <p className="">
                Shoetopia Embroidered Ethnic Kolhapuri Wedgess For Women & Girls
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Size Disclaimer: Please measure your feet length before
                  buying, and compare the size chart to choose the most suitable
                  size.{' '}
                </li>
                <li>
                  Shoetopia Women Wedges are Very Comfortable to wear. They're
                  well made with extra comfortable padded insole, slip-resistant
                  resin outsole and soft anti-sweat lining.{' '}
                </li>
                <li>
                  Fashionable and Comfortable: standing walking without pain all
                  day. This pair of Wedges is a perfect blend of trend and
                  comfort.{' '}
                </li>
              </ul>
              <Button variant="outline-primary" onClick={handleSecBuy}>
                Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* This is the Third Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.thrdDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/thrdsecone.png`}
                  alt="Mochi Women Wedge Heel Fashion Sandal."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/thrdsecsec.png`}
                  alt="Mochi Women Wedge Heel Fashion Sandal."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/thrdsecthrd.png`}
                  alt="Mochi Women Wedge Heel Fashion Sandal."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sandals/thrdsecfrth.png`}
                  alt="Mochi Women Wedge Heel Fashion Sandal."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Wedge Heel</h2>
              <p className="">
                Mochi Women Wedge Heel Fashion Sandal
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>Material:SYNTHETIC </li>
                <li>Lifestyle:Casual </li>
                <li>Heel Type:Wedges </li>
                <li>Heel Height:3 Inch </li>
                <li>
                  Care Instructions: Rotate your pair of shoes once every other
                  day, allowing them to de-odorize and retain their shapes.Use
                  Shoe bags to prevent any stains or mildew{' '}
                </li>
              </ul>
              <Button variant="outline-primary" onClick={handleThrdBuy}>
                Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default GirlSandalProducts;
