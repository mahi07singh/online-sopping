import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Styles from '../../styles/pages/camera.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const GirlSkinCareProducts: React.FC = () => {
  // Function to handle button click
  const handleFrstBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4cpA5dx', '_blank');
  };

  // Function to handle button click
  const handleSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3z04GjM', '_blank');
  };

  // Function to handle button click
  const handleThrdBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3zc7E4w', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Girls' Skincare - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover a range of skincare products for girls at Mohit's Shopping App. Find gentle and effective skincare solutions for girls of all ages. Shop now for the best deals on girls' skincare products."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Girls' Skincare - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Explore a range of skincare products for girls at Mohit's Shopping App. Find gentle and effective skincare solutions for girls of all ages. Shop now for the best deals on girls' skincare products."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app/girls-skin-care"
        />
        <meta
          name="keywords"
          content="girls skincare, girls skincare products, girls face care, girls body care, girls beauty products, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Girls' Skincare - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/frstsecone.png`}
                  alt="POND's Super Light Gel, Oil-Free Moisturizer, 200G, For Hydrated, Glowing Skin, With Hyaluronic Acid & Vitamin E, 24Hr Hydration, Non-Sticky, Spreads Easily & Instantly Absorbs."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/frstsecsec.png`}
                  alt="POND's Super Light Gel, Oil-Free Moisturizer, 200G, For Hydrated, Glowing Skin, With Hyaluronic Acid & Vitamin E, 24Hr Hydration, Non-Sticky, Spreads Easily & Instantly Absorbs."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/frstsecthrd.png`}
                  alt="POND's Super Light Gel, Oil-Free Moisturizer, 200G, For Hydrated, Glowing Skin, With Hyaluronic Acid & Vitamin E, 24Hr Hydration, Non-Sticky, Spreads Easily & Instantly Absorbs."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/frstsecfrth.png`}
                  alt="POND's Super Light Gel, Oil-Free Moisturizer, 200G, For Hydrated, Glowing Skin, With Hyaluronic Acid & Vitamin E, 24Hr Hydration, Non-Sticky, Spreads Easily & Instantly Absorbs."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>POND's Super Light Gel</h2>
              <p className="">
                POND's Super Light Gel, Oil-Free Moisturizer, 200G, For
                Hydrated, Glowing Skin, With Hyaluronic Acid & Vitamin E, 24Hr
                Hydration, Non-Sticky, Spreads Easily & Instantly Absorbs
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  SUPER LIGHTWEIGHT: The Ponds gel moisturizer is a game-changer
                  when it comes to lightweight skincare.{' '}
                </li>
                <li>
                  The gel based moisturizer for oily skin comes with an
                  innovative gel formula that is designed to be super
                  lightweight and non-oily, making it the perfect choice for
                  anyone.
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
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/secsecone.png`}
                  alt="Dot & Key Vitamin C + E Sorbet Super Bright Moisturizer For Face | Vitamin C Face Moisturizer|Fades Pigmentation & Dark Spots, Reduces Skin Dullness|Oil Free & Lightweight | For All Skin Types | 60Ml."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/secsecsec.png`}
                  alt="Dot & Key Vitamin C + E Sorbet Super Bright Moisturizer For Face | Vitamin C Face Moisturizer|Fades Pigmentation & Dark Spots, Reduces Skin Dullness|Oil Free & Lightweight | For All Skin Types | 60Ml."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/secsecthrd.png`}
                  alt="Dot & Key Vitamin C + E Sorbet Super Bright Moisturizer For Face | Vitamin C Face Moisturizer|Fades Pigmentation & Dark Spots, Reduces Skin Dullness|Oil Free & Lightweight | For All Skin Types | 60Ml."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/secsecfrth.png`}
                  alt="Dot & Key Vitamin C + E Sorbet Super Bright Moisturizer For Face | Vitamin C Face Moisturizer|Fades Pigmentation & Dark Spots, Reduces Skin Dullness|Oil Free & Lightweight | For All Skin Types | 60Ml."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Bright Moisturizer</h2>
              <p className="">
                Dot & Key Vitamin C + E Sorbet Super Bright Moisturizer For Face
                | Vitamin C Face Moisturizer|Fades Pigmentation & Dark Spots,
                Reduces Skin Dullness|Oil Free & Lightweight | For All Skin
                Types | 60Ml
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  A lightweight, cream with three types of vitamin C- 100%
                  natural vitamin C from Kakadu Plum, Ethyl Ascorbic Acid &
                  Sodium Ascorbyl Phosphate.{' '}
                </li>
                <li>
                  An antioxidant-rich cream, it helps reduce dullness &
                  intensely moisturizes for super-soft, youthful glowing skin.{' '}
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
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/thrdsecone.png`}
                  alt="DOT & KEY Strawberry Dew Strobe Cream For Face Skin Radiance Cream | Moisturizer & Highlighter For Face | For Dewy Glazed Instant Glow | Boosts Hydration | For All Skin Types | For Women & Men | 30Ml."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/thrdsecsec.png`}
                  alt="DOT & KEY Strawberry Dew Strobe Cream For Face Skin Radiance Cream | Moisturizer & Highlighter For Face | For Dewy Glazed Instant Glow | Boosts Hydration | For All Skin Types | For Women & Men | 30Ml."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/thrdsecthrd.png`}
                  alt="DOT & KEY Strawberry Dew Strobe Cream For Face Skin Radiance Cream | Moisturizer & Highlighter For Face | For Dewy Glazed Instant Glow | Boosts Hydration | For All Skin Types | For Women & Men | 30Ml."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/skin/thrdsecfrth.png`}
                  alt="DOT & KEY Strawberry Dew Strobe Cream For Face Skin Radiance Cream | Moisturizer & Highlighter For Face | For Dewy Glazed Instant Glow | Boosts Hydration | For All Skin Types | For Women & Men | 30Ml."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Strawberry Dew Strobe Cream</h2>
              <p className="">
                DOT & KEY Strawberry Dew Strobe Cream For Face Skin Radiance
                Cream | Moisturizer & Highlighter For Face | For Dewy Glazed
                Instant Glow | Boosts Hydration | For All Skin Types | For Women
                & Men | 30Ml
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  DEWY, GLAZED SKIN INSTANTLY - Flaunt dewy, glazed skin
                  instantly with this highlighting moisturizer{' '}
                </li>
                <li>
                  WORKS AS A MOISTURIZER & HIGHLIGHTER - Provides lightweight
                  moisturization with a beautiful dewy finish.{' '}
                </li>
                <li>
                  FOR ALL SKIN TONES - Corrects discolouration & boosts skin
                  radiance over time.{' '}
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

export default GirlSkinCareProducts;
