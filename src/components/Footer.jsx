import React from 'react';
import '../components/Footer.css'; // Optional if you want to add custom styling
import { NavLink } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{backgroundColor:'black',color:'gold'}} className="footer  py-4">
        

      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} My Golden's Hotel. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy" className=" mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className=" mx-2">Terms of Service</a>
          <a href="/contact" className="mx-2">Contact Us : 03168636759</a>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;
