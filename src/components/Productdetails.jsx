import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Productdetails()
{
    const[product,setProduct] = useState({})

    const {id} = useParams()
    console.log(id,"productid");

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
            console.log(res.data);
            setProduct(res.data)
            
        }).catch((err)=>{
            console.log(err);
            
        })
    })
    

    return(
        <div>
        <img src={product?.image} className="productimage"/>
        <p>{product?.description}</p>
        </div>
    )
}
export default Productdetails