import styles from "./CategoryField.module.scss";

interface CategoryFieldProps {
    value: string;
    onChange: (value: string) => void;
}

export default function CategoryField({
    value,
    onChange,
}: CategoryFieldProps) {
    return (
        <div className={styles.container}>
            <select
                className={styles.select}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                <option value="">Seleccionar categoría</option>
                <option value="Seguridad">Seguridad</option>
                <option value="Eléctrico">Eléctrico</option>
                <option value="Estructura">Estructura</option>
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