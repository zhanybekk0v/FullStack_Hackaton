import { Autocomplete, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { useProduct } from '../contexts/ProductContextProvider';

const SideBar = () => {
  const { fetchByParams } = useProduct()
 

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <FormControl  sx={{ width: '30%', padding: '0,2% ', background: '#fff'}}>
          <InputLabel id="demo-simple-select-label" >Brand</InputLabel>
          <Select
            defaultValue="all"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Genre"
            onChange={(e) => fetchByParams('brand', e.target.value)}
          >
            <MenuItem value="all" label="all">All</MenuItem>
            <MenuItem value='Reebok'>Reebok</MenuItem>
            <MenuItem value='Nike'>Nike</MenuItem>
            <MenuItem value='PUMA'>PUMA</MenuItem>
            <MenuItem value='adidas'>adidas</MenuItem>
            <MenuItem value='Timberland'>Timberland</MenuItem>
            <MenuItem value='YSL'>YSL</MenuItem>

          </Select>
        </FormControl>
        
        <FormControl  sx={{ width: '30%', padding: '0,2% ',boxShadow: '0 1px 5px rgba(0,0,0, 0.2' }}>
          <InputLabel id="demo-simple-select-label" >Sex</InputLabel>
          <Select
            defaultValue="all"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Sex"
            onChange={(e) => fetchByParams('sex', e.target.value)}
          >
            <MenuItem value="all" label="all">All</MenuItem>
            <MenuItem value='men'>Мужской</MenuItem>
            <MenuItem value='women'>Женский</MenuItem>
            <MenuItem value='unisex'>Юнисекс</MenuItem>
          </Select>
        </FormControl>

 
        <FormControl  sx={{ width: '30%', padding: '0,2% ',boxShadow: '0 1px 5px rgba(0,0,0, 0.2' }}>
          <InputLabel id="demo-simple-select-label" >title</InputLabel>
          <Select
            defaultValue="all"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="title"
            onChange={(e) => fetchByParams('title', e.target.value)}
          >
            <MenuItem value="all" label="all">All</MenuItem>
            <MenuItem value='Jardan'>jordan</MenuItem>
            <MenuItem value='Kepka'>kepka</MenuItem>
          </Select>
        </FormControl>

      </Box>
    </>
  );
};

export default SideBar;