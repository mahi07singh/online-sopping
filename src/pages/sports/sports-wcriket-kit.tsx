import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const SportsWCricketKit: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Women's Cricket Kit - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore top-quality women's cricket kits at Mohit's Shopping App. Discover a wide range of cricket bats, balls, protective gear, and accessories designed specifically for women. Shop now for the best deals on cricket equipment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Women's Cricket Kit - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Find the best women's cricket kits at Mohit's Shopping App. Browse our selection of cricket bats, balls, protective gear, and accessories designed for female players."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/images/womens-cricket-kit.jpg`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://www.mohitshoppingapp.com/womens-cricket-kit"
        />
        <meta
          name="keywords"
          content="women's cricket kit, cricket bats for women, women's cricket balls, women's cricket protective gear, cricket accessories for women, Mohit's Shopping App"
        />
      </Helmet>
      <Container>
        <h1>Sports Wooman Cricket Kit</h1>
        <p>
          Learn more about Mohit's Shopping App and our mission to provide the
          best online shopping experience.
        </p>
      </Container>
    </>
  );
};

export default SportsWCricketKit;
