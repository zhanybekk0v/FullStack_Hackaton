import { Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import ProductCard from '../Product/ProductCard'

const ProductList = () => {
  const { getProducts, products } = useProduct()
  const [searhParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    getProducts()
    setPage(1)
  }, [setSearchParams])

  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = useState(1)
  const itemsPerPage = 8
  const count = Math.ceil(products.length / itemsPerPage)
  const handleChange = (e, p) => {
    setPage(p)
  }

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end)
  }
  return <>
    <Grid sx={{ paddingTop: '3rem' }}>
      <Header />
        <SideBar />
      <Box style={{ display: 'flex' }}>
        <Box style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          {products && currentData().map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </Box>
      </Box>
      {products.length > 0 ? (
        <Pagination sx={{ display: 'flex', justifyContent: 'center', color: 'dark' }} onChange={handleChange} count={count} page={page} variant='outlined' snape='rounded' />
      ) : null}
    </Grid>
  </>;
};

export default ProductList;
