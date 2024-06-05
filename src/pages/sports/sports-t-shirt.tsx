import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const SportsTShirts: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sports T-Shirts - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore top-quality sports t-shirts at Mohit's Shopping App. Discover a wide range of athletic t-shirts for running, training, and casual wear. Shop now for the best deals on sports apparel."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Sports T-Shirts - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Find the best sports t-shirts at Mohit's Shopping App. Browse our selection of athletic t-shirts for all sports and activities."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/images/sports-tshirts.jpg`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://www.mohitshoppingapp.com/sports-tshirts"
        />
        <meta
          name="keywords"
          content="sports t-shirts, athletic t-shirts, running t-shirts, training t-shirts, casual sportswear, Mohit's Shopping App"
        />
      </Helmet>
      <Container>
        <h1>Sports T-Shirts</h1>
        <p>
          Learn more about Mohit's Shopping App and our mission to provide the
          best online shopping experience.
        </p>
      </Container>
    </>
  );
};

export default SportsTShirts;
