import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(
    totalItems / itemsPerPage
  );

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={currentPage === 1}
        onClick={() =>
          onPageChange(currentPage - 1)
        }
      >
        Anterior
      </button>

      <span className={styles.page}>
        {currentPage} / {totalPages}
      </span>

      <button
        className={styles.button}
        disabled={currentPage === totalPages}
        onClick={() =>
          onPageChange(currentPage + 1)
        }
      >
        Siguiente
      </button>
    </div>
  );
}