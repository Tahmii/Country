import React from 'react';

// Un composants parent transmet ces donner a un composant enfants avec les {country}
const Card = ({ country }) => {
    console.log(country)
    return (
        <li className='card'>
                <img src={country.flags.svg} alt={'drapeau' + country.translations.fra.common} />
            <div className='infos'>
                <h2>{country.translations.fra.common}</h2>
                <h3>Capital :{country.capital}</h3>
                <h4> Population : {country.population.toLocaleString()}</h4>

            </div>
        </li>
    );
};

export default Card;