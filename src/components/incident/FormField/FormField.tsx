import styles from "./FormField.module.scss";

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export default function FormField({
  label,
  required = false,
  children,
}: FormFieldProps) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {required && <span>* </span>}
        {label}
      </label>

      {children}
    </div>
  );
}