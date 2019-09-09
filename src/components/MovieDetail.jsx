import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieDB from "../utils/movieDB.js";
import numeral from "numeral";

const MovieDetail = props => {
  const [trailer, setTrailer] = useState({});

  useEffect(() => {
    //Get Movie trailer
    const getDetails = async () => {
      await axios
        .get(`${MovieDB.BASE_URL}movie/${props.id}/videos?${MovieDB.API_KEY}`)
        .then(({ data: { results } }) => {
          results.map(item => {
            if (item.type === "Trailer") {
              setTrailer(item);
            }
            return null;
          });
        })
        .catch(err => console.error(err));
    };

    getDetails();
  }, [props]);

  return (
    <div className="movie-detail__item">
      <div className="top">
        <h2 className="title is-abel">{props.title}</h2>
        <span className="date">{props.release_date}</span>
      </div>
      <div className="content">
        <div className="info">
          <h5 className="info__label">Sinopse</h5>
          <p className="info__overview">{props.overview}</p>
          <br />
          <h5 className="info__label">Informações</h5>
          <div className="info__wrapper">
            <div className="info__box">
              <h4 className="label">Situação</h4>
              <span className="value">{props.status}</span>
            </div>
            <div className="info__box">
              <h4 className="label">Idioma</h4>
              <span className="value">{props.original_language}</span>
            </div>
            <div className="info__box">
              <h4 className="label">Duração</h4>
              <span className="value">
                {numeral(props.runtime).format("00:00:00") + " hr"}
              </span>
            </div>
            <div className="info__box">
              <h4 className="label">Orçamento</h4>
              <span className="value">
                {numeral(props.budget).format("$0,0.00")}
              </span>
            </div>
            <div className="info__box">
              <h4 className="label">Receita</h4>
              <span className="value">
                {numeral(props.revenue).format("$0,0.00")}
              </span>
            </div>
            <div className="info__box">
              <h4 className="label">Lucro</h4>
              <span className="value">
                {numeral(props.revenue - props.budget).format("$0,0.00")}
              </span>
            </div>
          </div>
          {/* Genres section */}
          <ul className="genres">
            {props.genres
              ? props.genres.map(genre => (
                  <li key={genre.id} className="genre">
                    {genre.name}
                  </li>
                ))
              : ""}
          </ul>
          <div className="info__average">
            <span className="value">
              {numeral(props.vote_average / 10).format("0%")}
            </span>
          </div>
        </div>
        <div className="poster">
          <img
            src={
              props.poster_path
                ? `http://image.tmdb.org/t/p/w300/${props.poster_path}`
                : ""
            }
            alt=""
          />
        </div>
      </div>
      <div className="bottom">
        <iframe
          title={trailer.name}
          src={`https://www.youtube.com/embed/${trailer.key}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

//DETAIL ITEM
export default MovieDetail;
