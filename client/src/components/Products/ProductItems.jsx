import React from 'react'
import './productItem.css'
import {useNavigate} from 'react-router-dom'

const ProductItems = ({product}) => {
  const navigate = useNavigate()
  const handleClick = ()=>{
    navigate(`/coffe/${product._id}`)
  }
  return (
    <>
    
        <div className="product">
            <div className="product-image">
                <img src={`./assets/uploads/${product.image}`} alt="" />
            </div>
            <div className="namePrice">
                <h3>{product.name}</h3>
                <span>TND {product.price}</span>
            </div>

            <p>{product.description}</p>
            <div className="stars">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            </div>
            <div className="buy">
                <button onClick={handleClick}>buy now</button>
            </div>
        </div>
      
  
    </>
  )
}

export default ProductItems
