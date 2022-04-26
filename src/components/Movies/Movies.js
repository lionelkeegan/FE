/**
 * Import CSS Module Movies.
 * Disimpan di object styles.
 */
import styles from "./Movies.module.css";

/**
 * import use state react
 */
 
 import { nanoid } from "nanoid";

/**
 * import data data movie
 */
import Movie from "../Movie/Movie";

function Movies(props) {
  /**
   * state movies
   */
   const {movies, setMovies} = props;

   /**
    * function handle
    */
    function handleClick() {
        const movie = {
          id: nanoid(),
          title: "Jigsaw Spiral",
          year: 2021,
          type: "Movie",
          poster: "https://picsum.photos/300/400",
        };
        setMovies([...movies, movie]);
  }
  
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
        {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
          <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
