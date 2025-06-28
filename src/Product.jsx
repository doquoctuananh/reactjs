import {memo, useState, useEffect,useRef } from 'react';


  function Product({products,onClick}) {
    // console.log(onClick)
    
    return (
      <div>
        {products.map( (cur,index) => {
          return <li key = {cur.id}>
            <span>Name: {cur.name} - </span>
            <span>Gia : {cur.price} - </span>
            <button 
              data = {cur.id}
              onClick ={onClick}
            >
              Them gio hang
              </button>
          </li>
        } )}
      </div>
    );
  }

export default memo(Product);