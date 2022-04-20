import React, { useEffect, useState } from "react";
import axios from "../services/axios";
import requests from "../services/requests";
import "../styles/banner.css";

const img_baseURL = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [movies, setMovies] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(requests.fetchRomanticMovies);
        const data = await response.data.results;
        setMovies(data[Math.floor(Math.random() * data.length - 1)]);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  function shortdesc(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${img_baseURL + movies?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {movies?.original_title || movies?.title || movies?.name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_btn">Play</button>
          <button className="banner_btn">My List</button>
        </div>
        <h1 className="banner_desc">{shortdesc(movies?.overview, 200)}</h1>
      </div>
    </header>
  );
};

export default Banner;
