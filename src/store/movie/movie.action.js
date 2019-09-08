export const getMovieList = list => ({
  type: "GET_MOVIE_LIST",
  payload: list
});

export const getAllGenres = list => ({
  type: "GET_ALL_GENRES",
  payload: list
});
