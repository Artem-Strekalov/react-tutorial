import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Pagin = ({ countriesPerPage, totalCountries, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number, i) => {
          return (
            <li className="page-item" key={i}>
              <a className="page-link" onClick={() => paginate(number)}>
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Pagin;
