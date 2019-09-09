import React, { useState } from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import axios from "axios";

import { getMovieList } from "../store/movie/movie.action";

import MovieDB from "../utils/movieDB";
import MovieItem from "../components/MovieItem";
import Pagination from "../components/Pagination";

const SearchPage = ({ movieList, getMovieList }) => {
  const [currentPag, setCurrentPag] = useState("");
  const [totalPag, setTotalPag] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (val, page) => {
    setKeyword(val);
    axios
      .get(
        `${MovieDB.BASE_URL}search/movie?${MovieDB.API_KEY}&query=${val}&language=pt-BR&region=BR&page=${page}`,
        { crossdomain: true }
      )
      .then(response => {
        setCurrentPag(response.data.page);
        setTotalPag(response.data.total_pages);
        getMovieList([...response.data.results]);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <SearchBar handleSubmit={handleSubmit} />
      {movieList.map(movie => (
        <MovieItem key={movie.id} {...movie} />
      ))}
      <Pagination
        current={currentPag}
        keyword={keyword}
        total={totalPag}
        handleClick={handleSubmit}
      />
    </>
  );
};

const mapStateToPros = ({ movieReducer }) => ({
  movieList: movieReducer.movieList
});

const mapDispatchToProps = dispatch => ({
  getMovieList: list => dispatch(getMovieList(list))
});

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(SearchPage);
