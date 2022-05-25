/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import FooterStyled from "./Footer.styled";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <FooterStyled>
      <footer>
        <h2>Movie App</h2>
        <p>Created by ACHMAD IRVAN FAUZI
          <a href="https://github.com/lionelkeegan"> <br/> @lionelkeegan</a>
        </p>
      </footer>
    </FooterStyled>
  );
}

export default Footer;