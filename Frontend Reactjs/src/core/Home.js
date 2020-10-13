import React, {useState, useEffect} from "react";
import "../styles.css"
import {API} from "../backend"
import Base from "./Base"
import Card from "./Card";
import { getAllProducts } from "./helper/coreapicalls";




export default function Home() {

  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  const loadAllProducts = () =>(
    getAllProducts()
    .then(data =>{
      if(data.error){
        setError(data.error)
      }
      else{
        setProducts(data)
      }
    })
  )

  useEffect(() => {
    loadAllProducts()
  }, [])
  
  return (
    <Base title="Home Page" description="Welcome to T-shirt store">
     <div className="row">
       <div className = "row">
         {products.map((product, index) =>{
           return(
            <div key={index} className="col-4 mb-2">
            <Card product={product} />
            </div>
           )
         })}
       </div>
     </div>
    </Base>
  );
}





