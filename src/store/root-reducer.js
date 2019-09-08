import { combineReducers } from "redux";

import movieReducer from "./movie/movie.reducer";

const rootReducer = combineReducers({ movieReducer });

export default rootReducer;
