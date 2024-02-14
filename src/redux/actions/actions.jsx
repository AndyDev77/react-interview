// actions.js

export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FILTER_MOVIES_BY_CATEGORY = 'FILTER_MOVIES_BY_CATEGORY';
export const DELETE_MOVIE = 'DELETE_MOVIE'; // Ajout de l'action DELETE_MOVIE

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies,
});

export const filterMoviesByCategory = (selectedCategories) => ({
  type: FILTER_MOVIES_BY_CATEGORY,
  payload: selectedCategories,
});

export const deleteMovie = (id) => ({
  type: DELETE_MOVIE, // Utilisation de l'action DELETE_MOVIE
  payload: id,
});
