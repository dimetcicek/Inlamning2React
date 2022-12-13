import React from 'react'
import pamelareifs from '../assets/images/pamelareifs.svg'
import letsbe from '../assets/images/lets-be.svg'

const BannerSection = () => {
  return (
    <section className ="banner">
        <div className="container">
            <div className="pamela">
                <img className="pamelareifs" src={pamelareifs} />
                <h1>Pamela Reif's</h1>
                <p>Top Picks</p>
                <div className="pamelaBtn">
                    <button className="btn-dark">SHOP NOW</button>
                </div>
            </div>
            <div className="lets-be">
                <img className="letsbe" src={letsbe} />
                <h1>Let's Be</h1>
                <p>Conscious</p>
                <div className="letsbeBtn">
                    <button className="btn-theme">FLASH SALE</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerSection