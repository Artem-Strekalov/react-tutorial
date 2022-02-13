import React from "react";

const Countries = ({ countries, loading }) => {
  if (loading) {
    console.log(countries);
    return <h2>Loading ...</h2>;
  }
  return (
    <ul className="list-group mb-2">
      {countries.map((country, i) => {
        <li className="list-group-item" key={i}>
          {country.name.official}
          <img src={country.flag} alt="" className="ml-2" />
        </li>;
      })}
    </ul>
  );
};
export default Countries;
