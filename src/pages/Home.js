// Import Navbar, Hero, Movies, Footer Component

import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";


/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {

  return (
    <div>
            <Hero/>
            <Movies title="Latest movie"/>
        </div>
  );
}

export default Home;
