import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import ProductDetailsCard from "./ProductDetailsCard";

const ProductDetailsList = () => {
  const {getOneProduct, oneProduct} = useProduct()
  const [product, setProduct] = useState({
    preview: '',
    title: '',
    description: '',
    brand: '',
    price: 0,
    sex: '',
    category:'',
    stock:'',
})
console.log(product)

  const {id} = useParams()

  useEffect(() => {
    getOneProduct(id)
  }, [])

  useEffect(() => {
    setProduct(oneProduct)
},[oneProduct])

console.log(product)




  return <>
    <Box >
          <ProductDetailsCard product={product} />
    </Box>
  </>;
};

export default ProductDetailsList;
