import React from "react";
import { useParams } from "react-router-dom";

export default function CountryDetail({ countries }) {
  const { code } = useParams();
  const country = countries.find((c) => c.cca3 === code);

  if (!country) {
    return <p>Country not found. Please check the URL.</p>;
  }

  return (
    <div>
      <h2>{country.name?.common}</h2>
      <img
        src={country.flags?.png}
        alt={`Flag of ${country.name?.common}`}
      />
      <p>Capital: {country.capital?.[0] ?? "Not available"}</p>
      <p>Population: {country.population ?? "Not available"}</p>
      <p>Region: {country.region ?? "Not available"}</p>
    </div>
  );
}
