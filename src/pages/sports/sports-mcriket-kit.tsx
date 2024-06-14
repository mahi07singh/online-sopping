import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Styles from '../../styles/pages/sports-cricket.module.css';

const SportsMCricketKit: React.FC = () => {
  // Function to handle button click
  const handleFirstButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3VaNVcL', '_blank');
  };

  // Function to handle button click
  const handleSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3xg9NeX', '_blank');
  };

  // Function to handle button click
  const handleThrdButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4cgYZMD', '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Men's Cricket Kit - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore top-quality men's cricket kits at Mohit's Shopping App. Discover a wide range of cricket bats, balls, protective gear, and accessories. Shop now for the best deals on cricket equipment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Men's Cricket Kit - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Find the best men's cricket kits at Mohit's Shopping App. Browse our selection of cricket bats, balls, protective gear, and accessories for all skill levels."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/images/cricket-kit.jpg`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/sports-mcricket-kit"
        />
        <meta
          name="keywords"
          content="cricket kit, men's cricket kit, cricket bats, cricket balls, cricket protective gear, cricket accessories, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Men's Cricket Kit - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/cricket/frstsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/cricket/frstsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/cricket/frstsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/cricket/frstsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Cricket Kit Combo</h2>
              <p className="">
                SG Nylon Full Cricket Kit Combo with Spofly Brand Stumps Ideal
                for Age Between 10 to 11 Year (Size 5)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Complete Kit bag for youth sizes includes all the gear that
                  you need{' '}
                </li>
                <li>Available in various sizes for different age groups</li>
                <li>Kitbag made from heavy nylon material</li>
                <li>External Bat Packet available</li>
                <li>
                  Cricket Kit Includes : Cricket Bat (with cover) + Legguard +
                  Batting Gloves + Kitbag + Thigh Guard + Arm Guard + Abdo Guard
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
                  src={`${process.env.PUBLIC_URL}/images/cricket/secsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/cricket/secsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/cricket/secsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/cricket/secsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Tournament Cricket</h2>
              <p className="">
                CW Tournament Cricket Training Kit Right & Left Hand Full
                Cricket Kit for Girls & Boys Cricket Kit with All Things in
                Backpack Kit Bag No Wheels (6 for Age 13-12 Year, Right Hand)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  CRICKET HELMET: The superior protector guard which provides
                  the comprehensive coverage from top head till mouth and chin.
                  For stability and quick adjustment nylon strap closure have
                  designed in the helmet.{' '}
                </li>
                <li>
                  BATTING GLOVES: Ideal cricket gloves pair with have design
                  which offers you protection with comfort and gives flexible
                  fit for making grasp on bat handle.{' '}
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
                  src={`${process.env.PUBLIC_URL}/images/cricket/thrdsecone.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/cricket/thrdsecsec.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/cricket/thrdsecthrd.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/cricket/thrdsecfrth.png`}
                  alt="Please Check Your Internet connection.."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Cricket Kit </h2>
              <p className="">
                CW Lefty Academy Full Cricket Kit with Bat Luggage Wheelie Bag
                Helmet Size 3" 4" 5" 6" Full (6 for 11-12 Yrs)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  KASHMIR WILLOW CRICKET BAT. Used to hit a hard leather ball,
                  this cricket bat is expertly crafted using Kashmir willow to
                  provide long-lasting performance on the pitch.{' '}
                </li>
                <li>
                  EXCLUSIVE SHAPE. For optimal performance, the cricket bat
                  boasts a unique shape which delivers superb pick-up. As such,
                  the bat feels lighter, allowing for better control when
                  swinging and hitting.
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

export default SportsMCricketKit;
