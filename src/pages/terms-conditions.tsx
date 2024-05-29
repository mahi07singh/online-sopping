import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

const TermsCondition: React.FC = () => {
  return (
    <>
      <Helmet>
        <title className="header-title">
          Terms & Condition - Mohit's Shopping App
        </title>
        <meta
          name="description"
          content="Review our Terms and Conditions to understand the rules and guidelines governing the use of Mohit's Shopping App. By accessing and using our app, you agree to comply with these terms, including provisions related to user conduct, intellectual property rights, and limitations of liability."
        />
      </Helmet>
      <Container>
        <h1>Terms & Condition</h1>
        <p>This is our Terms and Conditions.</p>
      </Container>
    </>
  );
};

export default TermsCondition;
