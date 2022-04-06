/**
 * Import CSS Module Hero/JUMBOTRON.
 * Disimpan di object styles.
 */

import styles from './Addmovieform.module.css';
import Alert from "../Alert/Alert";
import { useState } from "react";
import { nanoid } from "nanoid";

function Form(props){
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
   const {movies, setMovies} = props;
   const [title, setTitle] = useState("");
   const [date, setDate] = useState("");
   const [type, setType] = useState("default");
   const [poster, setPoster] = useState("");

   /**
    * Membuat state: error tittle, date, select, input
    */
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isPosterError, setIsPosterError] = useState(false);

   /**
   * Membuat fungsi handleTitle
   * Dijalankan ketika nilai input berubah
   */
  function handleTitle(e) {
    /**
     * Jalankan fungsi setTitile.
     * Set title nilai baru: input saat ini.
     */
    setTitle(e.target.value);
  }

  /**
   * Membuat fungsi handleDate
   * Dijalankan ketika nilai input berubah
   */
  function handleDate(e) {
    /**
     * Jalankan fungsi setDate.
     * Set date nilai baru: input saat ini.
     */
    setDate(e.target.value);
  }
  /**
   * function handle Type
   */

  function handleType(e){
    /**
     * function Type, set type with new data input.
     */
    setType(e.target.value);
  }

  /**
   * function handlePoster
   */

  function handlePoster(e){
      /**
       * function poster, set poster with new data input.
       */

      setPoster(e.target.value);
  }

  function handleSubmit(e) {
    /**
     * Mencegah perilaku default form.
     * Mencegah form direfresh ketika disubmit.
     */
    e.preventDefault();

    /**
     * if data undefined / jika data kosong
     */

     if (title === "") {
        setIsTitleError(true);
      }
      else if (date === "") {
        setIsDateError(true);
      }
      else if (poster === "") {
        setIsPosterError(true);
      }
      else {
        const movie = {
          id: nanoid(),
          title: title,
          year: date,
          type: type,
          poster: poster,
        };
  
        // SOLVED: HOW TO ADD MOVIE TO MOVIES 
        setMovies([...movies, movie]);
  
        setIsTitleError(false);
        setIsDateError(false);
        setIsPosterError(false);
      }
    }

    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__left}>
                <img
                    className={styles.form__image}
                    src="https://picsum.photos/536/354"
                    alt="placeholder"/>
                </div>
                <div className={styles.form__right}>
                    <h1 className={styles.form__title}>Add Movie</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title" className={styles.form__label}>Title</label> <br />
                            <input
                            id="title"
                            className={styles.form__input}
                            type="text"
                            name="title"
                            // Memberikan value input: title
                            value={title}
                            // Memberikan event onChange
                            onChange={handleTitle}
                            />
                            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                        </div>
                        <div>
                            <label htmlFor="year" className={styles.form__label}>Year</label><br />
                            <input
                            id="date"
                            className={styles.form__input}
                            type="text"
                            name="date"
                            // Memberikan value input: date
                            value={date}
                            // Memberikan event onChange
                            onChange={handleDate}
                            />
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                        </div>
                        <div>
                          <label htmlFor='typt' className={styles.form_label}>Type movie</label><br />
                          <select className={styles.addmovie__forminput} id="type" value={type} onChange={handleType}>
                                <option>--Choose here--</option>
                                <option value="movie">Movie</option>
                                <option value="series">Series</option>
                                <option value="animation">Animation</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="poster" className={styles.form__label}>Poster</label><br />
                            <input
                            id="poster"
                            className={styles.form__input}
                            type="text"
                            name="poster"
                            // Memberikan value input: date
                            value={poster}
                            // Memberikan event onChange
                            onChange={handlePoster}
                            />
                            {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
                        </div>
                        <button type="submit" className={styles.form__button}>Submit</button>
                    </form>
                </div>

            </section>

        </div>
    )
}

export default Form;