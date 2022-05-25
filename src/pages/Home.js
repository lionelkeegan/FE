// Import Navbar, Hero, Movies, Footer Component
import Form from "../components/Addmovieform/Addmovieform";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { useState } from "react";
import data from "../utils/constants/data";

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  const [movies, setMovies] = useState(data);

  return (
    <div>
            <Hero/>
            <Movies movies={movies} setMovies={setMovies}/>
            <Form movies={movies} setMovies={setMovies}/>
        </div>
  );
}

export default Home;
