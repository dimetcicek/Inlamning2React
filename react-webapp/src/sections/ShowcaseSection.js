import React from 'react'
import showcaseimg1 from '../assets/images/showcase-img-1.svg'
import showcaseimg2 from '../assets/images/showcase-img-2.svg'

const ShowcaseSection = () => {
  return (
    <section className="showcase">
        <div className ="container">
            <div className="showcase-body">
            <img className="showcaseImg1" src={showcaseimg1}/>
            <img className="showcaseImg2" src={showcaseimg2}/>
            </div>
            <div className="showcase-text">
            <h1>SALE UP</h1>
            <h1>TO 50% OFF</h1>
            <p>Online shopping free home delivery over $100</p>
            <div className ="shopBtn">
                <button className="btn-theme">SHOP NOW</button>
            </div>
            </div>
        </div>
    </section>
  )
}

export default ShowcaseSection