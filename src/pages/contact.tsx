import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Get in touch with us for any queries or support at Mohit's Shopping App."
        />
      </Helmet>
      <Container>
        <h1>Contact Us</h1>
        <p>Get in touch with us for any queries or support.</p>
      </Container>
    </>
  );
};

export default Contact;
