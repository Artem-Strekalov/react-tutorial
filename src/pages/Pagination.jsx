import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Countries from "../components/Countries";
import Pagin from "../components/Pagin";
import 'bootstrap/dist/css/bootstrap.min.css'

const Pagination = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(res.data);
      setLoading(false);
    };
    getCountries();
  }, []);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const countCountry = countries.slice(firstCountryIndex, lastCountryIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Countries</h1>
      <Countries countries={countCountry} loading={loading} />
      <Pagin
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />
      <button className="btn btn-primary" onClick={prevPage}>
        Prev Page
      </button>
      <button className="btn btn-primary ms-2" onClick={nextPage}>
        Next Page
      </button>
    </div>
  );
};
export default Pagination;
