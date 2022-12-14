import React from 'react'
import SmallProductGridSection from './SmallProductGridSection'

var p = [
  { id: 1, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9604177/pexels-photo-9604177.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 2, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/6311615/pexels-photo-6311615.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 3, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/10512915/pexels-photo-10512915.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  { id: 4, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600" }
]

const FlashSaleTopSection = () => {

  return (
    <section className="flash-top">
      <div className="container1">
        <h1>2 FOR USD $29</h1>
        <div className="flash-topBtn">
          <button className="btn-white">FLASH SALE</button>
        </div>
      </div>
      <div className="flash-top-product">
        <div className="flash-product"><SmallProductGridSection products={p} /></div>
      </div>
    </section>
  )
}

export default FlashSaleTopSection