import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Helmet>
        <title className="header-title">
          Privacy Policy - Mohit's Shopping App
        </title>
        <meta
          name="description"
          content="Read our Privacy Policy to understand how we collect, use, and protect your personal information when you use Mohit's Shopping App. Your privacy is important to us, and we are committed to safeguarding your data."
        />
      </Helmet>
      <Container>
        <h1>Privacy Policy</h1>
        <p>This is our Privacy Policy</p>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
