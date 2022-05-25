/**
 * Import CSS Module Hero/JUMBOTRON.
 * Disimpan di object styles.
 */

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import HeroStyled from "./Hero.styled";

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
    <HeroStyled>
            <section>
                <div className="hero__left">
                    <h2>{movie.Title}</h2>
                    <h3>Genre: {movie.Genre}</h3>
                    <p>{movie.Plot}</p>
                    <Button variant="secondary" size="sm">Watch</Button>
                </div>
                <div className="hero__right">
                    <img src={movie.Poster} alt="" />
                </div>
            </section>
        </HeroStyled>
  );
}

export default Hero;
