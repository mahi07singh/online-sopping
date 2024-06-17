import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Styles from '../../styles/pages/camera.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const GirlKurtiProducts: React.FC = () => {
  // Function to handle button click
  const handleFrstBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4cnzIjJ', '_blank');
  };

  // Function to handle button click
  const handleSecBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3VGxBSF', '_blank');
  };

  // Function to handle button click
  const handleThrdBuy = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4cjDcni', '_blank');
  };
  return (
    <>
      <Helmet>
        <title>Girls' Kurtis - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore a wide range of products for girls at Mohit's Shopping App. Find clothing, accessories, toys, and more for girls of all ages. Shop now for the best deals on Girls' Kurtis."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Girls' Kurtis - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Discover a wide range of products for girls at Mohit's Shopping App. Find clothing, accessories, toys, and more for girls of all ages. Shop now for the best deals on Girls' Kurtis."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://mohit-online-shopping.netlify.app//girls-products"
        />
        <meta
          name="keywords"
          content="girls products, girls clothing, girls accessories, girls toys, girls fashion, Mohit's Shopping App"
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">
        Girls' Kurtis - Online Shopping App & Website
      </h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={6} className={Styles.column}>
              <div className={`${Styles.imgBox} ${Styles.firstDiv}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/kurtis/frstsecone.png`}
                  alt="GoSriKi Women Kurta with Pant & Dupatta."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/kurtis/frstsecsec.png`}
                  alt="GoSriKi Women Kurta with Pant & Dupatta."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/kurtis/frstsecthrd.png`}
                  alt="GoSriKi Women Kurta with Pant & Dupatta."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/kurtis/frstsecfrth.png`}
                  alt="GoSriKi Women Kurta with Pant & Dupatta."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Women Kurta </h2>
              <p className="">
                GoSriKi Women Kurta with Pant & Dupatta
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Kurta Set Fabric: Cotton Blend || Kurta Set Color :- Purple
                </li>
                <li>
                  This set includes: 1 Kurta and 1 Pant with Dupatta || Work :-
                  Embroidered || Neck Style:- V-Neck
                </li>
                <li>
                  Colour Declaration : There might be slight variation in the
                  actual color of the product due to different screen
                  resolutions.
                </li>
                <li>
                  Ocassion: Traditional wear, Casual Wear, party wear, evening
                  wear,Please Click On Brand Name "GoSriKi" For More Products.
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
                  src={`${process.env.PUBLIC_URL}/images/girls/kurtis/secsecone.png`}
                  alt="TRENDMALLS Women's Chaderi Cotton Embroidery Salwar Suit Set Kurta Pant with Dupatta Grey Kurta Set for Women."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/kurtis/secsecsec.png`}
                  alt="TRENDMALLS Women's Chaderi Cotton Embroidery Salwar Suit Set Kurta Pant with Dupatta Grey Kurta Set for Women."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/kurtis/secsecthrd.png`}
                  alt="TRENDMALLS Women's Chaderi Cotton Embroidery Salwar Suit Set Kurta Pant with Dupatta Grey Kurta Set for Women."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/kurtis/secsecfrth.png`}
                  alt="TRENDMALLS Women's Chaderi Cotton Embroidery Salwar Suit Set Kurta Pant with Dupatta Grey Kurta Set for Women."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Embroidery Salwar Suit</h2>
              <p className="">
                TRENDMALLS Women's Chaderi Cotton Embroidery Salwar Suit Set
                Kurta Pant with Dupatta Grey Kurta Set for Women
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>
                  Suit Fabric: Kurta,Salwar:Chanderi Cotton; Dupatta: Soft
                  Organza{' '}
                </li>
                <li>Color: Grey|| Sleeves Type: 3/4|| Neckline: Round Neck </li>
                <li>Style: Straight Kurta Sharara Set|| Work: Embroidery</li>
                <li>
                  Length: Kurta: 44 In; Sleeve: 17 In|Salwar: 38 In |Dupatta:
                  2.25 mt [The model (height 5'8) is wearing a size S]
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
                  src={`${process.env.PUBLIC_URL}/images/girls/kurtis/thrdsecone.png`}
                  alt="TRENDMALLS Women's Georgette Stitched Kurti for Women II Indian Style II Anarkali II II II 2023 Stylish II Gown II Kurta Set."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/kurtis/thrdsecsec.png`}
                  alt="TRENDMALLS Women's Georgette Stitched Kurti for Women II Indian Style II Anarkali II II II 2023 Stylish II Gown II Kurta Set."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/kurtis/thrdsecthrd.png`}
                  alt="TRENDMALLS Women's Georgette Stitched Kurti for Women II Indian Style II Anarkali II II II 2023 Stylish II Gown II Kurta Set."
                  className={`${Styles.imageStyle} pointer`}
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/girls/kurtis/thrdsecfrth.png`}
                  alt="TRENDMALLS Women's Georgette Stitched Kurti for Women II Indian Style II Anarkali II II II 2023 Stylish II Gown II Kurta Set."
                  className={`${Styles.imageStyle} pointer`}
                />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className={Styles.firstColText}>
              <h2>Stitched Kurti</h2>
              <p className="">
                TRENDMALLS Women's Georgette Stitched Kurti for Women II Indian
                Style II Anarkali II II II 2023 Stylish II Gown II Kurta Set
                <hr />
                <span className="bold d-block mt-2">About this item</span>
              </p>
              <ul>
                <li>Kurti Fabric : Georgette Blooming || Color: Morpech </li>
                <li>
                  Sizes: Small(36-37), Medium(38-39), Large(40-41),
                  XL-Large(42-43), XXL-Large(44-45) (in inches){' '}
                </li>
                <li>
                  Style: Flare Long Kurti Gown || Length: 60 Inches || Sleeve :
                  Long Sleeve (19 Inches){' '}
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

export default GirlKurtiProducts;
