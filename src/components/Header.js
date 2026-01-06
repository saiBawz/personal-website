import {  Home, User, FolderKanban, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';


const Header = () => {
    const navItems = [
        { path: '/', label: 'Home', icon: <Home className="me-1" /> },
        { path: '/about', label: 'About', icon: <User className="me-1" /> },
        { path: '/projects', label: 'Projects & Skills', icon: <FolderKanban className="me-1" /> },
        { path: '/contact', label: 'Contact', icon: <Mail className="me-1" /> }
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
            <div className="container">
                <div className="navbar-brand fw-bold fs-4 d-flex align-items-center">
                    Sainabou Bawor
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {navItems.map((item) => (
                        <li key={item.path} className="nav-item mx-1 mx-md-2">
                            <Link
                            to={item.path}
                            className={`nav-link px-3 py-2 rounded-pill d-flex align-items-center ${item.active ? 'active fw-bold bg-primary text-white' : 'text-light hover-opacity'}`}
                            >
                                <span className="me-2">{item.icon}</span>
                                <span className="d-none d-md-inline">{item.label}</span>
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;