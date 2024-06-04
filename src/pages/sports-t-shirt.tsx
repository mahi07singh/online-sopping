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
          content="Learn more about Mohit's Shopping App and our mission to provide the best online shopping experience."
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
