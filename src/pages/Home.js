import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';

const Home = () => {
    return (
        <div>
            <Logo />
            <h1>Accueil</h1>
            <Countries />
        </div>
    );
};

export default Home;