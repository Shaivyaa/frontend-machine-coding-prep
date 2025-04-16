import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./styles.css";
import { PAGE_SIZE } from "./constants";
import PaginationNumber from "./components/PaginationNumber";

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchData = () => {
    fetch("https://dummyjson.com/products?limit=500")
      .then((response) => response.json())
      .then((json) => setProducts(json.products));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const handlePageChange = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  console.log(noOfPages, "products_card_container");

  return (
    <>
      <div className="products_container">
        <div style={{ fontSize: "40px", fontWeight: "bold", padding: "15px" }}>
          Pagination
        </div>
        {!products.length ? (
          <>
            <div style={{ fontStyle: "italic", marginLeft: "20px" }}>
              No Products Found :(
            </div>
          </>
        ) : (
          <>
            <div className="products_card_container">
              {products.slice(start, end).map((items) => (
                <>
                  <ProductCard
                    key={items.id}
                    title={items.title}
                    image={items.thumbnail}
                  />
                </>
              ))}
            </div>
            <PaginationNumber
              currentPage={currentPage}
              prevPage={prevPage}
              noOfPages={noOfPages}
              handlePageChange={handlePageChange}
              nextPage={nextPage}
            />
          </>
        )}
      </div>
    </>
  );
}
