import React from 'react'
import customerService from '../assets/images/customer-service.svg'
import securedPayment from '../assets/images/credit-card.svg'
import deliveryTruck from '../assets/images/delivery-truck.svg'

const SiteInfoSection = () => {
  return (
    <section className="site-info">
        <div className ="container">
            <div className="customer-support">
                <img className="customer-support-img" src={customerService} />
                <h1>Customer Support</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div img className="secured-payment">
                <img className="secured-payment-img" src={securedPayment} />
                <h1>Secured Payment</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="free-delivery">
                <img className="free-delivery-img" src={deliveryTruck} />
                <h1>Free Home Delivery</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
            <div className="day-reuters">
                <img className="day-reuters-img" src={deliveryTruck} />
                <h1>30 Day Reuters</h1>
                <p>Village did removed enjoyed explain talking.</p>
            </div>
        </div>
    </section>
  )
}

export default SiteInfoSection