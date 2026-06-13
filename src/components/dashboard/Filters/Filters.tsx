import styles from "./Filters.module.scss";

interface FiltersProps {
  priority: string;
  status: string;
  search: string;

  onPriorityChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

export default function Filters({
  priority,
  status,
  search,
  onPriorityChange,
  onStatusChange,
  onSearchChange
}: FiltersProps) {
  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value)}
      >
        <option value="">Todas las prioridades</option>
        <option value="high">Alta</option>
        <option value="medium">Media</option>
        <option value="low">Baja</option>
      </select>

      <select
        className={styles.select}
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="">Todos los estados</option>
        <option value="open">Abierta</option>
        <option value="closed">Cerrada</option>
        <option value="on_pause">En pausa</option>
      </select>
      <input
        className={styles.input}
        type="text"
        placeholder="Buscar incidencia por titulo..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}