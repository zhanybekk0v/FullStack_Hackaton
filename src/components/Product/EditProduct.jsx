import React from "react";

const EditProduct = () => {
  return (
    <Box className="add" sx={{ width: "70vw", margin: "6vh auto" }}>
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
      <TextField
        sx={{ marginBottom: "5px" }}
        className="input"
        hiddenLabel
        id="filled-hidden-label-normal"
        iant="filled"
        placeholder="title"
      />
      <TextField
        sx={{ marginBottom: "5px" }}
        className="input"
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder="price"
      />
      <TextField
        sx={{ marginBottom: "5px" }}
        className="input"
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder="brand"
      />
      <TextField
        sx={{ marginBottom: "5px" }}
        className="input"
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder="description"
      />

      <IconButton
        sx={{ color: "orange" }}
        color="primary"
        aria-label="upload picture"
        component="label"
      >
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">CHOOSE</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">CHOOSE</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">CHOOSE</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button variant="text" fullWidth size="large">
        SAVE
      </Button>
    </Box>
  );
};

export default EditProduct;
