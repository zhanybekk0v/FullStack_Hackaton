import { Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import Header from "../../Header/Header";
import ProductCard from "../Product/ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProduct();
  const [searhParams, setSearchParams] = useSearchParams();
  // const [currentPage, setCurrentPage]  = useState(1)

  console.log(products);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [setSearchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const count = Math.ceil(products.length / itemsPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  // function getPagesCount() {
  //   let pageCountArr = [];

  //   for (let i = 1; i <= pages; i++) {
  //     pageCountArr.push(i);
  //   }

  //   return pageCountArr;
  // }

  // useEffect(() => {
  //   getProducts();
  // }, [searhParams]);

  // useEffect(() => {
  //   setSearchParams({
  //     page: currentPage,
  //   });
  // }, [currentPage]);

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <>
      <Grid sx={{ paddingTop: "3rem" }}>
        <Header />
        <Box style={{ display: "flex" }}>
          <Box
            sx={{
              width: "30%",
              height: "400px",
              margin: "5% 1%",
              padding: "0,2% ",
              background: "#fff",
              border: "1px solid black",
            }}
          >
            SideBar
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {products &&
              currentData().map((item) => (
                <ProductCard item={item} key={item.id} />
              ))}
          </Box>
        </Box>
        {products.length > 0 ? (
          <Pagination
            sx={{ display: "flex", justifyContent: "center", color: "dark" }}
            onChange={handleChange}
            count={count}
            page={page}
            variant="outlined"
            snape="rounded"
          />
        ) : null}
        {/* <Pagination>
        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
        {getPagesCount().map((item) =>
          item === currentPage ? (
            <Pagination.Item
              onClick={() => setCurrentPage(item)}
              active
              key={item}
            >
              {item}
            </Pagination.Item>
          ) : (
            <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
              {item}
            </Pagination.Item>
          )
        )}

        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
      </Pagination> */}
      </Grid>
    </>
  );
};

export default ProductList;
