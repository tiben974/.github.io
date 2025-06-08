import React from 'react';
import Header from '../components/Header';
import './main.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <section className="personal-info">
                <h1>Bienvenue sur mon portfolio</h1>
                <p>Je suis un développeur passionné par la création de solutions innovantes.</p>
            </section>
            <section className="projects">
                <h2>Mes Projets</h2>
                <ul>
                    <li>Projet 1</li>
                    <li>Projet 2</li>
                    <li>Projet 3</li>
                </ul>
            </section>
        </div>
    );
};

export default Home;