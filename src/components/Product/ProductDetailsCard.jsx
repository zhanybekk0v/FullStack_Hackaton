import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductDetailsCard.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Grid, TextField, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/system";
import { useAuth } from "../../contexts/AuthContextProvider";
import { ADMIN } from "../../helpers/consts";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useCart } from "../../contexts/CartContextProvider";
 

const ProductDetailsCard = ({ product }) => {
  const { deleteProduct } = useProduct();
  const {addProductToCart,checkProductInCart } = useCart()
  const navigate = useNavigate();
  const [fildback, setFildback] = useState("");
  const { user } = useAuth();

  return (
    <div className="Card-details">
      <div className="content">
        <div className="Back-btn">
          <button onClick={() => navigate("/products")} className="back-btn">
            <ArrowBackIosNewIcon />
          </button>
        </div>
        <div className="details-prew">
          <div className="img-details">
            <img
              className="home-img"
              src={product.preview}
              alt="product image"
            />
          </div>

          <div className="btn-group">
            <button onClick={() => addProductToCart(product)} type="button" class="btn_cart">
              {" "}
              add to cart{" "}
              <span>
                <i class="fas fa-plus"></i>
              </span>
            </button>
            <button onClick={() => navigate('/orderForm')} type="button" class="btn_buy">
              {" "}
              buy now{" "}
              <span>
                <i class="fas fa-shopping-cart"></i>
              </span>
            </button>
          </div>

          <p className="details-desc">
            {product.descr} Lorem ipsum, dolor non blanditiis id nulla excepturi
            saepe temporibus minima nisi, praesentium, corrupti alias aliquid
            quia! Quibusdam ex, alias fugiat quasi maiores id optio recusandae
            voluptatem cupiditate quia. Fugit sint voluptates, suscipit fuga
            optio laboriosam doloremque nesciunt rerum quos sunt architecto ea
            maxime quibusdam consectetur tempora. Quisquam facere laborum
            officiis id rerum aperiam non eius veritatis vero, consequuntur
            officia aspernatur illo deserunt pariatur architecto commodi.
          </p>
        </div>
        <div className="Div">
          <div className="CardInfo">
            <p className="Title">{product.title}</p>
            <p className="details-categoty">
              {product.category} for {product.brand},{product.sex}
            </p>
            <p className="details-stock">{product.stock}</p>
            <p className="details-price">{product.price}</p>

            {user === ADMIN ? (
              <>
                <button
                  onClick={() => {
                    deleteProduct(product.id);
                    navigate("/products");
                  }}
                  className="delete"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate(`/edit/${product.id}`)}
                  className="edit"
                >
                  Edit
                </button>
              </>
            ) : null}
          </div>
          <div className="fildback">
            <p className="fildbackTitle">Отзывы</p>
            <Grid>
              <Box className="flidbac-user" sx={{ display: "flex" }}>
                <AccountCircle className="comm-img" />
                <Typography className="user-Auth">No auth user</Typography>
              </Box>
              <p className="filedback-sms">анпротигмнсмрио</p>
            </Grid>
            <TextField
              value={fildback}
              sx={{
                marginBottom: "5px",
                marginTop: "140px",
                borderRadius: "28px",
                width: "100%",
                height: "0px",
                fontSize: "15px",
                borderColor: "Balck",
              }}
              className="fildbac-comm"
              hiddenLabel
              id="standard-basic"
              variant="standard"
              iant="filled"
              placeholder="Напишите свой отзыв"
              onChange={(e) => setFildback(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
