import {
  FETCH_MOVIES_SUCCESS,
  FILTER_MOVIES_BY_CATEGORY,
  DELETE_MOVIE,
} from "../actions/actions";

const initialState = {
  movies: [],
  filteredMovies: [],
};

const reducer = (state = initialState, action) => {
  let selectedCategories, filteredMovies, updatedMovies, updatedFilteredMovies; // Utilisation de let à la place de const

  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        filteredMovies: action.payload,
      };
    case FILTER_MOVIES_BY_CATEGORY:
      selectedCategories = action.payload; // Utilisation de la variable déclarée précédemment
      filteredMovies =
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
      updatedMovies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
      updatedFilteredMovies = state.filteredMovies.filter(
        (movie) => movie.id !== action.payload
      );
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
