import React from "react";
import "./style.css";

const SearchBarCardComponents = ({
  searchValue,
  setSearchValue,
  typeValue,
  setTypeValue,
  filterData,
}) => {
  const changeSearchHandle = (e) => {
    setSearchValue(e.target.value);
  };

  const chagneValueHandler = (e) => {
    setTypeValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterData();
  };

  return (
    <div className="searchBox">
      <div className="container">
        <div className="checkBoxSec">
          <label htmlFor="movieFind">
            <input
              type="radio"
              value="movie"
              onChange={chagneValueHandler}
              checked={typeValue === "movie"}
              name="findSeriesType"
              id="movieFind"
            />
            <span>Movies</span>
          </label>
          <label htmlFor="tvFind">
            <input
              type="radio"
              value="tv"
              onChange={chagneValueHandler}
              checked={typeValue === "tv"}
              name="findSeriesType"
              id="tvFind"
            />
            <span>TV Shows</span>
          </label>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            value={searchValue}
            onChange={changeSearchHandle}
            placeholder="Search here"
            className="searchInput"
          />
          <button type="submit" className="searchButton">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBarCardComponents;
