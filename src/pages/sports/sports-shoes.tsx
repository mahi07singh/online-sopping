import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const SportsShoes: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sports Shoes - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore top-quality sports shoes at Mohit's Shopping App. Discover a wide range of athletic footwear for running, training, and casual wear. Shop now for the best deals on sports shoes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Sports Shoes - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Find the best sports shoes at Mohit's Shopping App. Browse our selection of running shoes, training shoes, and casual sneakers for all activities."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/images/sports-shoes.jpg`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://www.mohitshoppingapp.com/sports-shoes"
        />
        <meta
          name="keywords"
          content="sports shoes, athletic footwear, running shoes, training shoes, casual sneakers, Mohit's Shopping App"
        />
      </Helmet>
      <Container>
        <h1>Sports Shoes</h1>
        <p>
          Learn more about Mohit's Shopping App and our mission to provide the
          best online shopping experience.
        </p>
      </Container>
    </>
  );
};

export default SportsShoes;
