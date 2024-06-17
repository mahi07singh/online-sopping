import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Styles from '../../styles/pages/camera.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const GirlBraProducts: React.FC = () => {
  // Function to handle button click
  const handleFrstBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4cjDkmS', '_blank');
  };

  // Function to handle button click
  const handleSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3VlYb26', '_blank');
  };

  // Function to handle button click
  const handleThrdBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3z5Su0Q', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Women's Bras - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover a wide selection of women's bras at Mohit's Shopping App. Find the perfect fit and style for every occasion. Shop now for the best deals on bras."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Women's Bras - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Explore a variety of women's bras at Mohit's Shopping App. Find the perfect fit and style for all occasions. Shop now for the best deals."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/girls-bras"
        />
        <meta
          name="keywords"
          content="women's bras, bra, lingerie, bralette, push-up bras, sports bras, strapless bras, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Women's Bras - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/frstsecone.png`}
                  alt="Clovia Women's Medium Impact Padded Colourblocked Racerback Sports Bra with Front Zipper."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/frstsecsec.png`}
                  alt="Clovia Women's Medium Impact Padded Colourblocked Racerback Sports Bra with Front Zipper."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/frstsecthrd.png`}
                  alt="Clovia Women's Medium Impact Padded Colourblocked Racerback Sports Bra with Front Zipper."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/frstsecfrth.png`}
                  alt="Clovia Women's Medium Impact Padded Colourblocked Racerback Sports Bra with Front Zipper."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Sports Bra</h2>
              <p className="">
                Clovia Women's Medium Impact Padded Colourblocked Racerback
                Sports Bra with Front Zipper
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>Product Type: Sports Bra</li>
                <li>Fabric: Polyester,Spandex</li>
                <li>Pad Type: Padded</li>
                <li>Wire Type: Wire Free</li>
                <li>Closure: Zipper</li>
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
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/secsecone.png`}
                  alt="Fabluk Cotton Sports Bra for Yoga, Sports, Gym & Workout -
                Breathable, Supportive, and Stylish Everyday Wear, Ideal for All
                Women."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/secsecsec.png`}
                  alt="Fabluk Cotton Sports Bra for Yoga, Sports, Gym & Workout -
                Breathable, Supportive, and Stylish Everyday Wear, Ideal for All
                Women."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/secsecthrd.png`}
                  alt="Fabluk Cotton Sports Bra for Yoga, Sports, Gym & Workout -
                Breathable, Supportive, and Stylish Everyday Wear, Ideal for All
                Women."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/secsecfrth.png`}
                  alt="Fabluk Cotton Sports Bra for Yoga, Sports, Gym & Workout -
                Breathable, Supportive, and Stylish Everyday Wear, Ideal for All
                Women."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Cotton Sports Bra</h2>
              <p className="">
                Fabluk Cotton Sports Bra for Yoga, Sports, Gym & Workout -
                Breathable, Supportive, and Stylish Everyday Wear, Ideal for All
                Women
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  🌿 Ultimate Comfort - Delight in the caress of high-quality
                  cotton that promises breathability and all-day comfort.
                  Perfect for any activity, from intense workouts to casual
                  lounging. 🌬️👚{' '}
                </li>
                <li>
                  💪 Robust Support - Tackle any challenge with confidence! Our
                  sports bra features wide straps and a strong elastic band,
                  ensuring you feel secure during high-impact exercises like
                  running and jumping. 🏃‍♀️🔒{' '}
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
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/thrdsecone.png`}
                  alt="Pack of 4 Cotton Seamless Wire-Free Sports Bras for Women - Non-Padded, Regular Fit Sports Blouse in Multicolor."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/thrdsecsec.png`}
                  alt="Pack of 4 Cotton Seamless Wire-Free Sports Bras for Women - Non-Padded, Regular Fit Sports Blouse in Multicolor."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/thrdsecthrd.png`}
                  alt="Pack of 4 Cotton Seamless Wire-Free Sports Bras for Women - Non-Padded, Regular Fit Sports Blouse in Multicolor."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/bras/thrdsecfrth.png`}
                  alt="Pack of 4 Cotton Seamless Wire-Free Sports Bras for Women - Non-Padded, Regular Fit Sports Blouse in Multicolor."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Wire-Free Sports Bras </h2>
              <p className="">
                Pack of 4 Cotton Seamless Wire-Free Sports Bras for Women -
                Non-Padded, Regular Fit Sports Blouse in Multicolor
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Premium Quality Cotton: Made from soft and breathable cotton
                  fabric for all-day comfort.{' '}
                </li>
                <li>
                  Seamless Design: Ensures a smooth appearance under clothing,
                  reducing visible lines.{' '}
                </li>
                <li>
                  Wire-Free Comfort: Offers maximum support without the
                  discomfort of wires, perfect for everyday wear.{' '}
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

export default GirlBraProducts;
