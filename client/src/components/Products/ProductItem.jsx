import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductItems from './ProductItems'
const ProductItem = () => {

    const [products,setProducts] = useState([])

        useEffect(()=>{
            const fetchData = async()=>{
                const result = await axios.get('/coffe/getAll')
                setProducts(result.data)
                console.log(result.data)
            }
            fetchData()
        },[])

  return (
<>
<div className="productItem">
    <div className='item-container'>
      <div className="item-header">
        <h1>products</h1>
      </div>
      <div className="products">
      
      
{products.length === 0 ? (<h4>There are currently no Coffes!</h4>):(
   <div className='productsItemsImages'>
      {products.map((product)=>(
        <ProductItems product={product} key={product._id} />
      ))}
    </div>
)}
    </div>
      </div>
      </div>
      
    </>
  )
}

export default ProductItem
