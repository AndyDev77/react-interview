// Pagination.jsx
import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

function Pagination({ pageCount, onPageChange }) {
  const handlePageClick = (data) => {
    onPageChange(data.selected + 1); // Ajoutez 1 car la pagination commence à 1, pas à 0
  };

  return (
    <ReactPaginate
      previousLabel={"Précédent"}
      nextLabel={"Suivant"}
      breakLabel={"..."}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      containerClassName={"pagination"}
      activeClassName={"active"}
      pageRangeDisplayed={2} // Nombre de pages affichées avant et après la page actuelle
      previousClassName={styles.previous} // Classe pour le bouton Précédent
      nextClassName={styles.next} // Classe pour le bouton Suivant
      disabledClassName={styles.disabled} 
      pageClassName={styles.page} // Classe pour les pages
      className="d-flex flex-row flex-fill"// Classe pour les boutons Précédent et Suivant
    />
  );
}

export default Pagination;
