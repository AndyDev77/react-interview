import React, { useState, useEffect } from "react";
import Select from "react-select";
import styles from "./Content.module.scss";
import Recipe from "./Recipe";
import Pagination from "./Pagination"; // Import du composant Pagination
import { movies$ } from "../data/movies";

function Content() {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    movies$.then((movies) => {
      setMovies(movies);
      const uniqueCategories = [
        ...new Set(movies.map((movie) => movie.category)),
      ];
      setCategories(
        uniqueCategories.map((category) => ({
          value: category,
          label: category,
        }))
      );
    });
  }, []);

  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions.map((option) => option.value));
  };

  const handleChangePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleChangeItemsPerPage = (selectedOption) => {
    setItemsPerPage(selectedOption.value);
  };

  const handleDelete = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const availableCategories = categories.filter((category) =>
    movies.some((movie) => movie.category === category.value)
  );

  const filteredMovies =
    selectedCategories.length > 0
      ? movies.filter((movie) => selectedCategories.includes(movie.category))
      : movies;

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredMovies.slice(offset, offset + itemsPerPage);

  const pageCount = Math.ceil(filteredMovies.length / itemsPerPage);

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
            id="categories"
            value={categories.filter((option) =>
              selectedCategories.includes(option.value)
            )}
            onChange={handleCategoryChange}
            options={availableCategories}
            isMulti
          />
        </div>
        <div className={styles.grid}>
          {currentItems.map((movie) => (
            <Recipe
              key={movie.id}
              id={movie.id}
              title={movie.title}
              images={movie.images}
              likes={movie.likes}
              dislikes={movie.dislikes}
              category={movie.category}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <div
          className={`d-flex flex-row justify-content-between align-items-center my-30 ${styles.filterBar}`}
        >
          <Pagination pageCount={pageCount} onPageChange={handleChangePage} />
          <Select
            value={{ value: itemsPerPage, label: itemsPerPage }}
            onChange={handleChangeItemsPerPage}
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
