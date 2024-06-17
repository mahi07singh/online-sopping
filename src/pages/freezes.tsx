import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FaShoppingCart } from 'react-icons/fa';
import Styles from '../styles/pages/led.module.css';

const Freezes: React.FC = () => {
  // Function to handle button click
  const handleFirstButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3yL5WXX', '_blank');
  };

  // Function to handle button click
  const handleSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3yO4x2I', '_blank');
  };

  // Function to handle button click
  const handleThrdButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3VtU5X5', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Freezers - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore top-quality freezers at Mohit's Shopping App. Discover a variety of freezers to keep your food fresh and your kitchen stylish. Shop now for the best deals on freezers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Freezers - Mohit's Shopping App" />
        <meta
          property="og:description"
          content="Find the best freezers at Mohit's Shopping App. Browse our selection of top brands and models to keep your food fresh and organized."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/freezes"
        />
        <meta
          name="keywords"
          content="freezers, refrigerators, kitchen appliances, home appliances, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Freezers - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/freezes/frstsecone.png`}
                  alt="Samsung 183 L, 4 Star, Digital Inverter."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/freezes/frstsecsec.png`}
                  alt="Samsung 183 L, 4 Star, Digital Inverter."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/freezes/frstsecthrd.png`}
                  alt="Samsung 183 L, 4 Star, Digital Inverter."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/freezes/frstsecfrth.png`}
                  alt="Samsung 183 L, 4 Star, Digital Inverter."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Direct-Cool Single Door Refrigerator</h2>
              <p className="">
                Samsung 183 L, 4 Star, Digital Inverter, Direct-Cool Single Door
                Refrigerator (RR20C1824CR/HL, Red, Camellia Purple, Base Stand
                Drawer, 2024 Model)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Capacity 183 liters: Suitable for families with 2 to 3 members
                </li>
                <li>Energy Rating : 4 Star Energy Efficiency </li>
                <li>
                  Manufacturer Warranty : The product comes with a 1 year
                  comprehensive warranty and a 20 years warranty on the digital
                  inverter compressor{' '}
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
                  src={`${process.env.PUBLIC_URL}/images/freezes/secsecone.png`}
                  alt="Godrej 180 L 4 Star Turbo Cooling Technology."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/freezes/secsecsec.png`}
                  alt="Godrej 180 L 4 Star Turbo Cooling Technology."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/freezes/secsecthrd.png`}
                  alt="Godrej 180 L 4 Star Turbo Cooling Technology."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/freezes/secsecfrth.png`}
                  alt="Godrej 180 L 4 Star Turbo Cooling Technology."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Direct Cool Single Door Refrigerator </h2>
              <p className="">
                Godrej 180 L 4 Star Turbo Cooling Technology, 24 Days Farm
                Freshness Direct Cool Single Door Refrigerator With Base Drawer
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Resolution : 4K Ultra HD (3840 x 2160) | Refresh Rate : 60
                  Hertz | Viewing angle : 178 degrees{' '}
                </li>
                <li>Direct Cool Refrigerator: Economical and stylish </li>
                <li>
                  Direct- Cool Refrigerator with Capacity: 180 litres, suitable
                  for a small family{' '}
                </li>
                <li>
                  Shelf type: Made with toughened glass, each shelf has the
                  strength to hold weight of up to 150 kg.{' '}
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
                  src={`${process.env.PUBLIC_URL}/images/freezes/thrdsecone.png`}
                  alt="Whirlpool 192 L 5 Star Icemagic Powercool Inverter ."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/freezes/thrdsecsec.png`}
                  alt="Whirlpool 192 L 5 Star Icemagic Powercool Inverter ."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/freezes/thrdsecthrd.png`}
                  alt="Whirlpool 192 L 5 Star Icemagic Powercool Inverter ."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/freezes/thrdsecfrth.png`}
                  alt="Whirlpool 192 L 5 Star Icemagic Powercool Inverter ."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Direct-Cool Single Door Refrigerator</h2>
              <p className="">
                Whirlpool 192 L 5 Star Icemagic Powercool Inverter Direct-Cool
                Single Door Refrigerator (215 IMPC ROY 5S Inv SAPPHIRE MULIA-Z,
                Base Stand with Drawer)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Single door refrigerator with Insulated Capillary Technology{' '}
                </li>
                <li>Capacity: 192 liters for families with 2-3 members </li>
                <li>Energy Rating - 5 Star energy efficiency </li>
                <li>
                  Storage & Interior Description-Fresh food capacity : 177.7 Ltr
                  | Freezer capacity : 14.3 Ltr | Total no of drawers : 4,
                  shelves : 2 | Shelf Type : Toughened glass shelves | Anti
                  bacterial gasket{' '}
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

export default Freezes;
