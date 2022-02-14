import React from "react";

const Countries = ({ countries, loading }) => {
  if (loading) {
    console.log(countries);
    return <h2>Loading ...</h2>;
  }
  return (
    <ul className="list-group mb-2">
      {countries.map((country, i) => {
        return (
          <li className="list-group-item" key={i}>
            {country.name.common}
            <img
              src={country.flags.png}
              alt=""
              className="ml-2"
              style={{ width: "25px" }}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default Countries;
