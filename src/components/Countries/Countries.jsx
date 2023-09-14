import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedFlag = flag => {
    console.log('flagged');
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  }

  const handleVisitedCountry = country => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  return (
    <div>
      <h3>Countries {countries.length}</h3>
      <div>
        <h5>Visited Countries: {visitedCountries.length}</h5>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      
      <div className="container">
        <div className="country-container">
        {
          countries.map((country) => <Country 
          key={country.cca2} 
          handleVisitedCountry={handleVisitedCountry}
          handleVisitedFlag={handleVisitedFlag}
          country={country}></Country>)
        }
        </div>
        <div className="flag-container">
          <ul>
            {
              visitedFlags.map(flag => <img key={flag} src={flag} alt="" />)
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Countries;