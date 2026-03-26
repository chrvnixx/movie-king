import React from "react";

export default function FilterGroup({
  minRating,
  setMinrating,
  setFilteredMovies,
  movies,
}) {
  function handleFilter(rate) {
    if (minRating === rate) {
      setMinrating(0);
      setFilteredMovies(movies);
    } else {
      setMinrating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilteredMovies(filtered);
    }
  }
  return (
    <ul className="movie_filter">
      <li
        className={
          minRating === 8 ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => handleFilter(8)}
      >
        8+ Star
      </li>
      <li
        className={
          minRating === 7 ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => handleFilter(7)}
      >
        7+ Star
      </li>
      <li
        className={
          minRating === 6 ? "movie_filter_item active" : "movie_filter_item"
        }
        onClick={() => handleFilter(6)}
      >
        6+ Star
      </li>
    </ul>
  );
}
