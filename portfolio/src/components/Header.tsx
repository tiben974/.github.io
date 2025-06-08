import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for header styles

const Header: React.FC = () => {
    return (
        <header>
            <h1>Mon Portfolio</h1>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/projects">Projets</Link></li>
                    <li><Link to="/about">À Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;