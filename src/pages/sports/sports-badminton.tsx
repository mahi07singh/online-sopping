import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const SportsBadminton: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sports Badminton - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover top-quality badminton equipment at Mohit's Shopping App. Browse our wide range of rackets, shuttlecocks, and accessories for players of all levels. Shop now for the best deals on badminton gear."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Sports Badminton - Mohit's Shopping App"
        />
        <meta
          property="og:description"
          content="Find the best badminton equipment at Mohit's Shopping App. Explore our selection of rackets, shuttlecocks, and accessories for beginners and professionals."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/images/badminton.jpg`} // Update the image path accordingly
        />
        <meta
          property="og:url"
          content="https://www.mohitshoppingapp.com/sports-badminton"
        />
        <meta
          name="keywords"
          content="badminton, sports badminton, badminton rackets, shuttlecocks, badminton accessories, Mohit's Shopping App"
        />
      </Helmet>
      <Container>
        <h1>Sports Badminton</h1>
        <p>
          Learn more about Mohit's Shopping App and our mission to provide the
          best online shopping experience.
        </p>
      </Container>
    </>
  );
};

export default SportsBadminton;
