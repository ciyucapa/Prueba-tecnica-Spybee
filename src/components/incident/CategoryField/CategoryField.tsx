import styles from "./CategoryField.module.scss";

export default function CategoryField() {
  return (
    <div className={styles.container}>
      <select className={styles.select}>
        <option>Seleccionar categoría</option>
      </select>

      <button
        type="button"
        className={styles.button}
      >
        Gestionar categoría
      </button>
    </div>
  );
}