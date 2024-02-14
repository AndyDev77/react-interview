// Recipe.jsx
import { useState } from "react";
import styles from "./Recipe.module.scss";

function Recipe({ id, title, category, images, likes, dislikes, handleDelete }) {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  function handleLike() {
    if (!likeActive) {
      setLikeCount(likeCount + 1);
    } else {
      setLikeCount(likeCount - 1);
    }
    setLikeActive(!likeActive);
  }

  function handleDislike() {
    if (!dislikeActive) {
      setDislikeCount(dislikeCount + 1);
    } else {
      setDislikeCount(dislikeCount - 1);
    }
    setDislikeActive(!dislikeActive);
  }

  function handleClickDelete() {
    handleDelete(id);
  }

  return (
    <div className={styles.recipe}>
      <i onClick={handleClickDelete} className="fa-solid fa-xmark"></i>

      <div className={styles.imageContainer}>
        <img src={images} alt="recipe" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{title}</h3>
        <p className="mb-10">{category}</p>
        <div className="d-flex justify-content-center align-items-center">
          <i
            className={`far fa-thumbs-up me-1 ${
              likeActive ? styles.active : ""
            }`}
            onClick={handleLike}
          ></i>
          <span className="me-2">{likeCount}</span>
          &nbsp;&nbsp;
          <i
            className={`far fa-thumbs-down me-1 ${
              dislikeActive ? styles.active : ""
            }`}
            onClick={handleDislike}
          ></i>
          <span>{dislikeCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
