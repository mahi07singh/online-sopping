import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Styles from '../../styles/pages/hanging-rack.module.css';

const HangingRack: React.FC = () => {
  // Function to handle button click
  const handleFirstButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3xrwflk', '_blank');
  };

  // Function to handle button click
  const handleSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4cedXCQ', '_blank');
  };

  // Function to handle button click
  const handleThrdButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3Rscq4p', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Hanging Racks - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore top-quality hanging racks at Mohit's Shopping App. Discover a wide range of stylish and durable hanging racks for all your storage needs. Shop now for the best deals on hanging racks."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Hanging Racks - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Find the best hanging racks at Mohit's Shopping App. Browse our selection of stylish and durable hanging racks for all your storage needs."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/hanging-rack"
        />
        <meta
          name="keywords"
          content="hanging racks, storage racks, stylish hanging racks, durable hanging racks, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Hanging Racks Page */}
      <h1 className="visually-hidden">
        Hanging Racks - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Hanging Racks Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/hanging/frstsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/hanging/frstsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/hanging/frstsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/hanging/frstsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Sports Equipment Organizer Rack</h2>
              <p className="">
                GTC® Sports Equipment Organizer Rack | Multi Sports Gear Storage
                Hanging Rack | with Adjustable Hooks & Steel Rods Sports Rack
                (IT N - 31)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Organize all your sports equipment and gears in one place. It
                  is perfect to hold footballs, volleyballs, basketballs,
                  helmets, cricket bats, and even athletic shoes, t-shirts and
                  many more related stuffs.{' '}
                </li>
                <li>
                  Special hooks hold baseball and softball bats, tennis,
                  badminton, and pickle ball rackets, as well as lacrosse and
                  hockey sticks.
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
      {/* This is the second Section of Hanging Racks Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.secDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/hanging/secsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/hanging/secsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/hanging/secsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/hanging/secsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Arhat Organizers Sports Ball Stand</h2>
              <p className="">
                Portable Multiple Stand For Football Basketball
                Volleyball,Tennis Rackets,Cricket Bat|Freestanding Garage Sports
                & Equipment Organizer(4-Tier W/ Basket)-Carbon Steel
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  High Qualtiy Durable Carbon Steel : This ball storage rack is
                  made of durable high quality carbon steel material, which
                  guarantees stability.
                </li>
                <li>
                  The sports ball oraganizer uses high temperature baking paint
                  anti-rust process, and with a non-slip surface to prevent
                  sliding on hardwood or tiles.{' '}
                </li>
              </ul>
              <Button variant="outline-primary" onClick={handleSecButtonClick}>
                Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      {/* This is the Third Section of Hanging Racks Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.thrdDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/hanging/thrdsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/hanging/thrdsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/hanging/thrdsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/hanging/thrdsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>TSports Equipment Storage Rack</h2>
              <p className="">
                INDIAN DECOR. 50712 (Ten) 10-Hook Wall-Mounted Metal Sports
                Equipment Storage Rack
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Wall hanging metal sports equipment storage organizer with a
                  black powder-coat finish{' '}
                </li>
                <li>
                  10 u-shaped metal hooks can hold rackets, mitts, duffel bags,
                  caps and more
                </li>
                <li>
                  Top shelf provides space for multiple baskets, volleyball and
                  soccer balls to be stored{' '}
                </li>
                <li>Made in India product.</li>
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

export default HangingRack;
