/**
 * Import CSS Module Hero/JUMBOTRON.
 * Disimpan di object styles.
 */
import styles from "./Hero.module.css";
import { useEffect, useState } from "react";

function Hero() {
  // destruct movie state
  const [movie, setMovie] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
    //lakukan effect 
    const response = await fetch("https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590");
    
    const data = await response.json();
    setMovie(data);
  }, []);
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>{movie.Title}</h2>
          <h3 className={styles.hero__genre}>
          Genre: {movie.Genre}
          </h3>
          <p className={styles.hero__description}>
          {movie.Plot}
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={movie.Poster}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
