import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Freezes: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Freeze's - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Learn more about Mohit's Shopping App and our mission to provide the best online shopping experience."
        />
      </Helmet>
      <Container>
        <h1>Freeze's</h1>
        <p>
          Learn more about Mohit's Shopping App and our mission to provide the
          best online shopping experience.
        </p>
      </Container>
    </>
  );
};

export default Freezes;
