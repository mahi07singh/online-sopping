import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Styles from '../../styles/pages/camera.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const GirlPandentProducts: React.FC = () => {
  // Function to handle button click
  const handleFrstBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3yON0HL', '_blank');
  };

  // Function to handle button click
  const handleSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3wReKe9', '_blank');
  };

  // Function to handle button click
  const handleThrdBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3XawSdE', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Jewelry & Pendants - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover exquisite jewelry and pendants at Mohit's Shopping App. Find stunning pieces for every occasion and style. Shop now for the best deals on fine jewelry."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Jewelry & Pendants - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Explore a wide selection of exquisite jewelry and pendants at Mohit's Shopping App. Find stunning pieces for every occasion and style. Shop now for the best deals on fine jewelry."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/jewelry-pendants"
        />
        <meta
          name="keywords"
          content="jewelry, pendants, fine jewelry, necklace, earrings, bracelets, rings, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Jewelry & Pendants - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/camera/frstsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/camera/frstsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/camera/frstsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/camera/frstsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Fujifilm X-T30 II 26.1MP</h2>
              <p className="">
                Retro Style mirrorless Compact Travel Camera|4k vlogging|High
                Speed Recording FHD 240fps|Advance AF for
                Street/Lifestyle/Amateurs (Body only) -Silver
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>26.1MP APS-C X-Trans BSI CMOS 4 Sensor </li>
              </ul>
              <Button variant="outline-primary" onClick={handleFrstBuy}>
                Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* This is the second Section of Home Page */}
      <section id="camera">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.secDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/camera/secsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/camera/secsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/camera/secsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/camera/secsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Vlogging Camera For Youtube</h2>
              <p className="">
                Sorandy 4K Vlogging Camera For Youtube, 3 Inch Ips 64Mp Digital
                Camera For Photography
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  NIGHT VISION PHOTO: The digital camera is equipped with HD
                  night vision photo function, when the lens senses the change
                  of light, the IR CUT switches, so that the photo can be taken
                  in a dim environment can also produce clear and bright
                  results.{' '}
                </li>
                <li>
                  HIGH RESOLUTION SHOOTING: The digital camera has a maximum of
                  4K 64 megapixels, which is able to catch every detail and
                  perfectly record the wonderful life.{' '}
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
                  src={`${process.env.PUBLIC_URL}/images/camera/thrdsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/camera/thrdsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/camera/thrdsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/camera/thrdsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Fujifilm X-T5 40MP</h2>
              <p className="">
                APS-C X-Trans Sensor|Pixel Shift|IBIS System|Ultra high
                Resolution mirrorless Camera|6k 30p|1/180000 Shutter Speed|Quick
                Lever for Photo/Video with XF 18-55mm f/2.8 Lens -Black
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  40MP APS-C X-Trans CMOS 5 HR BSI Sensor and 4K 120p, 6.2K 30p,
                  FHD 240p 10-Bit Video{' '}
                </li>
                <li>
                  7-Stop In-Body Image Stabilization and 425-Point Intelligent
                  Hybrid AF System{' '}
                </li>
                <li>
                  3.69m-Dot OLED Electronic Viewfinder and 3" 1.84m-Dot Tilting
                  Touchscreen LCD{' '}
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

export default GirlPandentProducts;
