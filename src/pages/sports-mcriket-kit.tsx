import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const SportsMCricketKit: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sports Man Cricket Kit - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Learn more about Mohit's Shopping App and our mission to provide the best online shopping experience."
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
