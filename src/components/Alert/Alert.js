import styles from "./Alert.module.css";

function Alert(props) {
  /**
   * Children adalah props khusus.
   * Berisi konten/children yang ada di dalam component.
   */

  return(
    <div>
        <p className={styles.alert}>{props.children}</p>
    </div>
);
}

export default Alert;
