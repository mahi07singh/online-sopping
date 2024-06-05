import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const SportsMCricketKit: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Men's Cricket Kit - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Explore top-quality men's cricket kits at Mohit's Shopping App. Discover a wide range of cricket bats, balls, protective gear, and accessories. Shop now for the best deals on cricket equipment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Men's Cricket Kit - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Find the best men's cricket kits at Mohit's Shopping App. Browse our selection of cricket bats, balls, protective gear, and accessories for all skill levels."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/images/cricket-kit.jpg`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://www.mohitshoppingapp.com/mens-cricket-kit"
        />
        <meta
          name="keywords"
          content="cricket kit, men's cricket kit, cricket bats, cricket balls, cricket protective gear, cricket accessories, Mohit's Shopping App"
        />
      </Helmet>
      <Container>
        <h1>Sports Man Cricket Kit</h1>
        <p>
          Learn more about Mohit's Shopping App and our mission to provide the
          best online shopping experience.
        </p>
      </Container>
    </>
  );
};

export default SportsMCricketKit;
