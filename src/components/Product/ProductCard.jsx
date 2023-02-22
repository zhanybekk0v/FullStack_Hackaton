import React from "react";
import './ProductCard.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import Header from "../../Header/Header";

const ProductCard = ({item}) => {
  const {addProductToCart, checkProductInCart} =useCart()
  return <>
   <div class="product-items">
              <div class="product">
                <div class="product-content">
                  <Link to={`/details/${item.id}`}>
                  <div class="product-img">
                    <img className="home-img"
                      src={item.preview}
                      alt="product image"
                      />
                  </div>
                      </Link>
                  <div class="product-btns">
                    <button type="button" class="btn-cart" onClick={() => addProductToCart(item)}>
                      {" "}
                      add to cart
                      <span>
                        <i class="fas fa-plus"></i>
                      </span>
                    </button>
                    <button type="button" class="btn-buy">
                      {" "}
                      buy now
                      <span>
                        <i class="fas fa-shopping-cart"></i>
                      </span>
                    </button>
                  </div>
                </div>

                <div class="product-info">
                  <div class="product-info-top">
                    <h2 class="sm-title">{item.title}</h2>
                    <div class="rating">
                      <div className="rating-body">
                      <div class="rating-active"></div>
                      <div class="rating-items">
                        <input type="radio" name="rating" id="rs5" value="5" class="rating-item" checked />
                        <label for="rs5" class="rating-lable" ></label>
                        <input type="radio" name="rating" id="rs4" value="4" class="rating-item" />
                        <label for="rs4" class="rating-lable" ></label>
                        <input type="radio" name="rating" id="rs3" value="3" class="rating-item" />
                        <label for="rs3" class="rating-lable" ></label>
                        <input type="radio" name="rating" id="rs2" value="2" class="rating-item" />
                        <label for="rs2" class="rating-lable" ></label>
                        <input type="radio" name="rating" id="rs1" value="1" class="rating-item" />
                        <label for="rs1" class="rating-lable"></label>
                        </div>
                        <div class='rating-value'>{Math.floor(Math.random()* 5)}.{Math.floor(Math.random() * 10)}</div>
                      </div>
                    </div>
                  </div>
                  <a href="#" class="product-name">
                   {item.description}
                  </a>
                  <div className="product-1">
                  <p class="product-price">{item.price}$</p>
                  <p class="product-price">{item.stock}</p>
                  </div>
                </div>

                <div class="off-info">
                  <h2 class="sm-title">{item.brand}</h2>
                </div>
              </div>
              </div>
              </>
};

export default ProductCard;


