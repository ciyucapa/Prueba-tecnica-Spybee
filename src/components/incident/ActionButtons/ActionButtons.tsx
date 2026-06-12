"use client";

import styles from "./ActionButtons.module.scss";

interface ActionButtonsProps {
  onCancel: () => void;
}

export default function ActionButtons({
  onCancel,
}: ActionButtonsProps) {
  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.cancel}
        onClick={onCancel}
      >
        Cancelar
      </button>

      <button
        type="submit"
        className={styles.create}
      >
        Crear incidencia
      </button>
    </div>
  );
}