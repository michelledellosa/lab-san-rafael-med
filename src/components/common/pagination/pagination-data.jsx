import React from "react";
import Link from "next/link";

const PaginationData = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <>
      <ul>
        {/* Botón para ir a la página anterior */}
        <li>
          <Link href="#" onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}>
            <i className="far fa-angle-left"></i>
          </Link>
        </li>

        {/* Renderizado dinámico de números de página */}
        {[...Array(totalPages)].map((_, index) => (
          <li key={index} className={currentPage === index + 1 ? "active" : ""}>
            <Link href="#" onClick={() => onPageChange(index + 1)}>
              {index + 1}
            </Link>
          </li>
        ))}

        {/* Botón para ir a la página siguiente */}
        <li>
          <Link href="#" onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}>
            <i className="far fa-angle-right"></i>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default PaginationData;
