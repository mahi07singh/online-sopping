import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Styles from '../../styles/common/footer.module.css';

const Footer: React.FC = () => {
  return (
    <>
      <section className={Styles.footerSection}>
        <Container fluid className={Styles.footer}>
          <Row className="text-sm justify-content-center mt-3">
            {' '}
            {/* Center content horizontally */}
            <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8} className="text-center">
              {' '}
              {/* Center content vertically */}
              <p className={Styles.copyRightText}>
                © 2024 All rights reserved, Mohit's Shopping App
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
      </section>
    </>
  );
};

export default Footer;
