import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import Styles from '../styles/pages/home.module.css';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaShoppingCart } from 'react-icons/fa';

const Home: React.FC = () => {
  // this is state for show and hide
  const [isShowContent, setIsShowContent] = useState(false);
  // this is state for show and hide
  const [isShowSptContent, setIsShowSptContent] = useState(false);

  // navigate to oter page
  const navigate = useNavigate();
  // Function to handle button click
  const handleFstButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3R4b4wq', '_blank');
  };

  // Function to handle button click
  const handleSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3R60qoK', '_blank');
  };

  // Function to handle button click
  const handleThdButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/3wReKe9', '_blank');
  };

  // Function to handle button click
  const handleFrthButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open('https://amzn.to/4e2YW8I', '_blank');
  };

  // Function to handle button click
  const handleLedButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://www.amazon.in/TCL-inches-Metallic-Bezel-Less-55V6B/dp/B0CZ6NXNP8/ref=sr_1_2_sspa?dib=eyJ2IjoiMSJ9.Bu8kxZBvtXTXPj6WsMclJnEttgrd-ZGJVwIwyWLP8E2Bt8k7vz8jRJ5qrNZOBMNfIkthen-oPzmSIQViJcrcW_yXHVKnY4JvsuNmFeVshGCfnGglwDmNLbzpgsLz71ZKNltqhqZs7CmZoHzk_W0_eCs2wmIc8KEl7ysGvUHIIF9cjMmOH1DG7KIp82AAjJguvb4evqWTuPiwhD66QCEY5y1b1vmt7mTpd8qG7NEp4QU.nxoahYyoyuO_C4g_y3QtsE4_7r5R0DbSRHL4IgUtBX4&dib_tag=se&keywords=led&qid=1717386265&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
      '_blank'
    );
  };

  // Function to handle button click
  const handleFrzButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://www.amazon.in/Samsung-Inverter-Refrigerator-RR20C1824CR-HL/dp/B0BR4176V7/ref=sr_1_4?crid=1SQDLE51ICYPN&dib=eyJ2IjoiMSJ9.azx4eUzrODE1iNg0ejG2PNBH4727XQbvYAFEFarqOXfafCKU_HcdC5Q-xTlHXGZCN6p0PtxG1YPmrdopG8ca-RfwlYWc_e1KvYrsT2wnVKO5865HgpTbvuLwR1w_LYZbnJpbm6umsU9TaIEgN7wSPgX94a4r8umrtUR3P1OZuLQiQjZNvwOb6l2ne2PRGmN_7cH-my2U_5wmspleN_2lW-zD1C0KTbZ-zMyqqFPvqkI.oWNGPr9kA6h1sUHovLWPlXODG2yzU72MGDgLR8lJgQw&dib_tag=se&keywords=freeze&qid=1717386946&sprefix=freez%2Caps%2C1200&sr=8-4',
      '_blank'
    );
  };

  // second sports section
  // Function to handle button click
  const handleSprtFirButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://www.amazon.in/Positivity-Sports-India-Jersey-World/dp/B0D53HSTJ6/ref=sr_1_52?crid=1GWNHD0RSJK9Y&dib=eyJ2IjoiMSJ9._aMO9iMhNnhggMxaGViSJ62HXGqh6RoIX8JWGJL9wGXwJUu9hpIxj_kvAqXTCR6wTKqXKE5BV_yLMnZ1pMy8JgfBMLRnuiCjGSSZkC3iaUegUMF2vWazMzGALEaQGVI2dn49-ntgqyiav7mfBSvLj8aN1z_DffsTzEP-WhhZn7jPSk2-SaxvitGdgpmP6ZWdEp32b_d4lI7ahnt3jxZBSQ7f2e9_JAZhYqi4ukL7BFc3JYYDQghg3Cm3G4yJ1Z1vc3MxVHxJ_Ij8xvo237UtcLKj-31ohRCMxIJkbJNNTQg.Mu27JDXwHS87Q8lzf_LwB13zdK4IzBAV8huoQ5kt634&dib_tag=se&keywords=sports+equipment&qid=1717388026&sprefix=sports+eq%2Caps%2C1971&sr=8-52',
      '_blank'
    );
  };

  // Function to handle button click
  const handleSprtSecButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://www.amazon.in/Prokick-Running-Spikes-Athletic-Removeable/dp/B0CZXV83JB/ref=sr_1_1_sspa?crid=L7O6GWG0I7HH&dib=eyJ2IjoiMSJ9.Dk1H0zEYL09TyusjY97Ludv-u_ZzViC9m4pq1JOMiyr0MrCIFPdECL1PC8lNGjBUM4OeNpjkM8pXnw21nSgy35_PVjK8CljoKf9W8KcgsP9NtEJ7l0rSBbn5USVdzJBWs8vJZpiglbjEPZS4LFM7H3FxK6sw5o_RmEWyqLHkiTpk9TvNVOIEw-JDEBPz5QuYu1pg8hsjrCO4HfzLDwCn6h5mS5B-7FL-QA1pEtpoyq_VaMFDfaJPg4O_aZAUu-pq52gNijTfjBqexW30eFj-O9jTFxDQMoSOzJrG7Ypsz1w.7m4ZBaqb58zoMEpXzR8erlAX8JxRlNmG5GdmPvjPLMI&dib_tag=se&keywords=running+spikes+for+athletics&qid=1717397571&sprefix=running+spi%2Caps%2C433&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
      '_blank'
    );
  };

  // Function to handle button click
  const handleSprtArcButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://www.amazon.in/Cable-World-Archery-Colourful-Suction/dp/B09QKZX7MV/ref=sr_1_17?content-id=amzn1.sym.5e455782-2b09-4126-83e3-a9dbac6d07bb%3Aamzn1.sym.5e455782-2b09-4126-83e3-a9dbac6d07bb&dib=eyJ2IjoiMSJ9.PoAw28xWXNxkvO1FUfDTBPo-df5OCApin6qKHYslCrxF3xnw7cIP_-P_qHEkMUhFVlSciVdxfee64oyi8Bh5KDd7kTwpi0e1LVPrcJlTUILnknKeMFShGw_RkGDB0r8CeI_9Nyo5CJKr-jqXWKPQE6W2z-fJq-EEuvPzXV-E8t1-EqOCVTMqw7Re09a4ZBfSTLAs64wQV1_B2CoxSDJGuxZARGi3ES8NvMvnqQXt0Io-xBmHeY0qtX68i35vOoZi2gEnzHXZvqc3H9vEb8WkxwzgHgxdCzXYS_mGJPXFrSU.3UcjERnLTBmejzqRcbLFkqaleGrIVDNhyxtlDkwlZHI&dib_tag=se&keywords=sports+items&pd_rd_r=b0032109-14e9-4815-b2c4-14edd8bc3f5e&pd_rd_w=ZPf8P&pd_rd_wg=pdp5e&pf_rd_p=5e455782-2b09-4126-83e3-a9dbac6d07bb&pf_rd_r=3BC81N4SSWYEZG3V9H2Q&qid=1717400407&sr=8-17',
      '_blank'
    );
  };

  // Function to handle button click
  const handleSprtBtmnButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://www.amazon.in/Hipkoo-Full-Badminton-Racket-Shuttlecocks/dp/B07CM7ZYY6/ref=sr_1_19?content-id=amzn1.sym.5e455782-2b09-4126-83e3-a9dbac6d07bb%3Aamzn1.sym.5e455782-2b09-4126-83e3-a9dbac6d07bb&dib=eyJ2IjoiMSJ9.PoAw28xWXNxkvO1FUfDTBPo-df5OCApin6qKHYslCrxF3xnw7cIP_-P_qHEkMUhFVlSciVdxfee64oyi8Bh5KDd7kTwpi0e1LVPrcJlTUILnknKeMFShGw_RkGDB0r8CeI_9Nyo5CJKr-jqXWKPQE6W2z-fJq-EEuvPzXV-E8t1-EqOCVTMqw7Re09a4ZBfSTLAs64wQV1_B2CoxSDJGuxZARGi3ES8NvMvnqQXt0Io-xBmHeY0qtX68i35vOoZi2gEnzHXZvqc3H9vEb8WkxwzgHgxdCzXYS_mGJPXFrSU.3UcjERnLTBmejzqRcbLFkqaleGrIVDNhyxtlDkwlZHI&dib_tag=se&keywords=sports+items&pd_rd_r=b0032109-14e9-4815-b2c4-14edd8bc3f5e&pd_rd_w=ZPf8P&pd_rd_wg=pdp5e&pf_rd_p=5e455782-2b09-4126-83e3-a9dbac6d07bb&pf_rd_r=3BC81N4SSWYEZG3V9H2Q&qid=1717400407&sr=8-19',
      '_blank'
    );
  };

  // Function to handle button click
  const handleSprtWCrKitButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://www.amazon.in/SG-Cricket-Ezeepak-Stumps-Between/dp/B07HT48WG4/ref=sr_1_7?crid=2BWET5EN3VBVE&dib=eyJ2IjoiMSJ9.zqDq2pZyeK6S__3sLmz6fUYYjC7e2Ds87Ccl7ODgxyWNDShfQLPy6thkPVENOV9jZE6n_SuqCa4avrTYMD7IHzPWcREsx2giqXd8amSmI2I50bi6YbIq_4WP13g1DXq-4zBCwlC5X5w_px_kk0cWqmyeYbRlbrkaFF9lkTOGt-2kPKp2q4bp4zP3vvitGRZKC6TjtzI0zZ57yRuOLyHIWDwuBaZpyl0Vd93Kp3rrKtrZ4eIIupqlM1k28GXvVZT2Yktmv735n69JnxMa_VaPL9Owqns8IYKTevR7eITpF9g.1vLVgLDT9Q007GhuRqKvtx7SuFUBJB8uYZmFuwDeFEo&dib_tag=se&keywords=cricket+kit+for+women+full+kit&qid=1717402688&sprefix=cricket+kit+for+woom%2Caps%2C743&sr=8-7',
      '_blank'
    );
  };

  // Function to handle button click
  const handleSprtMCrKitButtonClick = () => {
    // Open the Amazon link in a new tab
    window.open(
      'https://www.amazon.in/SQ-SPORTS-Complete-Cricket-Premium/dp/B0D1KGVNX2/ref=sr_1_1?crid=2UJ0TDV9V9TB9&dib=eyJ2IjoiMSJ9.7D_np7_9F96XrWHdK4G80EnYp0VJQMSuyn_awS5An_svreQzFejNUxPq24k6ya6hPW5-ebHbSmJqlJkvw_L-RAFwd7tNDc0k9IQhfDWIw8XYpvqQHiB8CjWlkVgnQ0lZornArTpY6mTMj-IJs1RMw5ygzkQ2F_9xQ5_pSQG9QUn1YAJXj3tkmauN_wWzzTAvdvpmRsH4kcJ8VNPv6_3MxHdqlytDa9qiXitd21b88gxnS2MZlBDhVT9v1Tha0kJn3GWIilEEkYLMMt7Grh3VUkkqSgiFEiIlMYTMyqwjclg.AWS_ehTAtnyg9glbXCuuuHC3fp3_PoReHcQgUmbvuOo&dib_tag=se&keywords=cricket%2Bkit%2Bfor%2Bboys%2Bof%2B12-14&qid=1717403922&sprefix=cricket%2Bkit%2B%2Caps%2C987&sr=8-1&th=1',
      '_blank'
    );
  };

  // Function to handle image click
  const handleFstImageClick = () => {
    // Navigate to the /about-us route
    navigate('/mobile-phones');
  };

  // Function to handle image click
  const handleSecImageClick = () => {
    // Navigate to the /about-us route
    navigate('/wifi-adapter');
  };

  // Function to handle image click
  const handleThdImageClick = () => {
    // Navigate to the /about-us route
    navigate('/camera');
  };

  // Function to handle image click
  const handleFrthImageClick = () => {
    // Navigate to the /about-us route
    navigate('/soundbar-subwoofer');
  };

  // Function to handle image click
  const handleLedImageClick = () => {
    // Navigate to the /about-us route
    navigate('/led-television');
  };

  // Function to handle image click
  const handleFrzImageClick = () => {
    // Navigate to the /about-us route
    navigate('/freezes');
  };

  // seconed section for sports images links
  // Function to handle image click
  const handleSptFImageClick = () => {
    // Navigate to the /about-us route
    navigate('/sports-t-shirts');
  };

  // Function to handle image click
  const handleSptSecImageClick = () => {
    // Navigate to the /about-us route
    navigate('/sports-spike-shoes');
  };

  // Function to handle image click
  const handleSptArcImageClick = () => {
    // Navigate to the /about-us route
    navigate('/sports-archery');
  };

  // Function to handle image click
  const handleSptBtmnImageClick = () => {
    // Navigate to the /about-us route
    navigate('/sports-badminton');
  };

  // Function to handle image click
  const handleSptWCrKitImageClick = () => {
    // Navigate to the /about-us route
    navigate('/sports-wcriket-kit');
  };

  // Function to handle image click
  const handleSptMCrKitImageClick = () => {
    // Navigate to the /about-us route
    navigate('/sports-mcriket-kit');
  };

  // Function to navigate to contact
  const handleClick = () => {
    // Navigate to the /about-us route
    navigate('/contact');
  };

  return (
    <>
      <Helmet>
        <title>Home - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover the best deals on home goods, kitchenware, clothing, jewelry, and tech gadgets at Mohit's Shopping App."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Home - Mohit's Shopping App" />
        <meta
          property="og:description"
          content="Discover the best deals on home goods, kitchenware, clothing, jewelry, and tech gadgets at Mohit's Shopping App."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`}
        />
        <meta property="og:url" content="#" />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">Home - Online Shopping App & Website</h1>
      {/* This is the First Section of Home Page */}
      <section className={Styles.carouselSection}>
        <Container fluid className={Styles.firstContainer}>
          <Carousel interval={2000}>
            <Carousel.Item>
              <div className={Styles.overlay}></div>
              <img
                className={`${Styles.carouselImage} w-100`}
                src={`${process.env.PUBLIC_URL}/slide1.png`}
                alt="Fashionable clothing for girls"
              />
              <Carousel.Caption className={Styles.carouselCaption}>
                <p className={Styles.carouselTitle}>
                  Explore the Latest Trends in Girls' Fashion
                </p>
                <p className={Styles.carouselText}>
                  Discover an amazing collection of fashionable clothing,
                  accessories, and more for girls. Enjoy a seamless shopping
                  experience with unbeatable deals and top-notch quality at
                  Mohit's Shopping App.
                </p>
                <Button
                  className={Styles.carouselButton}
                  variant="outline-light"
                  onClick={handleClick}
                >
                  Contacts
                </Button>
                <Button
                  className={Styles.carouselButton}
                  variant="info"
                  href="/products"
                >
                  Products
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className={Styles.overlay}></div>
              <img
                className={`${Styles.carouselImage} w-100`}
                src={`${process.env.PUBLIC_URL}/slide2.png`}
                alt="Not Supported"
              />
              <Carousel.Caption className={Styles.carouselCaption}>
                <p className={Styles.carouselTitle}>
                  Discover the Latest Trends in Boys' Fashion
                </p>
                <p className={Styles.carouselText}>
                  Explore a diverse collection of trendy clothing, accessories,
                  and more for boys. Enjoy a hassle-free shopping experience
                  with unbeatable deals and top-quality products at Mohit's
                  Shopping App.
                </p>
                <Button
                  className={Styles.carouselButton}
                  variant="outline-light"
                  onClick={handleClick}
                >
                  Contacts
                </Button>
                <Button className={Styles.carouselButton} variant="info">
                  Products
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className={Styles.overlay}></div>
              <img
                className={`${Styles.carouselImage} w-100`}
                src={`${process.env.PUBLIC_URL}/slide3.png`}
                alt="Not Supported"
              />
              <Carousel.Caption className={Styles.carouselCaption}>
                <p className={Styles.carouselTitle}>
                  Discover the Best Deals on Electronic Devices
                </p>
                <p className={Styles.carouselText}>
                  Explore a wide range of high-quality electronic devices and
                  gadgets. From smartphones and laptops to smart home
                  appliances, find everything you need for your tech needs at
                  competitive prices on Mohit's Shopping App.
                </p>
                <Button
                  className={Styles.carouselButton}
                  variant="outline-light"
                  onClick={handleClick}
                >
                  Contacts
                </Button>
                <Button className={Styles.carouselButton} variant="info">
                  Products
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      {/* This is the Second Section of Home Page */}
      <section style={{ backgroundColor: 'gray' }}>
        <Container>
          <Row className="justify-content-center mb-3">
            <Col xs={12} sm={12} md={4} className="align-item">
              <h2 className="text-white">Electronic Gadgets</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.fSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/first.png`}
                  onClick={handleFstImageClick}
                  className={`${Styles.cardImage} ${Styles.pointer}`}
                  alt="This Image is not Supported."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Redmi 12 5G</Card.Title>
                  <Card.Text>
                    Redmi 12 5G Pastel Blue 4GB RAM 128GB ROM
                  </Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab */}
                  <Button
                    variant="outline-primary"
                    onClick={handleFstButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.fSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/second.png`}
                  className={`${Styles.cardImage} ${Styles.pointer}`}
                  onClick={handleSecImageClick}
                  alt="This Image is not Supported."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>WiFi Adapter</Card.Title>
                  <Card.Text>
                    Generic AR9271 802.11n 150 Mbps Wireless USB
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={handleSecButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.fSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/third.png`}
                  onClick={handleThdImageClick}
                  className={`${Styles.cardImage} ${Styles.pointer}`}
                  alt="This Image is not Supported."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Vlogging Camera </Card.Title>
                  <Card.Text>
                    For Youtube, 3 Inch Ips 64Mp Digital Camera
                  </Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab */}
                  <Button
                    variant="outline-primary"
                    onClick={handleThdButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.fSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/fourth.png`}
                  className={`${Styles.cardImage} ${Styles.pointer}`}
                  onClick={handleFrthImageClick}
                  alt="This Image is not Supported."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>WiFi Adapter</Card.Title>
                  <Card.Text>
                    Generic AR9271 802.11n 150 Mbps Wireless USB
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={handleFrthButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {isShowContent ? (
            <section>
              <Container>
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Card className={Styles.fSecCard}>
                      <Card.Img
                        variant="top"
                        src={`${process.env.PUBLIC_URL}/images/home/led.png`}
                        onClick={handleLedImageClick}
                        className={`${Styles.cardImage} ${Styles.pointer}`}
                        alt="This Image is not Supported."
                      />
                      <hr className={Styles.hr} />
                      <Card.Body>
                        <Card.Title>Ultra HD Smart LED</Card.Title>
                        <Card.Text>
                          TCL 139 cm Metallic Bezel-Less Series 4K Ultra HD
                          Smart LED
                        </Card.Text>
                        <Button
                          variant="outline-primary"
                          onClick={handleLedButtonClick}
                        >
                          Buy Now{' '}
                          <FaShoppingCart style={{ marginLeft: '3px' }} />
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Card className={Styles.fSecCard}>
                      <Card.Img
                        variant="top"
                        src={`${process.env.PUBLIC_URL}/images/home/freeze.png`}
                        className={`${Styles.cardImage} ${Styles.pointer}`}
                        onClick={handleFrzImageClick}
                        alt="This Image is not Supported."
                      />
                      <hr className={Styles.hr} />
                      <Card.Body>
                        <Card.Title>Samsung 183 L, 4 Star</Card.Title>
                        <Card.Text>
                          Digital Inverter, Direct-Cool Single Door Refrigerator
                        </Card.Text>
                        <Button
                          variant="outline-primary"
                          onClick={handleFrzButtonClick}
                        >
                          Buy Now{' '}
                          <FaShoppingCart style={{ marginLeft: '3px' }} />
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : (
            <Row className="justify-content-center mt-3">
              <Col xs={12} sm={12} md={2} className="align-item">
                <Button
                  className="align-item"
                  variant="outline-info"
                  onClick={() => setIsShowContent(true)}
                >
                  View More <FaArrowRight style={{ marginLeft: '3px' }} />
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      {/* This is the Third Section of Home Page */}
      <section>
        <Container>
          <Row className="justify-content-center mb-3">
            <Col xs={12} sm={12} md={4} className="align-item">
              <h2>Sports Equipment</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.secSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/virat.png`}
                  onClick={handleSptFImageClick}
                  className={`${Styles.cardSecImage} ${Styles.pointer}`}
                  alt="This Image is not Supported."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>India t20 Jersey</Card.Title>
                  <Card.Text>
                    Positivity Sports India t20 Jersey 2024 World Cup
                  </Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab */}
                  <Button
                    variant="outline-primary"
                    onClick={handleSprtFirButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.secSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/spike.png`}
                  className={`${Styles.cardSecImage} ${Styles.pointer}`}
                  onClick={handleSptSecImageClick}
                  alt="This Image is not Supported."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Turbo Running Spikes</Card.Title>
                  <Card.Text>
                    Athletic Spikes Track & Field Shoes for Mens Spikes
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={handleSprtSecButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.secSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/archery.png`}
                  onClick={handleSptArcImageClick}
                  className={`${Styles.cardSecImage} ${Styles.pointer}`}
                  alt="This Image is not Supported."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Sports Super Archery </Card.Title>
                  <Card.Text>
                    Archery Bow and Arrow Set with Dart Target Board
                  </Card.Text>
                  {/* Button with onClick event to open Amazon link in new tab */}
                  <Button
                    variant="outline-primary"
                    onClick={handleSprtArcButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
              <Card className={Styles.secSecCard}>
                <Card.Img
                  variant="top"
                  src={`${process.env.PUBLIC_URL}/images/home/badminton.png`}
                  className={`${Styles.cardSecImage} ${Styles.pointer}`}
                  onClick={handleSptBtmnImageClick}
                  alt="This Image is not Supported."
                />
                <hr className={Styles.hr} />
                <Card.Body>
                  <Card.Title>Sports Badminton Kit</Card.Title>
                  <Card.Text>
                    2 Wide Body Shuttle Bat with Cover,10 Nylon Shuttles
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={handleSprtBtmnButtonClick}
                  >
                    Buy Now <FaShoppingCart style={{ marginLeft: '3px' }} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {isShowSptContent ? (
            <section>
              <Container>
                <Row className="justify-content-center">
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Card className={Styles.secSecCard}>
                      <Card.Img
                        variant="top"
                        src={`${process.env.PUBLIC_URL}/images/home/wcricket-kit.png`}
                        onClick={handleSptWCrKitImageClick}
                        className={`${Styles.cardSecImage} ${Styles.pointer}`}
                        alt="This Image is not Supported."
                      />
                      <hr className={Styles.hr} />
                      <Card.Body>
                        <Card.Title>CW SG Nylon Cricket Kit</Card.Title>
                        <Card.Text>
                          Combo with Spofly Brand Ideal for Age Between
                          10 to 11 Year
                        </Card.Text>
                        <Button
                          variant="outline-primary"
                          onClick={handleSprtWCrKitButtonClick}
                        >
                          Buy Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Card className={Styles.secSecCard}>
                      <Card.Img
                        variant="top"
                        src={`${process.env.PUBLIC_URL}/images/home/mcricket-kit.png`}
                        className={`${Styles.cardSecImage} ${Styles.pointer}`}
                        onClick={handleSptMCrKitImageClick}
                        alt="This Image is not Supported."
                      />
                      <hr className={Styles.hr} />
                      <Card.Body>
                        <Card.Title>
                          Virat Kolhi Complete Cricket Kit
                        </Card.Title>
                        <Card.Text>
                          SQ SPORTS MRF Grand Edition (Genius) VK-18 Cricket Kit
                        </Card.Text>
                        <Button
                          variant="outline-primary"
                          onClick={handleSprtMCrKitButtonClick}
                        >
                          Buy Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </section>
          ) : (
            <Row className="justify-content-center mt-3">
              <Col xs={12} sm={12} md={2} className="align-item">
                <Button
                  className="align-item "
                  variant="outline-info"
                  onClick={() => setIsShowSptContent(true)}
                >
                  View More <FaArrowRight style={{ marginLeft: '3px' }} />
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
};

export default Home;
