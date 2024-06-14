import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Styles from '../../styles/pages/sports-badminton.module.css';

const SportsBadminton: React.FC = () => {
  // Function to handle button click
  const handleFirstButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/458J0h6', '_blank');
  };

  // Function to handle button click
  const handleSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3XnaWMu', '_blank');
  };

  // Function to handle button click
  const handleThrdButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4emw1MZ', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Sports Badminton - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover top-quality badminton equipment at Mohit's Shopping App. Browse our wide range of rackets, shuttlecocks, and accessories for players of all levels. Shop now for the best deals on badminton gear."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Sports Badminton - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Find the best badminton equipment at Mohit's Shopping App. Explore our selection of rackets, shuttlecocks, and accessories for beginners and professionals."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/sports-badminton"
        />
        <meta
          name="keywords"
          content="badminton, sports badminton, badminton rackets, shuttlecocks, badminton accessories, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Sports Badminton - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/badminton/frstsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/badminton/frstsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/badminton/frstsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/badminton/frstsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Badminton Kit</h2>
              <p className="">
                Hipkoo Sports Aluminum Full Badminton Kit |2 Wide Body Shuttle
                Bat with Cover,10 Nylon Shuttles and Net|Ideal for Professional
                & Beginner Players -Red
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  𝐁𝐚𝐝𝐦𝐢𝐧𝐭𝐨𝐧 𝐒𝐞𝐭: Convenient for you have fun with family friends
                  in the backyard or anywhere, this set including ‎‎2 Badminton
                  Racquet with Cover, 1 Net With Hipkoo Shuttlecock (Pack of 10){' '}
                </li>
                <li>
                  𝐌𝐚𝐭𝐞𝐫𝐢𝐚𝐥: It is made of heavy duty steel which holds the
                  framework of the racquet in place. The racquet is lightweight.
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
                  src={`${process.env.PUBLIC_URL}/images/badminton/secsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/badminton/secsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/badminton/secsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/badminton/secsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Badminton Combo</h2>
              <p className="">
                Hipkoo Sports HXBRSETBL_3COCK_NET Hr 15 Badminton Combo with
                Badminton Bag (2 Rackets, Net, Shuttlecock Pack of 3) Badminton
                Kit (Multicolour)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>Light weight alimunium racket </li>
                <li>Full length cover durable quality </li>
                <li>In-Box Contents: 1 Badminton Complete Sets </li>
                <li>Nylon shuttlecock </li>
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
                  src={`${process.env.PUBLIC_URL}/images/badminton/thrdsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/badminton/thrdsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/badminton/thrdsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/badminton/thrdsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Two Badminton Game Rackets</h2>
              <p className="">
                RETURNGIFTS- Pack of 6 Kits - Each kit has Two Badminton Game
                Rackets and 1 Plastic Shuttle. Birthday Return Gifts for Kids
                Outdoor Game at Wholesale Price.
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Gift this gift to the kids and keep the kids away from mobile
                  and TV{' '}
                </li>
                <li>
                  A first step to create interest of kids in outdoor games
                </li>
                <li>
                  Good excercise and good for kids health and concentration{' '}
                </li>
                <li>Unique different bday return gift for kids </li>
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

export default SportsBadminton;
