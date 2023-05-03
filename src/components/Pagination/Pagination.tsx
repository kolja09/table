import React from "react";

import styles from "./Pagination.module.css";
import { PaginationProps } from "./types";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onChange(pageNumber);
    }
  };

  const renderPageNumbers = () => {
    const visiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);
    const pageButtons = [];

    if (startPage > 1) {
      pageButtons.push(
        <button
          key="first"
          onClick={() => handlePageChange(1)}
          className={styles.paginationButton}
        >
          1
        </button>
      );
      pageButtons.push(
        <span key="ellipsis-start" className={styles.paginationEllipsis}>
          ...
        </span>
      );
    }

    pages.slice(startPage - 1, endPage).forEach((pageNumber) => {
      pageButtons.push(
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`${styles.paginationButton} ${
            pageNumber === currentPage ? styles.active : ""
          }`}
        >
          {pageNumber}
        </button>
      );
    });

    if (endPage < totalPages) {
      pageButtons.push(
        <span key="ellipsis-end" className={styles.paginationEllipsis}>
          ...
        </span>
      );
      pageButtons.push(
        <button
          key="last"
          onClick={() => handlePageChange(totalPages)}
          className={styles.paginationButton}
        >
          {totalPages}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={styles.paginationButton}
        disabled={currentPage === 1}
      >
        {"\u25C0"}
      </button>
      {renderPageNumbers()}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={styles.paginationButton}
        disabled={currentPage === totalPages}
      >
        {"\u25B6"}
      </button>
    </div>
  );
};

export default Pagination;
