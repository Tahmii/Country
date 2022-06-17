import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
import Card from './Card';


const Countries = () => {

    const [data, setData] = useState([]);
    // declaration d'une variable 
    const [hello, setHello] = useState(['Hello My friends']);
    // Le useEffect se joue lorsque le composant est mis en place 
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data));
    }, []);
    return (
        <div className='countries'>
            <ul className='radio-button'>

            </ul>
            <ul>
                {
                    data.map((country, index) => (<Card key={index} country={country}/>))
                }
            </ul>
        </div>
    )
}


export default Countries