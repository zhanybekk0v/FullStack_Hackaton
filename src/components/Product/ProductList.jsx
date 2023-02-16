import React, { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import ProductCard from '../Product/ProductCard'

const ProductList = () => {
  const { getProducts, products } = useProduct()
  console.log(products)
  useEffect(() => {
    getProducts();
  }, []);

  return <div>
    <div style={{ display: 'flex', justifyContent: "center" , width: '100%' , paddingTop:'5rem'}}>
      {products.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  </div>;
};

export default ProductList;
