import { PhotoCamera } from "@mui/icons-material";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../contexts/ProductContextProvider";
import "../Product/AddProduct.css";


const EditProduct = () => {
  const { getCategories, categories, getOneProduct, oneProduct, editProduct } =
    useProduct();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [brand, setBrand] = useState();
    const [stock, setStock] = useState("");
    const [sex, setSex] = useState("");
    const [preview, setPreview] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

 

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setCategory(oneProduct.category);
      setBrand(oneProduct.brand);
      setStock(oneProduct.stock);
      setSex(oneProduct.sex);
    }
  }, [oneProduct]);

  useEffect(() => {
    getOneProduct(id);  
    getCategories();
  }, []);



  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("category", category);
    newProduct.append("brand", brand);
    newProduct.append("price", price);
    newProduct.append("image", image);
    newProduct.append("stock", stock);
    newProduct.append("preview", preview);
    newProduct.append("sex", sex);
    editProduct(id, newProduct);
    navigate("/products");
  }

  console.log(category);

  return (
    <>
      <Box sx={{ width: "70vw", margin: "6vh auto", paddingTop: "5rem" }}>
        <Typography
          sx={{ marginBottom: "20px", color: "orange" }}
          className="title"
          align="center"
          variant="h4"
          element="h2"
          fontFamily="cursive"
        >
          EDIT PRODUCT
        </Typography>
        <div className="add">
          <div className="add1">
            <TextField
              value={title}
              sx={{ marginBottom: "5px" }}
              className="input"
              hiddenLabel
              id="filled-hidden-label-normal"
              iant="filled"
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              type="number"
              value={price}
              sx={{ marginBottom: "5px" }}
              className="input"
              hiddenLabel
              id="filled-hidden-label-normal"
              placeholder="price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              value={description}
              sx={{ marginBottom: "5px" }}
              className="input"
              hiddenLabel
              id="filled-hidden-label-normal"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="block_img">
              <IconButton
                sx={{ color: "orange" }}
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  hidden
                  accept="image/*"
                  type="file"
                />
                <PhotoCamera />
              </IconButton>
              <IconButton
                sx={{ color: "orange" }}
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input
                  onChange={(e) => setPreview(e.target.files[0])}
                  hidden
                  accept="image/*"
                  type="file"
                />
                <PhotoCamera />
              </IconButton>
            </div>
          </div>
          <div className="add2">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Brand
              </InputLabel>
              <Select
                onChange={(e) => setBrand(e.target.value)}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
              >
                <MenuItem value="Nike">Nike</MenuItem>
                <MenuItem value="adidas">Adidas</MenuItem>
                <MenuItem value="Reebok">Reebok</MenuItem>
                <MenuItem value="PUMA">Puma</MenuItem>
                <MenuItem value="Timberland">TimberLand</MenuItem>
                <MenuItem value="YSL">YSL</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Category
              </InputLabel>
              <Select
                onChange={(e) => setCategory(e.target.value)}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Age"
              >
                {categories.map((item) => (
                  <MenuItem value={item.slug}>{item.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Stock
              </InputLabel>
              <Select
                onChange={(e) => setStock(e.target.value)}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
              >
                <MenuItem value="in_stock">В наличии</MenuItem>
                <MenuItem value="out_of_stock">Нет в наличии</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Sex
              </InputLabel>
              <Select
                onChange={(e) => setSex(e.target.value)}
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
              >
                <MenuItem value="men">Мужская </MenuItem>
                <MenuItem value="women">Женская </MenuItem>
                <MenuItem value="unisex">Юнисекс</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <Button onClick={handleSave} variant="text" fullWidth size="large">
          SAVE
        </Button>
      </Box>

    </>
  );
};

export default EditProduct;
