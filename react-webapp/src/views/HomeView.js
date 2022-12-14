import React, { useState } from 'react'
import BannerSection from '../sections/BannerSection'
import FlashSaleBotSection from '../sections/FlashSaleBotSection'
import FlashSaleTopSection from '../sections/FlashSaleTopSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import SiteInfoSection from '../sections/SiteInfoSection'


const HomeView = () => {

  window.top.document.title = 'Fixxo.'

  const [featuredProducts, setFeaturedProducts] = useState ([
    { id: 1, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9604177/pexels-photo-9604177.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 2, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/6311615/pexels-photo-6311615.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/10512915/pexels-photo-10512915.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 4, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 5, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 6, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 7, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 8, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  ])
  const [topProducts, setTopProducts] = useState ([
    { id: 1, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/9604177/pexels-photo-9604177.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 2, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/6311615/pexels-photo-6311615.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 3, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/10512915/pexels-photo-10512915.jpeg?auto=compress&cs=tinysrgb&w=1600" },
    { id: 4, name: "Modern Brown Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600" },
  ])


  return (
    <>
    <div style={{backgroundColor: "#E6E6E6"}}>
      <MainMenuSection />
    </div>
      <ShowcaseSection />
      <ProductGridSection title="Featured Products" products={featuredProducts} />
      <BannerSection />
      <FlashSaleTopSection />
      <FlashSaleBotSection />
      <SiteInfoSection />
      <FooterSection />
    </> 
  )
}

export default HomeView