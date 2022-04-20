import React from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Row from "./components/Row";
import requests from "./services/requests";
import "./styles/app.css";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Orignals"
        fetchURL={requests.fetchNetflixOrignals}
        isLargeRow
      />
      <Row title="Trending" fetchURL={requests.fetchTrendings} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanticMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaties} />
    </div>
  );
};

export default App;
