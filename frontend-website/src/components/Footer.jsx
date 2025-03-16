import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">About Us</h5>
            <p className="text-white-50">Trolley.AI is your intelligent travel companion, helping you discover and explore the wonders of Tamil Nadu with personalized recommendations and expert guidance.</p>
          </div>
          
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="mb-3">Links</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-white-50 text-decoration-none">Privacy</a></li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h5 className="mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50 text-decoration-none">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white-50 text-decoration-none">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white-50 text-decoration-none">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white-50 text-decoration-none">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-4 bg-white-50" />
        
        <div className="text-center text-white-50">
          <p className="mb-0">&copy; {new Date().getFullYear()} Trolley.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;