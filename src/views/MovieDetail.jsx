import React, { useState, useEffect } from "react";
import MovieDetailItem from "../components/MovieDetail";
import MovieDB from "../utils/movieDB";
import axios from "axios";

const MovieDetail = props => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${MovieDB.BASE_URL}movie/${props.match.params.id}?${MovieDB.API_KEY}&language=pt-BR`
      )
      .then(({ data }) => {
        setLoading(false);
        setDetails(data);
      })
      .catch(err => {
        setLoading(true);
        console.error(err);
      });
  }, [props]);

  return (
    <>{loading ? <h1>Carregando...</h1> : <MovieDetailItem {...details} />}</>
  );
};

//DETAIL PAGE
export default MovieDetail;
