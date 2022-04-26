/**
 * Import CSS Module Hero/JUMBOTRON.
 * Disimpan di object styles.
 */

import styles from './Addmovieform.module.css';
import Alert from "../Alert/Alert";
import React, {useState} from 'react';
import { nanoid } from "nanoid";

function Form(props){
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
   const {movies, setMovies} = props;
   // membuat state object
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        type: "",
    });
   /**
    * Membuat state: error tittle, date, select, input
    */
    const [formError, setFormError] = useState({
        isTitleError: false,
        isDateError: false,
        isLinkError: false,
        isTypeError: false
    });

    /**
     * membuat fungsi handle change untuk menghandle semua input form
     */
     function handleChange(e){
      const {name, value} = e.target;

      setFormData({
          ...formData,
          [name]: value
      });
      }
       // destruct fromData
    const {title, date, poster: link, type} = formData;

    // destruct formError
    const {isTitleError, isDateError, isLinkError, isTypeError} = formError;

    function validate(){
        // validasi - form harus diisi
        if(title === ''){
            setFormError({
                ...formError,
                isTitleError: true
            });
            return false;
        } else if(date === ''){
            setFormError({
                ...formError,
                isDateError: true
            });
            return false;
        } else if(link === ''){
            setFormError({
                ...formError,
                isLinkError: true
            });
            return false;
        } else if(type === ''){
            setFormError({
                ...formError,
                isTypeError: true
            });
            return false;
        } else{
            setFormError({
                isTitleError: false,
                isDateError: false,
                isLinkError: false,
                isTypeError: false
            })
            return true;
        }
    }

    function addMovie(){
        const movie = {
            id: nanoid(),
            year: date,
            poster: link,
            title: title,
            type: type
        }
        setMovies([...movies, movie]);
    }

    function handleSubmit(e){
        e.preventDefault();

        validate() && addMovie();
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                            />
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                        </div>
                        <div>
                          <label htmlFor="type" className={styles.form_label}>Type movie</label><br />
                          <select className={styles.form__input} name="type" id="type" value={type} onChange={handleChange}>
                                <option value="">--Choose here--</option>
                                <option value="movie">Movie</option>
                                <option value="series">Series</option>
                                <option value="animation">Animation</option>
                                <option value="action">Action</option>
                                <option value="comedy">Comedy</option>
                                <option value="fantasy">Fantasy</option>
                                <option value="horror">Horror</option>
                                <option value="romance">Romance</option>
                                <option value="thriller">Thriller</option>
                            </select>

                            {/* jika type belum dipilih, maka tampilkan error */}
                            {isTypeError && <Alert>Type wajib diisi!</Alert>}
                        </div>
                        <div>
                            <label htmlFor="link" className={styles.form__label}>Link Picture</label><br />
                            <input
                            id="link"
                            className={styles.form__input}
                            type="url"
                            name="poster"
                            // Memberikan value input: date
                            value={link}
                            // Memberikan event onChange
                            onChange={handleChange}
                            />
                            {isLinkError && <Alert>Poster Wajib Diisi</Alert>}
                        </div>
                        <button type="submit" className={styles.form__button}>Submit</button>
                    </form>
                </div>

            </section>

        </div>
    )
}

export default Form;