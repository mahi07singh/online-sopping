import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Styles from '../styles/pages/wifi.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const WifiAdapter: React.FC = () => {
  // Function to handle button click
  const handleFrstSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3X4OK9O', '_blank');
  };

  // Function to handle button click
  const handleSecSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3R60qoK', '_blank');
  };

  // Function to handle button click
  const handleThrdSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3X9w0WF', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>WiFi Adapters - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore the best deals on WiFi adapters at Mohit's Shopping App. Upgrade your connectivity with high-speed WiFi adapters suitable for all your devices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="WiFi Adapters - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Explore the best deals on WiFi adapters at Mohit's Shopping App. Upgrade your connectivity with high-speed WiFi adapters suitable for all your devices."
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
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/wifi/frstsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/wifi/frstsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/wifi/frstsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/wifi/frstsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Wireless USB Adaptor</h2>
              <p className="">
                Alfa Network Awus036Nha 150Mbps Wireless USB Adaptor - Desktop,
                Multicolor
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Includes a 4 inch 5 ddbi screw-on swivel rubber antenna{' '}
                </li>
                <li>
                  Supports the following security protocols: 64/128-bit wep,
                  wpa, wpa2, tkip, aes{' '}
                </li>
                <li>
                  Compatibility: Windows 2000, XP 32/64, vista 32/64, Windows 7,
                  MAC and Linux, Well supported in Kali Linux{' '}
                </li>
              </ul>
              <Button variant="outline-primary" onClick={handleFrstSecBuy}>
                Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* This is the second Section of Home Page */}
      <section id="wifi-adaper">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.secDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/wifi/secsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/wifi/secsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/wifi/secsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/wifi/secsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Wireless USB WiFi Adapter</h2>
              <p className="">
                Generic AR9271 802.11n 150 Mbps Wireless USB WiFi Adapter with
                WiFi Antenna WLAN Network Card Compatible with Kali
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Wireless 2.4GHz data rate up to 150Mbps, compatible with
                  802.11b/g/n devices{' '}
                </li>
                <li>
                  6dBi omni-directional antenna detachable Supports Windows
                  7/8/8.1/10 and Linux{' '}
                </li>
                <li>
                  It can be worked with Laptops, Notebooks and PC desktop, Piano
                  as well. Exceptional wireless speed up to 150Mbps brings best
                  experience for video streaming or internet calls
                </li>
              </ul>
              <Button variant="outline-primary" onClick={handleSecSecBuy}>
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
                  src={`${process.env.PUBLIC_URL}/images/wifi/thrdsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/wifi/thrdsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/wifi/thrdsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/wifi/thrdsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Netgear Nighthawk Ac1900</h2>
              <p className="">
                Wi-Fi USB Adapter (A7000)|More Bandwidth Capacity When
                Downloading and Uploading Data to and from The Wireless Network
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>15 cm (6.1-inch) Super Retina XDR display </li>
                <li>
                  AC1900 WIFI Speeds - Up to 600Mbps on 2.4GHz and 1300Mbps on
                  5GHz{' '}
                </li>
                <li>
                  Dual Band WIFI - Faster connections to more Wi-Fi networks{' '}
                </li>
                <li>
                  Multiple OS Support - Compatible with Mac and Windows, the
                  Windows standalone diver allows you to use a built-in windows
                  configuration tool to connect the adapter to a Wi-Fi network{' '}
                </li>
              </ul>
              <Button variant="outline-primary" onClick={handleThrdSecBuy}>
                Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WifiAdapter;
