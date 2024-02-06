import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const ConceptPrac = () => {

  const [productData, setProductData] = useState([])


  const getProduct = () => {
    axios.get(`https://dummyjson.com/products`).then((response) => {
      console.log("got it", response.data.products);
      setProductData(response.data.products)
    })
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className='container'>
      {
        productData.map((item, i) => {
          // console.log("chk item", item, i);
          return (

            <NavLink key={i} className="productNav" to={`/productdetails/${item.id}`}>
              <div className="product-card">
                <div className='img-container'>
                  <img src={item.thumbnail} alt="" />
                </div>
                <div>
                  product brand : {item.brand}

                </div>
                <div>

                  product title : {item.title}
                </div>
                <div>

                  product price : {item.price}
                </div>
              </div>
            </NavLink>
          )

        })
      }

    </div>
  )
}

export default ConceptPrac
