import styles from "./RightItem.module.scss";

interface RightItemProps {
  icon: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
}

export default function RightItem({
  icon,
  primary = false,
  onClick,
}: RightItemProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.item} ${
        primary ? styles.primary : ""
      }`}
    >
      {icon}
    </button>
  );
}