import styles from "./StatsCard.module.scss";

interface StatsCardProps {
  title: string;
  value: number;
  onClick?: () => void;
  active?: boolean;
}

export default function StatsCard({
  title,
  value,
  onClick,
  active
}: StatsCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>

      <h2 className={styles.value}>{value}</h2>
      <div
        className={`${styles.card} ${active ? styles.active : ""}`}
        onClick={onClick}
      >
        ...
      </div>
    </div>
  );
}