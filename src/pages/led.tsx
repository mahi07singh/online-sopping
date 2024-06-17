import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FaShoppingCart } from 'react-icons/fa';
import Styles from '../styles/pages/led.module.css';

const LedTv: React.FC = () => {
  // Function to handle button click
  const handleFirstButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3X84HMp', '_blank');
  };

  // Function to handle button click
  const handleSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3x3SLAC', '_blank');
  };

  // Function to handle button click
  const handleThrdButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3KwGDeO', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>LED TVs - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover the best deals on high-definition LED TVs at Mohit's Shopping App. Explore our wide range of LED TVs with stunning picture quality and advanced features."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="LED TVs - Mohit's Shopping App" />
        <meta
          property="og:description"
          content="Shop the latest LED TVs at Mohit's Shopping App. Enjoy amazing deals on top brands with cutting-edge technology and vibrant visuals."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/led-television"
        />
        <meta
          name="keywords"
          content="LED TVs, high-definition, 4K, smart TV, home entertainment, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        LED TVs - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/led/frstsecone.png`}
                  alt="TCL 139 cm (55 inches) Metallic Bezel-Less Series 4K Ultra HD."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/led/frstsecsec.png`}
                  alt="TCL 139 cm (55 inches) Metallic Bezel-Less Series 4K Ultra HD."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/led/frstsecthrd.png`}
                  alt="TCL 139 cm (55 inches) Metallic Bezel-Less Series 4K Ultra HD."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/led/frstsecfrth.png`}
                  alt="TCL 139 cm (55 inches) Metallic Bezel-Less Series 4K Ultra HD."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Ultra HD Smart LED</h2>
              <p className="">
                TCL 139 cm (55 inches) Metallic Bezel-Less Series 4K Ultra HD
                Smart LED Google TV 55V6B (Black)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Warranty Information: 2 Year warranty provided by the
                  manufacturer from date of purchase{' '}
                </li>
                <li>
                  Display: UHD 4K LED Panel | Dynamic Color Enhancement | HDR 10
                  | T-Screen | AiPQ Processor | 178 Degree Wide Viewing Angle |
                  Micro Dimming | Metallic Bezel-Less Design
                </li>
                <li>Sound: 24 Watts output | Dolby Audio MS12Y </li>
              </ul>
              <Button
                variant="outline-primary"
                onClick={handleFirstButtonClick}
              >
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
                  src={`${process.env.PUBLIC_URL}/images/led/secsecone.png`}
                  alt="Xiaomi 125 cm (50 inches) X 4K Dolby Vision Series Smart Google."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/led/secsecsec.png`}
                  alt="Xiaomi 125 cm (50 inches) X 4K Dolby Vision Series Smart Google."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/led/secsecthrd.png`}
                  alt="Xiaomi 125 cm (50 inches) X 4K Dolby Vision Series Smart Google."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/led/secsecfrth.png`}
                  alt="Xiaomi 125 cm (50 inches) X 4K Dolby Vision Series Smart Google."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2> Smart Google TV L50M8-A2IN</h2>
              <p className="">
                Xiaomi 125 cm (50 inches) X 4K Dolby Vision Series Smart Google
                TV L50M8-A2IN (Black)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Resolution : 4K Ultra HD (3840 x 2160) Resolution | Refresh
                  Rate : 60 Hertz | Viewing angle : 178 degrees{' '}
                </li>
                <li>
                  Connectivity: Dual Band Wi-Fi | 3 HDMI | 2 USB ports| Optical
                  port| AV port| Ethernet port | 3.5 mm jack | Bluetooth 5.0{' '}
                </li>
                <li>
                  Display: 4K Dolby Vision | HDR 10 | HLG | Reality Flow MEMC |
                  Vivid Picture Engine | Wide Colour Gamut- DCI-P3 94% (typ){' '}
                </li>
              </ul>
              <Button variant="outline-primary" onClick={handleSecButtonClick}>
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
                  src={`${process.env.PUBLIC_URL}/images/led/thrdsecone.png`}
                  alt="Xiaomi 125 cm (50 inches) X Pro 4K Dolby Vision IQ Series Smart."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/led/thrdsecsec.png`}
                  alt="Xiaomi 125 cm (50 inches) X Pro 4K Dolby Vision IQ Series Smart."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/led/thrdsecthrd.png`}
                  alt="Xiaomi 125 cm (50 inches) X Pro 4K Dolby Vision IQ Series Smart."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/led/thrdsecfrth.png`}
                  alt="Xiaomi 125 cm (50 inches) X Pro 4K Dolby Vision IQ Series Smart."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Series Smart Google TV </h2>
              <p className="">
                Xiaomi 125 cm (50 inches) X Pro 4K Dolby Vision IQ Series Smart
                Google TV L50M8-5XIN (Black)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Resolution : 4K Ultra HD (3840 x 2160) | Refresh Rate : 60
                  Hertz | Viewing angle : 178 degrees{' '}
                </li>
                <li>
                  Connectivity: Dual Band Wi-Fi | 3 HDMI | 2 USB ports| Optical
                  port| AV port| Ethernet port | 3.5 mm jack | Bluetooth 5.0{' '}
                </li>
                <li>Sound: 40 Watts Output | Dolby Atmos | DTS-X </li>
                <li>
                  Warranty Information: 1 Year Warranty on Product and 2 Years
                  Warranty on Panel provided by the brand from the date of
                  purchase{' '}
                </li>
              </ul>
              <Button variant="outline-primary" onClick={handleThrdButtonClick}>
                Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LedTv;
