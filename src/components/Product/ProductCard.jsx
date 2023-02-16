import React from "react";
import './ProductCard.css'

const ProductCard = ({item}) => {
  return  <div class="product-items">
              <div class="product">
                <div class="product-content">
                  <div class="product-img">
                    <img className="home-img"
                      src={item.preview}
                      alt="product image"
                    />
                  </div>
                  <div class="product-btns">
                    <button type="button" class="btn-cart">
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
                      <div class="rating-stars">
                        <input type="radio" name="rating" id="rs0" checked />
                        <label for="rs0"></label>
                        <input type="radio" name="rating" id="rs1" />
                        <label for="rs1"></label>
                        <input type="radio" name="rating" id="rs2" />
                        <label for="rs2"></label>
                        <input type="radio" name="rating" id="rs3" />
                        <label for="rs3"></label>
                        <input type="radio" name="rating" id="rs4" />
                        <label for="rs4"></label>
                        <input type="radio" name="rating" id="rs5" />
                        <label for="rs5"></label>
                        <span class="rating-counter"></span>
                      </div>
                    </div>
                  </div>
                  <a href="#" class="product-name">
                   {item.description}
                  </a>
                  <p class="product-price">{item.price}</p>
                  <p class="product-price">{item.stock}</p>
                </div>

                <div class="off-info">
                  <h2 class="sm-title">{item.brand}</h2>
                </div>
              </div>
              </div>
};

export default ProductCard;
