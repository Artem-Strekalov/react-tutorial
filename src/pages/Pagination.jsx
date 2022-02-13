import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Countries from "../components/Countries";

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
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Countries</h1>
      <Countries countries={countries} loading={loading} />
    </div>
  );
};
export default Pagination;
