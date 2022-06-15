/**
 * Import CSS Module Movies.
 * Disimpan di object styles.
 */
import styles from "./Movies.module.css";
/**
 * import useselector
 */
 import { useSelector } from "react-redux";
/**
 * import data data movie
 */
import Movie from "../Movie/Movie";

function Movies({ title }) {
  /**
   * Gunakan useSelector untuk mengakses state redux.
   * Menerima parameter state (global state).
   * Akses state movies: state global - nama reducer - nama state
   */
  const movies = useSelector((state) => state.movies.movies);
  
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
        {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
      </section>
    </div>
  );
}

export default Movies;
