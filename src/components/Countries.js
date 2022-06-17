import React, { Component, useEffect, useState } from 'react';
import axios from "axios";


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
            <h1>Countries</h1>
            <ul>
                {
                    data.map((country, index) => (<li key={index}>{country.translations.fra.common}</li>))
                }
            </ul>
        </div>
    )
}


export default Countries