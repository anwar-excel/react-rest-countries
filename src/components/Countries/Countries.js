import React, { useState, useEffect } from 'react';

import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/rest-countries-data/main/coutries.JSON')
            // fetch('https://restcountries.com/v3/all')

            .then(res => res.json())
            .then(data => setCountries(data))
        // console.log(countries);
    }, [])
    return (
        <div>
            {/* <h2>Hello from Countries:{countries.length}</h2> */}
            {
                countries.map(country => console.log(country))
            }
            <div className="country">
                {
                    countries.map(country => <Country
                        country={country}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;