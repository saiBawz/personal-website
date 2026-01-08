import { useState } from "react";
import {  Home, User, FolderKanban, Mail } from 'lucide-react';
import { Link , useLocation } from 'react-router-dom';
import './Header.css';
// custom css for mobile menu
const Header = ({ isDarkMode}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation(); // for active link highlight

    const navItems = [
        { path: '/', label: 'Home', icon: <Home className="me-1" /> },
        { path: '/about', label: 'About', icon: <User className="me-1" /> },
        { path: '/projects', label: 'Projects & Skills', icon: <FolderKanban className="me-1" /> },
        { path: '/contact', label: 'Contact', icon: <Mail className="me-1" /> }
    ];

    return (
        <nav className={`navbar navbar-expand-lg sticky-top shadow-sm ${
            isDarkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
        }`}>
            <div className="container">
                {/* Brand */}
                <div className="navbar-brand fw-bold fs-4 d-flex align-items-center">
                    Sainabou Bawor
                </div>
                {/* Hamburger button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-controls="navbarNav"
                    aria-expanded={menuOpen}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
              {/* Menu items */}
                <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                        <li key={item.path} className="nav-item mx-1 mx-md-2">
                            <Link
                            to={item.path}
                            className={`nav-link px-3 py-2 rounded-pill d-flex align-items-center ${isActive ? 'active fw-bold bg-primary text-white' : 'text-light hover-opacity'}`}
                            onClick={() => setMenuOpen(false)} // close menu on click
                            >
                                <span className="me-2">{item.icon}</span>
                                <span className="fw-medium">{item.label}</span>
                            </Link>
                        </li>
                        );
                    })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;