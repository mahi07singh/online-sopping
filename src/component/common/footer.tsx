import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Styles from '../../styles/common/footer.module.css';

const Footer: React.FC = () => {
  return (
    <>
      <Container fluid className={Styles.footer}>
        <Row className="text-sm justify-content-center mt-3">
          {' '}
          {/* Center content horizontally */}
          <Col md={8} className="text-center">
            {' '}
            {/* Center content vertically */}
            <p className={Styles.copyRightText}>
              © 2024 All rights reserved, Diginto Pvt Ltd
            </p>
            <p>
              <Link to="/" className={Styles.footerLink}>
                Home
              </Link>{' '}
              |{' '}
              <Link to="/terms-conditions" className={Styles.footerLink}>
                Terms
              </Link>{' '}
              |{' '}
              <Link to="/privacy-policy" className={Styles.footerLink}>
                Privacy
              </Link>{' '}
              |{' '}
              <Link to="/cookies" className={Styles.footerLink}>
                Cookies
              </Link>{' '}
              |{' '}
              <Link to="/help" className={Styles.footerLink}>
                Help
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
