import styles from "./StatsCard.module.scss";

interface StatsCardProps {
  title: string;
  value: number;
}

export default function StatsCard({
  title,
  value,
}: StatsCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>

      <h2 className={styles.value}>{value}</h2>
    </div>
  );
}