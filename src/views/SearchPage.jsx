import React from "react";
import { connect } from "react-redux";
import SearchBar from "../components/SearchBar";
import axios from "axios";

import { getMovieList } from "../store/movie/movie.action";

import MovieDB from "../utils/movieDB";
import MovieItem from "../components/MovieItem";

const SearchPage = ({ movieList, getMovieList }) => {
  const handleSubmit = val => {
    axios
      .get(
        `${MovieDB.BASE_URL}search/movie?${MovieDB.API_KEY}&query=${val}&language=pt-BR&region=BR&page=1`,
        { crossdomain: true }
      )
      .then(response => {
        console.log(response.data.results);
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
