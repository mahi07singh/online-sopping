import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

const Cookies: React.FC = () => {
  return (
    <>
      <Helmet>
        <title className="header-title">Cookies - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Learn about how we use cookies on Mohit's Shopping App to enhance your browsing experience, personalize content, analyze site traffic, and provide targeted advertisements. By continuing to use our app, you consent to the use of cookies as described in our Cookie Policy."
        />
      </Helmet>
      <Container>
        <h1>Cookies</h1>
        <p>This is all Cookies.</p>
      </Container>
    </>
  );
};

export default Cookies;
