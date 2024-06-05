import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const GirlProducts = () => {
  return (
    <>
      <Helmet>
        <title>Products For Girl's - Mohit's Shopping App</title>
        <meta
          name="description"
          content="Discover the best deals on home goods, kitchenware, clothing, jewelry, and tech gadgets at Mohit's Shopping App."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Home - Mohit's Shopping App" />
        <meta
          property="og:description"
          content="Discover the best deals on home goods, kitchenware, clothing, jewelry, and tech gadgets at Mohit's Shopping App."
        />
        <meta
          property="og:image"
          content={`${process.env.PUBLIC_URL}/favicon.png`}
        />
        <meta property="og:url" content="#" />
      </Helmet>
      {/* Main Heading of the Home Page */}
      <h1 className="visually-hidden">Home - Online Shopping App & Website</h1>
      {/* This is the First Section of Home Page */}
      <Container>
        <h1>Products For Girl's</h1>
        <p>
          Learn more about Mohit's Shopping App and our mission to provide the
          best online shopping experience.
        </p>
      </Container>
    </>
  );
};

export default GirlProducts;
