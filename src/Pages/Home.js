import React, { useState, useEffect } from "react";
import { getAllCountries } from "../Services";
import CountryCard from "../Components/CountryCard";
import Header from "../Components/Header";
import Nav from "../Components/Nav";
import "./Home.css";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

function Home() {
  const [allCountriesList, setAllCountriesList] = useState([]);
  const [filteredAllCountriesList, setFilteredAllCountriesList] = useState([]);
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState("");

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const handleCountryNameChange = (event) => {
    setCountryName(event.target.value);
  };

  useEffect(() => {
    getAllCountries().then((result) => {
      const countries = result.data;
      setAllCountriesList(countries);
      setFilteredAllCountriesList(countries);
    });
  }, []);

  useEffect(() => {
    console.log("Region or country name changed: ", region, countryName);
    if (region === "" && countryName === "") {
      setFilteredAllCountriesList(allCountriesList);
    } else {
      let filteredCountries = allCountriesList;

      if (region.length) {
        // Filtering based on the region
        filteredCountries = filteredCountries.filter((country) => {
          if (country.region === region) return true;
          return false;
        });
      }

      if (countryName.length) {
        // Filtering based on country name
        filteredCountries = filteredCountries.filter((country) => {
          const lowercaseName = country.name.toLowerCase();
          if (lowercaseName.includes(countryName.toLowerCase())) return true;
          return false;
        });
      }

      setFilteredAllCountriesList(filteredCountries);
    }
  }, [region, allCountriesList, countryName]);

  return (
    <div className="App">
      <div className="bg"></div>
      <Nav />
      <Header />
      <br />
      <div className="filters-wrapper">
        <TextField
          id="outlined-basic"
          label="Filter by name"
          variant="outlined"
          onChange={handleCountryNameChange}
          value={countryName}
        />
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            Filter by Region
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={region}
            label="Filter by Region"
            onChange={handleRegionChange}
          >
            <MenuItem value={""}>All</MenuItem>
            <MenuItem value={"Africa"}>Africa</MenuItem>
            <MenuItem value={"Americas"}>America</MenuItem>
            <MenuItem value={"Asia"}>Asia</MenuItem>
            <MenuItem value={"Europe"}>Europe</MenuItem>
            <MenuItem value={"Oceania"}>Oceania</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="country-card-wrapper">
        {filteredAllCountriesList.map((country) => (
          <Link
            to={`/countries/${country.alpha3Code}`}
            key={country.alpha3Code}
            style={{ textDecoration: "none" }}
          >
            <CountryCard
              name={country.name}
              capital={country.capital}
              population={country.population}
              flagUrl={country.flags.png}
            />
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="footer"
      style={{ backgroundColor: "black", color: "white", textAlign: "center" }}
    >
      <p>@CreatedbyNaomi 2024</p>
    </div>
  );
}

export default Home;
