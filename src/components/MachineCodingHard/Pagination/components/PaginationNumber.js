import React from "react";
import "../styles.css";

export default function PaginationNumber({
  currentPage,
  prevPage,
  noOfPages,
  handlePageChange,
  nextPage,
}) {
  return (
    <>
      {" "}
      <div className="page_number_container">
        <button
          disabled={currentPage === 0}
          onClick={() => prevPage()}
          className="arrow"
        >
          PREV
        </button>
        {[...Array(noOfPages).keys()].map((pagenumber) => (
          <>
            <div
              key={pagenumber}
              className={
                "page_number " + (pagenumber === currentPage ? "active" : "")
              }
              onClick={() => handlePageChange(pagenumber)}
            >
              {pagenumber}
            </div>
          </>
        ))}
        <button
          disabled={currentPage === noOfPages - 1}
          onClick={() => nextPage()}
          className="arrow"
        >
          NEXT
        </button>
      </div>
    </>
  );
}
