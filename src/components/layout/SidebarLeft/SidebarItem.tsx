import styles from "./SidebarItem.module.scss";

interface SidebarItemProps {
  icon: React.ReactNode;
  active?: boolean;
}

export default function SidebarItem({
  icon,
  active = false,
}: SidebarItemProps) {
  return (
    <button
      className={`${styles.item} ${active ? styles.active : ""}`}
    >
      {icon}
    </button>
  );
}