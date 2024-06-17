import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Styles from '../styles/pages/mobile.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const MobilePhones: React.FC = () => {
  // Function to handle button click
  const handleSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://www.amazon.in/dp/B0CNX82VVQ/ref=sspa_dk_detail_1?pd_rd_i=B0CNX82VVQ&pd_rd_w=sIgVs&content-id=amzn1.sym.2575ab02-73ff-40ca-8d3a-4fbe87c5a28d&pf_rd_p=2575ab02-73ff-40ca-8d3a-4fbe87c5a28d&pf_rd_r=73YPVCRVHWZYGTH4BX69&pd_rd_wg=N5LRJ&pd_rd_r=13aed129-e7cd-413f-b60a-b0f6153dedf7&s=electronics&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&th=1',
      '_blank'
    );
  };
  // Function to handle button click
  const handleFrstBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3R4b4wq', '_blank');
  };
  // Function to handle button click
  const handleThrsdBuy = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://www.amazon.in/dp/B09G9FPGTN/ref=sspa_dk_detail_6?psc=1&pd_rd_i=B09G9FPGTN&pd_rd_w=Cjshq&content-id=amzn1.sym.dcd65529-2e56-4c74-bf19-15db07b4a1fc&pf_rd_p=dcd65529-2e56-4c74-bf19-15db07b4a1fc&pf_rd_r=RKXPX68P0ABA061FCVFD&pd_rd_wg=ScBvQ&pd_rd_r=b3c1a803-d179-4ced-b50e-4de1e6939699&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM',
      '_blank'
    );
  };

  return (
    <>
      <Helmet>
        <title>Mobile Phones - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore the latest smartphones at Mohit's Shopping App. Find the best deals on mobile phones, accessories, and gadgets. Stay updated with the newest releases and trends in mobile technology."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Mobile Phones - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Explore the latest smartphones at Mohit's Shopping App. Find the best deals on mobile phones, accessories, and gadgets. Stay updated with the newest releases and trends in mobile technology."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`}
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/mobile-phones"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Mobile Phones - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/secsecone.png`}
                  alt="Redmi 13C 5G"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/secsecsec.png`}
                  alt="Redmi 13C 5G"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/secsecthrd.png`}
                  alt="Redmi 13C 5G"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/secsecfrth.png`}
                  alt="Redmi 13C 5G"
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Redmi 13C 5G</h2>
              <p className="">
                Startrail Silver, 4GB RAM, 128GB Storage | MediaTek Dimensity
                6100+ 5G | 90Hz Display
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Processor: Powerful MediaTek Dimensity 6100+ 5G SoC | 8GB of
                  RAM including 4GB virtual | 6.74" HD+ 90Hz display with
                  Corning Gorilla Glass 3 Protection | 50MP AI Dual camera |Fast
                  Side fingerprint | 5000mAh Battery{' '}
                </li>
                <li>
                  6.74" HD+ 90Hz display with Corning Gorilla Glass 3
                  Protection, 600nits in High Brightness mode{' '}
                </li>
              </ul>
              <Button variant="outline-primary" onClick={handleSecBuy}>
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
                  src={`${process.env.PUBLIC_URL}/images/mobile/firstsecone.png`}
                  alt="Redmi 12 5G"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/firstsecsec.png`}
                  alt="Redmi 12 5G"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/firstsecthrd.png`}
                  alt="Redmi 12 5G"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/firstsecfrth.png`}
                  alt="Redmi 12 5G"
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Redmi 12 5G</h2>
              <p className="">
                Redmi 12 5G Pastel Blue 4GB RAM 128GB ROM
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Snapdragon 4 Gen 2 Mobile Platform : Power efficient 4nm
                  architecture | 8GB of RAM including 4GB Virtual{' '}
                </li>
                <li>
                  Display: Large 17.24cm FHD+ 90Hz AdaptiveSync display with
                  Corning Gorilla Glass 3 Protection{' '}
                </li>
                <li>
                  Camera: 50MP f/1.8 AI Dual camera with classic film filters,
                  Film Frame, Portrait, Night Mode, 50MP mode, Time-lapse,
                  Google lens | 8MP Selfie camera
                </li>
              </ul>
              <Button variant="outline-primary" onClick={handleFrstBuy}>
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
                  src={`${process.env.PUBLIC_URL}/images/mobile/thrdsecone.png`}
                  alt="Apple iPhone 13"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/thrdsecsec.png`}
                  alt="Apple iPhone 13"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/thrdsecthrd.png`}
                  alt="Apple iPhone 13"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/thrdsecfrth.png`}
                  alt="Apple iPhone 13"
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Apple iPhone 13</h2>
              <p className="">
                Apple iPhone 13 (128GB) - Pink
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>15 cm (6.1-inch) Super Retina XDR display </li>
                <li>
                  Cinematic mode adds shallow depth of field and shifts focus
                  automatically in your videos{' '}
                </li>
                <li>
                  Advanced dual-camera system with 12MP Wide and Ultra Wide
                  cameras; Photographic Styles, Smart HDR 4, Night mode, 4K
                  Dolby Vision HDR recording{' '}
                </li>
                <li>
                  12MP TrueDepth front camera with Night mode, 4K Dolby Vision
                  HDR recording{' '}
                </li>
              </ul>
              <Button variant="outline-primary" onClick={handleThrsdBuy}>
                Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MobilePhones;
