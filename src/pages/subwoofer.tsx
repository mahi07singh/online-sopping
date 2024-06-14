import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Styles from '../styles/pages/subwoofer.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const Subwoofer: React.FC = () => {
  // Function to handle button click
  const handleFirstButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4e2YW8I', '_blank');
  };

  // Function to handle button click
  const handleSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3RbCpN6', '_blank');
  };

  // Function to handle button click
  const handleThrdButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3VcVKyU', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Subwoofers - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore high-quality subwoofers at Mohit's Shopping App. Enhance your audio experience with our range of powerful and dynamic subwoofers designed to deliver deep, rich bass."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Subwoofers - Mohit's Shopping App" />
        <meta
          property="og:description"
          content="Discover the best subwoofers at Mohit's Shopping App. Our subwoofers provide unmatched bass quality and performance for your home audio system."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/soundbar-subwoofer"
        />
        <meta
          name="keywords"
          content="subwoofers, audio, home theater, bass, sound system, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Subwoofers - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/subwoofer/frstsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/subwoofer/frstsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/subwoofer/frstsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/subwoofer/frstsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>ZEBRONICS Juke BAR 7400</h2>
              <p className="">
                PRO 5.1 Channel soundbar with 6.5" subwoofer, 180W RMS, Dual
                Rear Satellites, HDMI (ARC), Optical in, AUX, BT v5.0, USB in,
                Remote Control,LED Display
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  .Mounting Type:Wall Mount.Speakers maximum output power:180
                  watts{' '}
                </li>
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
                  src={`${process.env.PUBLIC_URL}/images/subwoofer/secsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/subwoofer/secsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/subwoofer/secsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/subwoofer/secsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Wooden Portable Soundbar</h2>
              <p className="">
                i Gear Ensemble 20 watts Wooden Portable Soundbar with Wireless
                Bluetooth connectivity, Rechargeable, with USB/TF Card Support
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  [EXTRA BASS 20W SOUNDBAR]: Enjoy music the way it is meant to
                  be, whether at home or anywhere. The extra bass of Ensemble
                  got you all covered for parties and grooving sessions.{' '}
                </li>
                <li>
                  [MULTI-CHANNEL CONECTIVITY]: Stay connected with Bluetooth 5.0
                  or via USB and TF/SD card. Switch between FM Radio or
                  Bluetooth mode to enjoy music anytime, anywhere.{' '}
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
                  src={`${process.env.PUBLIC_URL}/images/subwoofer/thrdsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/subwoofer/thrdsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/subwoofer/thrdsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/subwoofer/thrdsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Soundbar Speaker, Powerful Sound</h2>
              <p className="">
                RGB Lights, Soundbar for Phone/TV/Laptop/Tablets/Projectors,
                BT5.3/FM Radio/Aux/TF Card/USB Playback & TWS Function (Matt
                Black)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>15 cm (6.1-inch) Super Retina XDR display </li>
                <li>
                  TWS Function to Connect 2 Fusion Concert Sounbars for a Sound
                  Blast | SNR ≥85dB | Power Voltage 1A DC 5V & Type-C USB
                  Charging | 2 Hrs Charge Time | Integrated Easy Controls to
                  Manage Music{' '}
                </li>
                <li>Warranty Type: Limited; Is Waterproof: False </li>
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

export default Subwoofer;
