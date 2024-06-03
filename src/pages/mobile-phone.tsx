import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const MobilePhones: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mobile Phone - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Learn more about Mohit's Shopping App and our mission to provide the best online shopping experience."
        />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">Home - Online Shopping App & Website</h1>
      {/* This is the First Section of Home Page */}
      <section>
        <Container>
          <h1>Mobile</h1>
          <p>
            Learn more about Mohit's Shopping App and our mission to provide the
            best online shopping experience.
          </p>
        </Container>
      </section>
    </>
  );
};

export default MobilePhones;
