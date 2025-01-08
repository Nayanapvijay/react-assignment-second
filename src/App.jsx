import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productcard from './components/Productcard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

const [products,setProducts]=useState([])

useEffect(() => {
  // fetch('https://fakestoreapi.com/products')
  // .then(res=>res.json())
  // .then(json=> {
  //   console.log(json)
  //   setProducts(json)
  // })
  axios.get('https://fakestoreapi.com/products')
  .then((res)=>{
    console.log(res.data);
    setProducts(res.data)
    
  }).catch((err)=>{
console.log(err);

  })
},[])

  return (
    
    <div className="container my-4">
      <div className="row g-2">
        {
          products.map((product)=>(
<div key={product.id} className="col-md-3">
        <Productcard item={product}/>
        </div>
        
          ))
          
        }
      
      </div>
    </div>
     
      
   
  )
}

export default App
