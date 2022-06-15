import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
  // Simpan API KEY dan URL ke Variable
  // Membuat state movies
  const [movies, setMovies] = useState([]);

  /**
   * Melakukan useEffect.
   * useEffect to perform other jobs: fetch data
   */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    /**
     * Menggunakan library axios.
     * Axios digunakan untuk melakukan fetch data.
     */
    const response = await axios(ENDPOINTS.POPULAR);

    /**
     * Simpan data movies dari axios ke state movies.
     * Upadte state menggunakan setMovies().
     */
    setMovies(response.data.results);
  }
console.log(movies);
  /**
   * Render Component Movies.
   * Kirim props movies yang berisi nilai state movies
   */
  return (
    <>
      <Hero />
      <Movies movies={movies} title='Popular movie'/>
    </>
  );
}

export default PopularMovie;