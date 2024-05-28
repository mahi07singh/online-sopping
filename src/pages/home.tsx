import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title className='header-title'>Home - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover the best deals on home goods, kitchenware, clothing, jewelry, and tech gadgets at Mohit's Shopping App."
        />
      </Helmet>
      <Container>
        <h1>Home</h1>
        <p>
          Welcome to Mohit's Shopping App! Discover the best deals on home
          goods, kitchenware, clothing, jewelry, and tech gadgets.
        </p>
      </Container>
    </>
  );
};

export default Home;
