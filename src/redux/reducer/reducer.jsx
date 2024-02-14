import { FETCH_MOVIES_SUCCESS, FILTER_MOVIES_BY_CATEGORY, DELETE_MOVIE } from "../actions/actions";

const initialState = {
  movies: [],
  filteredMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        filteredMovies: action.payload,
      };
    case FILTER_MOVIES_BY_CATEGORY:
      const selectedCategories = action.payload;
      const filteredMovies =
        selectedCategories.length > 0
          ? state.movies.filter((movie) =>
              selectedCategories.includes(movie.category)
            )
          : state.movies;
      return {
        ...state,
        filteredMovies,
      };
    case DELETE_MOVIE:
      const updatedMovies = state.movies.filter(movie => movie.id !== action.payload);
      const updatedFilteredMovies = state.filteredMovies.filter(movie => movie.id !== action.payload);
      return {
        ...state,
        movies: updatedMovies,
        filteredMovies: updatedFilteredMovies,
      };
    default:
      return state;
  }
};

export default reducer;
