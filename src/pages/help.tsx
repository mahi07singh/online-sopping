import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

const Help: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title className="header-title">Help - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover the best deals on home goods, kitchenware, clothing, jewelry, and tech gadgets at Mohit's Shopping App."
        />
      </Helmet>
      <Container>
        <h1>Help</h1>
        <p>
          Welcome to Mohit's Shopping App! This is help page 
        </p>
      </Container>
    </div>
  );
};

export default Help;
