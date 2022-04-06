// Import Navbar, Hero, Movies, Footer Component
import Form from "../components/Addmovieform/Addmovieform";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import data from "../utils/constants/data";

/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Main() {
  const [movies, setMovies] = useState(data);

  return (
    <main>
      <Hero />
      <Movies movies={movies} setMovies={setMovies}/>
      <Form movies={movies} setMovies={setMovies}/>
    </main>
  );
}

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
