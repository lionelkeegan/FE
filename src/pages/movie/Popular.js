import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateMovies } from "../../features/moviesSlice";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
  // Simpan API KEY dan URL ke Variable
  // Membuat state movies
  const dispatch = useDispatch();

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
    const movies = response.data.results;

    // Jalankan action updateMovies, kirim data movies
    dispatch(updateMovies(movies));
  }

  /**
   * Render Component Movies.
   * Kirim props movies yang berisi nilai state movies
   */
  return (
    <>
      <Hero />
      <Movies title="Popular movie"/>
    </>
  );
}

export default PopularMovie;