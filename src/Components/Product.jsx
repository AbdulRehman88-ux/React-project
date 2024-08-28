import React from 'react'

import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({items, cart, setCart}) => {

const addToCart = (id,price,title,description,imgSrc) =>{
    const obj ={
        id,price,title,description,imgSrc  
    }
    setCart([...cart,obj]);
    // console.log("Cart element = ",cart)
    toast.success('Item added on cart', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        
        });
}




    return (
        <>
        <ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
            <div className="container my-5">
                <div className="row">
                    {
                        items.map((product) => {
                            return (
                                <>
                                    <div key={product.id} className="col-lg-3 col-md-6 my-3 text-center">
                                        <div className="card" style={{ width: "18rem" }}>
                                           
                                           <Link to={`/product/${product.id}`} style={{
                                            display:'flex',
                                            justifyContent:'center',
                                            alignItems:'center',

                                            }}>
                                           
                                            <img src={product.imgSrc} className="card-img-top" alt="..." />
                                            
                                            </Link> 
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <button className='btn btn-primary mx-3'>{product.price}{" "}PKR</button>
                                               
                                                <button 
                                                onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                                                className='btn btn-warning'>Add To Cart</button>
                                                {/* <Link to={"https://www.amazon.com/Apple-iPhone-Pro-256GB-Gold/dp/B0BN92Q7Q6/ref=sr_1_2?crid=2AQP9W9BA0NHN&dib=eyJ2IjoiMSJ9.NhjFnOgm-kntSYxa3Tc4oHmuIZy-HQtXs9TkgJ9DWwM2s-K-UvzL4DGXL6yn_oiWqsWJoOx-XzmQ03V9ZzeZeM0NJgIGU-ppq6behR4dxt-WmCktU1KEfz6-znfpatZpfbzbRuRk-JSkqGGdBdOHQg8Lf1CBI8RymDmvNUod0g_2ZludjWN8jCy2t7RYPsufTmSKjDUT3uezT2f1vtnqd2XvIojezYDpYnwB1rqkivU.66P1_53WCKxT_nXf7VNcgYqFWhvBQamQzij0HjkpvwE&dib_tag=se&keywords=iphone&qid=1717070899&sprefix=%2Caps%2C659&sr=8-2&th=1"} className='btn btn-warning'>Buy Now</Link> */}
                                            </div>
                                        </div></div>
                                </>
                            )
                        })
                    }
                </div></div>
        </>
    )
}

export default Product