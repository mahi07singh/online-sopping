import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const SportsArcery: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sports Archery - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore top-quality archery equipment at Mohit's Shopping App. Discover a wide range of bows, arrows, and accessories for all skill levels. Shop now for the best deals on archery gear."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Sports Archery - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Find the best archery equipment at Mohit's Shopping App. Browse our selection of bows, arrows, and accessories for beginners and professionals."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/images/archery.jpg`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://www.mohitshoppingapp.com/sports-archery"
        />
        <meta
          name="keywords"
          content="archery, sports archery, bows, arrows, archery accessories, Mohit's Shopping App"
        />
      </Helmet>
      <Container>
        <h1>Sports Archery</h1>
        <p>
          Learn more about Mohit's Shopping App and our mission to provide the
          best online shopping experience.
        </p>
      </Container>
    </>
  );
};

export default SportsArcery;
