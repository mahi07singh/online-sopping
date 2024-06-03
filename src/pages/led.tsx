import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const LedTv: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>LED TV - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Learn more about Mohit's Shopping App and our mission to provide the best online shopping experience."
        />
      </Helmet>
      <Container>
        <h1>LedTv</h1>
        <p>
          Learn more about Mohit's Shopping App and our mission to provide the
          best online shopping experience.
        </p>
      </Container>
    </>
  );
};

export default LedTv;
