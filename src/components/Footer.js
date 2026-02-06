import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-copyright">
          © 2026 Metavara Technologies Pvt Ltd - All Rights Reserved.
        </div>
        <div className="footer-powered">
          Powered by{' '}
          <a
            href="https://www.godaddy.com/websites/website-builder?isc=pwugc&utm_source=wsb&utm_medium=applications&utm_campaign=en-in_corp_applications_base"
            target="_blank"
            rel="noopener noreferrer"
          >
            GoDaddy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
