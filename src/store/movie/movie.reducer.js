const INITIAL_STATE = {
  movieList: [],
  genreList: []
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_MOVIE_LIST":
      return {
        ...state,
        movieList: action.payload
      };
    case "GET_ALL_GENRES":
      return {
        ...state,
        genreList: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
