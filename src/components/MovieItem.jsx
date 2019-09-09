import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";

const MovieItem = ({
  id,
  title,
  poster_path,
  overview,
  release_date,
  vote_average
}) => {
  return (
    <div className="movie__item" id={id}>
      <div className="movie__item-poster">
        <Link to={`/movie/${id}`}>
          <img
            src={
              poster_path ? `http://image.tmdb.org/t/p/w200/${poster_path}` : ""
            }
            alt=""
          />
        </Link>
      </div>
      <div className="movie__item-content">
        <div className="header">
          <Link to={`/movie/${id}`}>
            <h3 className="title is-abel">{title}</h3>
          </Link>
          <span className="vote-average is-abel">
            <span className="value">
              {numeral(vote_average / 10).format("0 %")}
            </span>
          </span>
          <span className="release-date">{release_date}</span>
        </div>
        <div className="content">{overview}</div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default MovieItem;
