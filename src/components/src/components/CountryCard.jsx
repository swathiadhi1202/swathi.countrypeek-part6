import React from "react";
import { Link } from "react-router-dom";

export default function CountryCard({ country }) {
  if (!country) return null;

  return (
    <div className="card">
      <img
        src={country.flags?.png}
        alt={`Flag of ${country.name?.common || "Unknown Country"}`}
      />
      <h3>{country.name?.common || "No name available"}</h3>
      <p>Population: {country.population ?? "Data not available"}</p>
      <p>Region: {country.region ?? "Data not available"}</p>
      <Link
        to={`/country/${country.cca3}`}
        aria-label={`View details for ${country.name?.common}`}
      >
        View Details
      </Link>
    </div>
  );
}
