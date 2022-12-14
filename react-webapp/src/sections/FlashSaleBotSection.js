import React from 'react'
import SmallProductGridSection from './SmallProductGridSection'

var p = [
    { id: 1, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9604177/pexels-photo-9604177.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 2, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/6311615/pexels-photo-6311615.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/10512915/pexels-photo-10512915.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 4, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600" }
  ]

const FlashSaleBotSection = () => {
  return (
    <section className="flash-bot">
        <div className="flash-bot-product">
        <div className="flash-product"><SmallProductGridSection products={p} /></div>
      </div>
      <div className="container2">
        <h1>2 FOR USD $49</h1>
        <div className="flash-botBtn">
          <button className="btn-white">FLASH SALE</button>
        </div>
      </div>

    </section>
  )
}

export default FlashSaleBotSection