import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Styles from '../../styles/pages/sports.module.css';

const SportsArcery: React.FC = () => {
  // Function to handle button click
  const handleFirstButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3X6ASvC', '_blank');
  };

  // Function to handle button click
  const handleSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3KEVVOD', '_blank');
  };

  // Function to handle button click
  const handleThrdButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3KEW3h5', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Sports Archery - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore top-quality archery equipment at Mohit's Shopping App. Discover a wide range of bows, arrows, and accessories for all skill levels. Shop now for the best deals on archery gear."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Sports Archery - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Find the best archery equipment at Mohit's Shopping App. Browse our selection of bows, arrows, and accessories for beginners and professionals."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/sports-archery"
        />
        <meta
          name="keywords"
          content="archery, sports archery, bows, arrows, archery accessories, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Sports Archery - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-archery/frstsecone.png`}
                  alt="Sports Super Archery."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-archery/frstsecsec.png`}
                  alt="Sports Super Archery."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-archery/frstsecthrd.png`}
                  alt="Sports Super Archery."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-archery/frstsecfrth.png`}
                  alt="Sports Super Archery."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Sports Super Archery</h2>
              <p className="">
                Cable World Sports Super Archery Bow and Arrow Set with Dart
                Target Board, Colourful with 3 Suction Cup Tip Arrows
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>Toys and Games </li>
                <li>
                  Cable World This kid bow, and arrow game offer a good exercise
                  for the eyes, which helps to improve concentration in your
                  kids. Through play, children are using eye-hand coordination,
                  wrist rotation, precision, and fine motor movements.Cable
                  World
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
                  src={`${process.env.PUBLIC_URL}/images/sports-archery/secsecone.png`}
                  alt="Sports Super Archery."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-archery/secsecsec.png`}
                  alt="Sports Super Archery."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-archery/secsecthrd.png`}
                  alt="Sports Super Archery."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-archery/secsecfrth.png`}
                  alt="Sports Super Archery."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Sports Super Archery</h2>
              <p className="">
                Cable World Sports Super Archery Bow and Arrow Set with Dart
                Target Board, Colourful with 3 Suction Cup Tip Arrows
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  ☞Toys & Games IMPROVE HAND/EYE COORDINATION: Archery set
                  develops hand-eye co-ordination & sharpens shooting skills.
                  Good exercise for the eyes helps to improve concentration in
                  your kids.{' '}
                </li>
                <li>
                  ☞ NON-TOXIC ABS MATERIAL: This archery bow and arrow set is
                  made of high quality non-toxic ABS material, smooth surface.
                  No danger from the suction arrows.
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
                  src={`${process.env.PUBLIC_URL}/images/sports-archery/thrdsecone.png`}
                  alt="Zrinix Kids Archery."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-archery/thrdsecsec.png`}
                  alt="Zrinix Kids Archery."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-archery/thrdsecthrd.png`}
                  alt="Zrinix Kids Archery."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/sports-archery/thrdsecfrth.png`}
                  alt="Zrinix Kids Archery."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Zrinix Kids Archery</h2>
              <p className="">
                Archery Set Bow & Arrow Toy | Indoor, Outdoor Hunting Game with
                3 Suction Cup Arrow, Bow, Target & Quiver
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Includes - Bow , 3 Suction Cup Arrows, 1Archery Set, 1 Quiver,
                  1 Target , Complete shooting kit.{' '}
                </li>
                <li>
                  Bow: The bow included in a kids' set is usually lightweight
                  and designed to be easy for children to handle.
                </li>
                <li>
                  Arrows: Kid-friendly arrows are included in the set. These
                  arrows typically have safety features, such as blunt or
                  suction cup tips, to prevent injury.
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

export default SportsArcery;
