import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Styles from '../styles/pages/mobile.module.css';

const MobilePhones: React.FC = () => {
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
        <meta property="og:url" content="#" />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">Home - Online Shopping App & Website</h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <div className={Styles.imgBox}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/firstsecone.png`}
                  alt="Not Supported"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/firstsecsec.png`}
                  alt="Not Supported"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/firstsecthrd.png`}
                  alt="Not Supported"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/mobile/firstsecfrth.png`}
                  alt="Not Supported"
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
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default MobilePhones;
