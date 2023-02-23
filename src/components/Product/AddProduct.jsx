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
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useProduct } from "../../contexts/ProductContextProvider";

const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState()
  const [stock, setStock] = useState('')
  const [sex, setSex] = useState('')
  const [preview, setPreview] = useState('')

  const { getCategories, categories, addProduct, products } = useProduct()
  console.log(products);
  useEffect(() => {
    getCategories()
  }, [])

  function handleSave() {
    let newProduct = new FormData()
    newProduct.append('title', title)
    newProduct.append('description', description)
    newProduct.append('category', category)
    newProduct.append('brand', brand)
    newProduct.append('price', price)
    newProduct.append('image', image)
    newProduct.append('stock', stock)
    newProduct.append('preview', preview)
    newProduct.append('sex', sex)
    console.log(newProduct)
    addProduct(newProduct)
  }
const navigate = useNavigate()
  function loading() {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Товар успешно добавлен!",
    });
    navigate('/products')
  }

  return (
    <>
      <Box className="add" sx={{ width: "70vw", margin: "6vh auto", paddingTop: '5rem' }}>
        <Typography
          sx={{ marginBottom: "20px", color: "orange" }}
          className="title"
          align="center"
          variant="h4"
          element="h2"
          fontFamily="cursive"
        >
          ADD PRODUCT
        </Typography>
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
          type='number'
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


        <IconButton
          sx={{ color: "orange" }}
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input onChange={(e) => setImage(e.target.files[0])} hidden accept="image/*" type="file" />
          <PhotoCamera />



        </IconButton>
        <IconButton
          sx={{ color: "orange" }}
          color="primary"
          aria-label="upload picture"
          component="label"
        >

          <input onChange={(e) => setPreview(e.target.files[0])} hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Brand</InputLabel>
          <Select
            onChange={(e) => setBrand(e.target.value)}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
          >
            <MenuItem value='Nike'>Nike</MenuItem>
            <MenuItem value='adidas'>Adidas</MenuItem>
            <MenuItem value='Reebok'>Reebok</MenuItem>
            <MenuItem value='PUMA'>Puma</MenuItem>
            <MenuItem value='Timberland'>TimberLand</MenuItem>
            <MenuItem value='YSL'>YSL</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
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
          <InputLabel id="demo-simple-select-standard-label">Stock</InputLabel>
          <Select
            onChange={(e) => setStock(e.target.value)}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
          >
            <MenuItem value='in_stock'>В наличии</MenuItem>
            <MenuItem value='out_of_stock'>Нет в наличии</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Sex</InputLabel>
          <Select
            onChange={(e) => setSex(e.target.value)}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
          >
            <MenuItem value='men'>Мужская </MenuItem>
            <MenuItem value='women'>Женская </MenuItem>
            <MenuItem value='unisex'>Юнисекс</MenuItem>
          </Select>
        </FormControl>
        <Button onClick={() => {handleSave() ; loading()}} variant="text" fullWidth size="large">
          CREATE PRODUCT
        </Button>
      </Box>      
    </>
  );
};

export default AddProduct;
