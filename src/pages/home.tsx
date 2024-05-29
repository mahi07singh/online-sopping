import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Carousel, Container } from 'react-bootstrap';
import Styles from '../styles/pages/home.module.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title className="header-title">Home - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover the best deals on home goods, kitchenware, clothing, jewelry, and tech gadgets at Mohit's Shopping App."
        />
      </Helmet>
      <section>
        <Container fluid style={{ padding: 0, margin: 0 }}>
          <Carousel interval={2000}>
            <Carousel.Item>
              <div className={Styles.overlay}></div>
              <LazyLoadImage
                className={`${Styles.carouselImage} d-block w-100`}
                src={`${process.env.PUBLIC_URL}/slide1.png`}
                alt="First slide"
                effect="blur"
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
                <Button className={Styles.carouselButton} variant="outline-light">Contact</Button>
                <Button className={Styles.carouselButton} variant="info">Product</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className={Styles.overlay}></div>
              <LazyLoadImage
                className={`${Styles.carouselImage} d-block w-100`}
                src={`${process.env.PUBLIC_URL}/slide2.png`}
                alt="Second slide"
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
                <Button className={Styles.carouselButton} variant="outline-light">Contact</Button>
                <Button className={Styles.carouselButton} variant="info">Product</Button>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className={Styles.overlay}></div>
              <LazyLoadImage
                className={`${Styles.carouselImage} d-block w-100`}
                src={`${process.env.PUBLIC_URL}/slide3.png`}
                alt="Third slide"
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
                <Button className={Styles.carouselButton} variant="outline-light">Contact</Button>
                <Button className={Styles.carouselButton} variant="info">Product</Button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
};

export default Home;
