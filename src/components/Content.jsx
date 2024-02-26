import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMoviesSuccess,
  filterMoviesByCategory,
  deleteMovie,
} from "../redux/actions/actions";
import Movie from "./Movie";
import Pagination from "./Pagination";
import { movies$ } from "../data/movies";
import styles from "./Content.module.scss";
import Select from "react-select"; // Import de la composante Select depuis react-select

function Content() {
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState([]); // État pour stocker les catégories sélectionnées
  const [pageCount, setPageCount] = useState(1); // Définir une valeur initiale pour pageCount
  const [categories, setCategories] = useState([]); // État pour stocker les catégories uniques
  const [perPage, setPerPage] = useState(4); // Nombre d'éléments par page
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle

  useEffect(() => {
    movies$.then((movies) => {
      dispatch(fetchMoviesSuccess(movies));
      // Extraire les catégories uniques une fois les films chargés
      const uniqueCategories = Array.from(
        new Set(movies.map((movie) => movie.category))
      );
      setCategories(uniqueCategories);
      // Calculer le nombre de pages en fonction du nombre de films
      const pageCount = Math.ceil(movies.length / perPage);
      setPageCount(pageCount);
    });
  }, [dispatch, perPage]);

 

  const allMovies = useSelector((state) => state.movies);
  const filteredMovies = useSelector((state) => state.filteredMovies);

  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions); // Mettre à jour les catégories sélectionnées
    const categories = selectedOptions.map((option) => option.value);
    dispatch(filterMoviesByCategory(categories));
    setCurrentPage(1); // Réinitialiser la page actuelle à la première page lors du changement de catégorie
  };

  const handlePerPageChange = (selectedOption) => {
    setPerPage(selectedOption.value); // Mettre à jour le nombre d'éléments par page
    setCurrentPage(1); // Réinitialiser la page actuelle à la première page
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  const visibleMovies = selectedCategories.length
    ? filteredMovies
    : allMovies;

  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">React-Interview</h1>
      <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>
        <div
          className={`d-flex flex-row justify-content-center align-items-center my-30 ${styles.filterBar}`}
        >
          <label htmlFor="categories" className="flex-fill">
            Filtrer par catégorie:
          </label>
          <Select
            value={selectedCategories}
            onChange={handleCategoryChange}
            options={categories.map((category) => ({
              value: category,
              label: category,
            }))}
            isMulti
          />
        </div>

        <div className={styles.grid}>
          {visibleMovies
            .slice((currentPage - 1) * perPage, currentPage * perPage)
            .map((movie) => (
              <Movie
                key={movie.id}
                {...movie}
                handleDelete={handleDelete}
              />
            ))}
        </div>

        <div className={`d-flex flex-row justify-content-between align-items-center my-30 ${styles.filterBar}`}>
          <Pagination
            pageCount={pageCount}
            onPageChange={handlePageChange}
          />{" "}
          <Select
            value={{ value: perPage, label: perPage }} // Utilisez un objet pour représenter la valeur sélectionnée
            onChange={handlePerPageChange}
            options={[
              { value: 4, label: 4 },
              { value: 8, label: 8 },
              { value: 12, label: 12 },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Content;
