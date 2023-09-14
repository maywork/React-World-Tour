
import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountry, handleVisitedFlag}) => {

  const {name, flags, capital, population, area, cca3} = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => setVisited(!visited);

  const passWithParams = () => {
    handleVisitedCountry(country);
    // console.log(country);
    handleVisitedFlag(country.flags.png);
  }

  return (
    <div className={`country ${visited ? 'visited' : 'not-visited'}`}>
      <h2>Country: {name?.common}</h2>
      <h3>Capital: {capital}</h3>
      <img src={flags.png} alt="" />
      <p style={{color:'seagreen'}}>Population: {population}, Area: {area}</p>
      <p><small>Code: {cca3}</small></p>
      <button style={{margin:'10px'}} onClick={passWithParams}>Add to list</button>
      <button style={{margin:'10px'}} onClick={handleVisited}>{
        visited ? 
      'Visited' : 'Click to mark visited'
    }</button>
      {visited ? 
      <p style={{color:'palegreen'}}>
        You have visited {name?.common}
      </p> : <p style={{color:'lightgray'}}>You have yet to visit {name?.common}</p>}
    </div>
  );
};

export default Country;