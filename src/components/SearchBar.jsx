import React from "react";

export default function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (!trimmed) {
      alert("Please enter a valid search term.");
      return;
    }
    onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search countries..."
        aria-label="Search countries"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" aria-label="Search button">
        🔍
      </button>
    </form>
  );
}
