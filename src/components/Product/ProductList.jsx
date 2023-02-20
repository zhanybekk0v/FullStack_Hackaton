import { Grid, Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import ProductCard from '../Product/ProductCard'

const ProductList = () => {
  const { getProducts, products } = useProduct()
  const [searsch, setSearchParams] = useSearchParams()

  console.log(products)
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts()
    setPage(1)
  } , [setSearchParams])

  const [page, setPage] = useState(1)
  const itemsPerPage = 3

  const count = Math.ceil(products.length / itemsPerPage)

  const handleChange = (e, p) => {
    setPage(p)
  }
  
  // function  currentData(){
  //   const begin = (page - 1)  * itemsPerPage;
  //   const end = begin + itemsPerPage;
  //   return products.slice(begin , end)
  // }
  return <>
    <Grid sx={{paddingTop: '3rem'}}>
      <Box  style={{display:'flex'}}>

      <Box sx={{ maxWidth:'30%' , height: '400px' , margin:'5% 1%',padding: '0,2% ', background: '#fff', border: '1px solid black' }}>SideBar</Box>
      <Box style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
          ))}
      </Box>
      </Box>
      <Pagination  color="primary" sx={{display:'flex' , justifyContent: 'center', color:'dark'}} onChange={handleChange} count={count} page={page} variant='outlined' snape='rounded' />
    </Grid>
  </>;
};

export default ProductList;
