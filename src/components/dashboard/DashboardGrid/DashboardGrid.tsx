import styles from "./DashboardGrid.module.scss";

interface DashboardGridProps {
  children: React.ReactNode;
}

export default function DashboardGrid({
  children,
}: DashboardGridProps) {
  return (
    <section className={styles.grid}>
      {children}
    </section>
  );
}