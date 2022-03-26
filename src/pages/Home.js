// Import Navbar, Hero, Movies, Footer Component
import Form from "../components/Addmovieform/Addmovieform";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";

/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Main() {
  return (
    <main>
      <Hero />
      <Movies />
      <Form/>
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
