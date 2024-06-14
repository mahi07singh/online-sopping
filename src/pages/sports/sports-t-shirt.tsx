import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Styles from '../../styles/pages/sports.module.css';

const SportsTShirts: React.FC = () => {
  // Function to handle button click
  const handleFirstButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3Ku4J9W', '_blank');
  };

  // Function to handle button click
  const handleSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3Xn0NiS', '_blank');
  };

  // Function to handle button click
  const handleThrdButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3KIklGO', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Sports T-Shirts - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore top-quality sports t-shirts at Mohit's Shopping App. Discover a wide range of athletic t-shirts for running, training, and casual wear. Shop now for the best deals on sports apparel."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Sports T-Shirts - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Find the best sports t-shirts at Mohit's Shopping App. Browse our selection of athletic t-shirts for all sports and activities."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/sports-t-shirts"
        />
        <meta
          name="keywords"
          content="sports t-shirts, athletic t-shirts, running t-shirts, training t-shirts, casual sportswear, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Sports T-Shirts - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-shirts/frstsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-shirts/frstsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-shirts/frstsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-shirts/frstsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Virat Khohli World Cup Jersey</h2>
              <p className="">
                Positivity Sports t20 World Cup Jersey 2024 India
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Select Correct Size: (7 to 8 and 8 to 9 years chest size is 30
                  inches) & (9 to 10 and 10 to 11 years chest size is 32 inches)
                  & (11 to 12 and 12 to 13 years chest size is 34 inches) & (13
                  to 14 and 14 to 15 years chest size is 36 inches) & (15 to 16
                  and Small Chest Size is 36) & Medium Chest Size is 38 & Large
                  Chest Size is 40 & X-Large Chest Size is 42 & XX-Large Chest
                  Size is 44{' '}
                </li>
                <li>100% Polyester</li>
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
                  src={`${process.env.PUBLIC_URL}/images/sports-shirts/secsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-shirts/secsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-shirts/secsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-shirts/secsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2> Ind T20 World Cup Cricket Jersey 2024</h2>
              <p className="">
                Ind T20 World Cup Cricket Jersey 2024
                Rohit_Dhoni,Virat,Hardik,Rishabh,Rahul,Surya,Gill
                (Kids,Boys,Men)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Chest Size: 12-18 to 18-24 Months - 22"; 1 to 3 Years - 24"; 3
                  to 4 Years - 26"; 4 to 6 Years - 28"; 6 to 8 Years - 30"; 8 to
                  10 Years - 32"; 10 to 12 Years - 34"; XS-34"; 13 to 16 Years-
                  36"; S-36"; M-38"; L-40"; XL-42"; XXL-44"{' '}
                </li>
                <li>Do Not Bleach,Hand Wash Only </li>
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
                  src={`${process.env.PUBLIC_URL}/images/sports-shirts/thrdsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-shirts/thrdsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-shirts/thrdsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-shirts/thrdsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Official New CSK Dhoni 7</h2>
              <p className="">
                Sports Cricket Team Official New CSK Dhoni 7 Jersey IPL 2024
                (Kid's, Boy's & Men's)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>Fabric:Polyester </li>
                <li>Fit/Neck:Regular Fit/Round Neck </li>
                <li>Occasion/Pattern:Sports/Printed </li>
                <li>Coverage/Sports:Placement/Cricket </li>
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

export default SportsTShirts;
