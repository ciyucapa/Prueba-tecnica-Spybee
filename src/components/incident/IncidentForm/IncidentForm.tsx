import FormField from "../FormField/FormField";
import styles from "./IncidentForm.module.scss";

import CategoryField from "../CategoryField/CategoryField";

export default function IncidentForm() {
  return (
    <form className={styles.form}>
      <FormField
        label="Título"
        required
      >
        <input type="text" />
      </FormField>

      <FormField
        label="Descripción"
        required
      >
        <textarea rows={5}></textarea>
      </FormField>

      <div className={styles.separator}></div>

      <FormField
        label="Fecha de vencimiento"
        required
      >
        <input type="date" />
      </FormField>

      <FormField
        label="Categoría"
        required
        >
        <CategoryField />
    </FormField>

      <FormField
        label="Prioridad"
        required
      >
        <select>
          <option>Seleccionar prioridad</option>
        </select>
      </FormField>
    </form>
  );
}