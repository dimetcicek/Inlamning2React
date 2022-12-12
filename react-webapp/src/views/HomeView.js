import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'


const HomeView = () => {

  const [featuredProducts, setFeaturedProducts] = useState ([
    { id: 1, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9604177/pexels-photo-9604177.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 2, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/6311615/pexels-photo-6311615.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/10512915/pexels-photo-10512915.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 4, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  ])

  const [topProducts, setTopProducts] = useState ([
    { id: 1, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9604177/pexels-photo-9604177.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 2, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/6311615/pexels-photo-6311615.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/10512915/pexels-photo-10512915.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  ])

  return (
    <>
      <MainMenuSection />
      <ProductGridSection title="Featured Products" products={featuredProducts} />
      <ProductGridSection title="Top Products" products={topProducts} />
      <FooterSection />
    </> 
  )
}

export default HomeView