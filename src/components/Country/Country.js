import React from 'react';
import img from '../../components/Moon.jpg'
import './Country.css'
const Country = (props) => {
    const { name, capital, flag, region, topLevelDomain } = props.country;
    console.log(flag)
    // console.log(country);
    return (
        <div >
            <h2>Country Name:{name}</h2>
            <h3>Capital: {capital}</h3>

            <img src={img} alt="" />
            <h4>Country Name:{region}</h4>
            <h5>topLevelDomain:{topLevelDomain}</h5>

        </div>
    );
};

export default Country;