import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Styles from '../../styles/pages/camera.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const GirlPandentProducts: React.FC = () => {
  // Function to handle button click
  const handleFrstBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3KJuWkP', '_blank');
  };

  // Function to handle button click
  const handleSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3KMc8Bs', '_blank');
  };

  // Function to handle button click
  const handleThrdBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3xlW869', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Jewelry & Pendants - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover exquisite jewelry and pendants at Mohit's Shopping App. Find stunning pieces for every occasion and style. Shop now for the best deals on fine jewelry."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Jewelry & Pendants - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Explore a wide selection of exquisite jewelry and pendants at Mohit's Shopping App. Find stunning pieces for every occasion and style. Shop now for the best deals on fine jewelry."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/jewelry-pendants"
        />
        <meta
          name="keywords"
          content="jewelry, pendants, fine jewelry, necklace, earrings, bracelets, rings, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Jewelry & Pendants - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/frstsecone.png`}
                  alt="ZENEME Rhodium-Plated Silver Toned Green Cubic Zirconia studded Floral Shaped Cute Pendant with Earrings Jewellery Set for Girls and Women (Green)."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/frstsecsec.png`}
                  alt="ZENEME Rhodium-Plated Silver Toned Green Cubic Zirconia studded Floral Shaped Cute Pendant with Earrings Jewellery Set for Girls and Women (Green)."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/frstsecthrd.png`}
                  alt="ZENEME Rhodium-Plated Silver Toned Green Cubic Zirconia studded Floral Shaped Cute Pendant with Earrings Jewellery Set for Girls and Women (Green)."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/frstsecfrth.png`}
                  alt="ZENEME Rhodium-Plated Silver Toned Green Cubic Zirconia studded Floral Shaped Cute Pendant with Earrings Jewellery Set for Girls and Women (Green)."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Rhodium-Plated Silver</h2>
              <p className="">
                ZENEME Rhodium-Plated Silver Toned Green Cubic Zirconia studded
                Floral Shaped Cute Pendant with Earrings Jewellery Set for Girls
                and Women (Green)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  2What You Get:- Rhodium-Plated Silver Toned Cute Pendant with
                  Earrings, has Cubic Zirconia studded Floral Shaped, Pendant
                  secured with S-Hook closure and Earrings secured with Post and
                  Back closure.{' '}
                </li>
                <li>
                  Nickel free and Lead free as per International Standards that
                  makes it very skin friendly. The plating is non-allergic and
                  safe for all environments.
                </li>
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
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/secsecone.png`}
                  alt="Om Jewells Blue Crystal Jewellery Combo Of Groovy Necklace Set And Bangle Bracelet For Girls And Women CO1000063"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/secsecsec.png`}
                  alt="Om Jewells Blue Crystal Jewellery Combo Of Groovy Necklace Set And Bangle Bracelet For Girls And Women CO1000063"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/secsecthrd.png`}
                  alt="Om Jewells Blue Crystal Jewellery Combo Of Groovy Necklace Set And Bangle Bracelet For Girls And Women CO1000063"
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/secsecfrth.png`}
                  alt="Om Jewells Blue Crystal Jewellery Combo Of Groovy Necklace Set And Bangle Bracelet For Girls And Women CO1000063"
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Om Jewells</h2>
              <p className="">
                Om Jewells Blue Crystal Jewellery Combo Of Groovy Necklace Set
                And Bangle Bracelet For Girls And Women CO1000063
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>Metal : Metal Alloy, Plating : Rhodium </li>
                <li>Stone : Crystal, Color : Blue; White </li>
                <li>
                  Chain shown in the imag is included in the product. Size of
                  Chain is 18 inches.
                </li>
                <li>
                  Artificial Jewellery for Casual Outings , Size : Pendant:
                  4.6cm x 1.2cm ; Earrings: 4 cm x 1cm
                </li>
                <li>All Om Jewells products are MADE IN INDIA .</li>
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
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/thrdsecone.png`}
                  alt="Gehena By Estele Gold Plated Necklace Set For Women."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/thrdsecsec.png`}
                  alt="Gehena By Estele Gold Plated Necklace Set For Women."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/thrdsecthrd.png`}
                  alt="Gehena By Estele Gold Plated Necklace Set For Women."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/pandent/thrdsecfrth.png`}
                  alt="Gehena By Estele Gold Plated Necklace Set For Women."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Gold Plated Necklace</h2>
              <p className="">
                Gehena By Estele Gold Plated Necklace Set For Women
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Material: Alloy; Colour: Gold; Occasion: Ethnic; Stone Type:
                  Crystal; Stone Color: Multi; Pack Contents: 10 Necklace sets{' '}
                </li>
                <li>
                  Gehena by estele gold plated necklace sets with austrian
                  crystals for girls and women is perfectly suited for wedding
                  party wear.{' '}
                </li>
                <li>
                  It features a lustrous and eye-catching finish which gives a
                  really glamorous touch to your look. Add this classic piece
                  along with workwear or a western outfit to look beautiful.{' '}
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

export default GirlPandentProducts;
