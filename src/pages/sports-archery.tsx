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
          content="Learn more about Mohit's Shopping App and our mission to provide the best online shopping experience."
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
