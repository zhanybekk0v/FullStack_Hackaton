import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductList from "../components/Product/ProductList";

const ProductsPage = () => {
  return <>
    <Box>
      <Grid>
        <ProductList/>
      </Grid>
    </Box>
  </>;
};

export default ProductsPage;
