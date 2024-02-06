import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'

const ProductDetails = () => {

  const [proDetail, setProDetail] = useState([])
  const [proDetailImages, setProDetailImages] = useState([])

  const { id } = useParams()

  const getProductDetail = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      console.log("item fetched", response.data);
      setProDetail(response.data)
      setProDetailImages(response.data.images)

    })
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <div>
      <Row>
        <Col md={4}>
          <div>
            <Slider {...settings}>
              {
                proDetailImages.map((item, i) => {
console.log("imags item check",item);
                  return (
                    <div key={i}>
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }



            </Slider>
          </div>
        </Col>
        <Col md={8}>
          <div> <img src={proDetail.thumbnail} alt="product thumbnail" /></div>
          <div>Id : {proDetail.id}</div>
          <div>Brand : {proDetail.brand}</div>
          <div>Category : {proDetail.category}</div>
          <div>Description : {proDetail.description}</div>
          <div>DiscountPercentage : {proDetail.discountPercentage}</div>
          <div>Price : {proDetail.price}</div>
          <div>Rating : {proDetail.rating}</div>
          <div>Stock : {proDetail.stock}</div>
          <div>Title : {proDetail.title}</div>

        </Col>
      </Row>
    </div>
  )
}

export default ProductDetails
