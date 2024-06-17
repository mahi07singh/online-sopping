import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Styles from '../../styles/pages/camera.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const GirlSareeProducts: React.FC = () => {
  // Function to handle button click
  const handleFrstBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4eEdmN9', '_blank');
  };

  // Function to handle button click
  const handleSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/45ukvLr', '_blank');
  };

  // Function to handle button click
  const handleThrdBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3VqaCtF', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Girls' Saree - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore a beautiful collection of sarees for girls at Mohit's Shopping App. Find trendy and elegant sarees for girls of all ages. Shop now for the best deals on girls' sarees."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Girls' Saree - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Discover a beautiful collection of sarees for girls at Mohit's Shopping App. Find trendy and elegant sarees for girls of all ages. Shop now for the best deals on girls' sarees."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/images/girl-saree.jpg`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://www.mohitshoppingapp.com/girl-saree"
        />
        <meta
          name="keywords"
          content="girls saree, kids saree, children saree, girls ethnic wear, girls fashion, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">Home - Online Shopping App & Website</h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sarees/frstsecone.png`}
                  alt="AKHILAM Women's Georgette Banarasi Silk Saree with Unstitched Blouse Piece."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sarees/frstsecsec.png`}
                  alt="AKHILAM Women's Georgette Banarasi Silk Saree with Unstitched Blouse Piece."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sarees/frstsecthrd.png`}
                  alt="AKHILAM Women's Georgette Banarasi Silk Saree with Unstitched Blouse Piece."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sarees/frstsecfrth.png`}
                  alt="AKHILAM Women's Georgette Banarasi Silk Saree with Unstitched Blouse Piece."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Banarasi Silk Saree</h2>
              <p className="">
                AKHILAM Women's Georgette Banarasi Silk Saree with Unstitched
                Blouse Piece
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>Saree Color : Off White || Blouse Color : Red </li>
                <li>Saree Fabric : Georgette || Blouse fabric : Georgette</li>
                <li>Pattern : Woven Design || Print : Ethnic Motif</li>
                <li>
                  Saree Work Details : Tassels and Latkans || Saree Border :
                  Zari
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
                  src={`${process.env.PUBLIC_URL}/images/girls/sarees/secsecone.png`}
                  alt="C J Enterprise Women's Pure Banarasi Silk Saree Kanjivaram Style Saree With Blouse Piece For Wedding (Nayra)."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sarees/secsecsec.png`}
                  alt="C J Enterprise Women's Pure Banarasi Silk Saree Kanjivaram Style Saree With Blouse Piece For Wedding (Nayra)."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sarees/secsecthrd.png`}
                  alt="C J Enterprise Women's Pure Banarasi Silk Saree Kanjivaram Style Saree With Blouse Piece For Wedding (Nayra)."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sarees/secsecfrth.png`}
                  alt="C J Enterprise Women's Pure Banarasi Silk Saree Kanjivaram Style Saree With Blouse Piece For Wedding (Nayra)."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Banarasi Silk Saree</h2>
              <p className="">
                C J Enterprise Women's Pure Banarasi Silk Saree Kanjivaram Style
                Saree With Blouse Piece For Wedding (Nayra)
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>Type: Banarasi Silk Saree </li>
                <li>Fabric: Saree: Banarasi Silk || Blouse: Banarasi Silk </li>
                <li>
                  Perfect for Event: Festive Wear Saree || Occasional Wear Saree
                  || Party Wear Saree || Traditional Wear Saree || Wedding Wear
                  Saree || Reception Wear Saree || Butta Sarees Latest Design ||
                  Paisley Sarees For Women
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
                  src={`${process.env.PUBLIC_URL}/images/girls/sarees/thrdsecone.png`}
                  alt="ALAGINI Women's Linen Cotton Woven Embroidery Traditional Saree."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sarees/thrdsecthrd.png`}
                  alt="ALAGINI Women's Linen Cotton Woven Embroidery Traditional Saree."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sarees/thrdsecthrd.png`}
                  alt="ALAGINI Women's Linen Cotton Woven Embroidery Traditional Saree."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/sarees/thrdsecfrth.png`}
                  alt="ALAGINI Women's Linen Cotton Woven Embroidery Traditional Saree."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Traditional Saree</h2>
              <p className="">
                ALAGINI Women's Linen Cotton Woven Embroidery Traditional Saree
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  𝐒𝐚𝐫𝐞𝐞 𝐅𝐚𝐛𝐫𝐢𝐜 : Linen Cotton || 𝐁𝐥𝐨𝐮𝐬𝐞 𝐅𝐚𝐛𝐫𝐢𝐜 : Linen Cotton{' '}
                </li>
                <li>
                  𝐒𝐚𝐫𝐞𝐞 𝐖𝐨𝐫𝐤 : Linen Cotton Thread Embroidered Saree With Temple
                  Woven Zari Border{' '}
                </li>
                <li>
                  𝗢𝗰𝗰𝗮𝘀𝗶𝗼𝗻𝘀 : Party Wear || Festive Wear || Wedding Wear ||
                  Traditional Wear || Best Gift for your loved ones.{' '}
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

export default GirlSareeProducts;
