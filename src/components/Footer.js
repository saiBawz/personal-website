import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Home, User, FolderKanban, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5>Sainabou Bawor</h5>
            <p className="mb-1">
                Innovation and impact with technology
            </p>
            <small>© All rights reserved.</small>
          </div>
          
          {/* Right Column */}
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            {/* Social Links */}
            <div className="social-links mb-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light me-3 text-decoration-none"
                aria-label="GitHub"
              >
                <Github size={24} className="d-inline-block" />
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light me-3 text-decoration-none"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} className="d-inline-block" />
              </a>
              
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light me-3 text-decoration-none"
                aria-label="Twitter"
              >
                <Twitter size={24} className="d-inline-block" />
              </a>
              
              <a 
                href="mailto:you@example.com" 
                className="text-light text-decoration-none"
                aria-label="Email"
              >
                <Mail size={24} className="d-inline-block" />
              </a>
            </div>
            
            {/* Footer Navigation Links */}
            <div className="footer-links">
              <Link 
                to="/" 
                className="text-light me-3 text-decoration-none d-inline-flex align-items-center"
              >
                <Home size={16} className="me-1" />
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="text-light me-3 text-decoration-none d-inline-flex align-items-center"
              >
                <User size={16} className="me-1" />
                About
              </Link>
              
              <Link 
                to="/projects" 
                className="text-light me-3 text-decoration-none d-inline-flex align-items-center"
              >
                <FolderKanban size={16} className="me-1" />
                Projects
              </Link>
              
              <Link 
                to="/contact" 
                className="text-light text-decoration-none d-inline-flex align-items-center"
              >
                <Phone size={16} className="me-1" />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;