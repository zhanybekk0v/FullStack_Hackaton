import { IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


export default function ProductCard({ item }) {
  
    return(
      <div className="Card">
      <Link to={`/details/${item.id}`} >
      <div className="Card_img" link>
          <img className="img" src={item.picture} />
      </div>
      </Link>
    
      <div className="Card_all_info">
        <div className="info_block_title">
          <p className="Cards_title">{item.name}</p>
          <p className="Car-brand">{item.brand}</p>
        </div>
        <div className="Card_price">
          <span className="Card_price">{item.price}P</span>
          <p className="Card-likes"></p>
        </div>
      </div>
      <div className="button">
            <button className="delete">
            Delete
           </button>
           <button className="edit">
            Edit
           </button>
      </div>
  </div>
  );
};

