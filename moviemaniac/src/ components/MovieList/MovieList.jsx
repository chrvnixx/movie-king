import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

export default function MovieList({ type, title, emoji }) {
  //  "https://api.themoviedb.org/3/movie/popular?api_key=286ef813e8b38eb8fb21c365d1cd5372#"

  const [movies, setMovies] = useState([]);
  const [minRating, setMinrating] = useState(0);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });
  function handleSort(e) {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=286ef813e8b38eb8fb21c365d1cd5372#`
      );
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
      setFilteredMovies(data.results);
    }
    fetchFood();
  }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filteredMovies, [sort.by], [sort.order]);
      setFilteredMovies(sortedMovies);
    }
  }, [sort]);

  return (
    <section className="movie_list" id={type}>
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          {title}{" "}
          <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
        </h2>

        <FilterGroup
          minRating={minRating}
          setMinrating={setMinrating}
          filteredMovies={filteredMovies}
          setFilteredMovies={setFilteredMovies}
          movies={movies}
        />

        <div className="movie_list_fs">
          <select
            name="by"
            value={sort.by}
            onChange={handleSort}
            id=""
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            value={sort.order}
            onChange={handleSort}
            id=""
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
