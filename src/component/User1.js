import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function User1(){ 
    const {id}=useParams();
 const [user1Details,setUser1Details]=useState([]);
 const API=`https://fakestoreapi.com/products/${id}`;
 const productDetails=async()=>{
    await axios.get(API)
    .then((res)=>{
     setUser1Details(res.data)
    })
    .catch((error)=>{
     console.log(error)
    })

 }

 useEffect(()=>{
    productDetails()
 },[])

       return(
        <>
        <h1>Product details page{user1Details.id}</h1>
        <div>
            <div className="card">
                <h2>{user1Details.title}</h2>
                <img src={user1Details.image} alt="Denim Jeans" height="160px" />
            <p className="price"> Rs.{user1Details.price}</p>
            <p>{user1Details.description}</p>

            </div>
        </div>
        </>
       )
   
}
export default User1