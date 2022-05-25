/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
 import { Link } from "react-router-dom";
 import NavbarStyled from "./Navbar.styled";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
  <NavbarStyled>
    <nav>
      <div>
        <h1>Movie App</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link className="link" to="/">Home</Link>
          </li>
          <li>
            <Link className="link" to="/movie/create">Add Movie</Link>
          </li>             
          <li>              
            <Link className="link" to="/movie/popular">Popular</Link>                
          </li>              
          <li>             
            <Link className="link" to="/movie/now">Now Playing</Link>                
          </li>              
          <li>              
            <Link className="link" to="/movie/top">Top Rated</Link>                
          </li>                            
        </ul>
      </div>      
    </nav>        
  </NavbarStyled>  
  );
}

export default Navbar;
