import axios from "../services/axios";
import React, { useEffect, useState } from "react";
import "../styles/row.css";

const img_baseURL = "https://image.tmdb.org/t/p/w500";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            src={`${img_baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster ${isLargeRow && "row_poster_large"}`}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
