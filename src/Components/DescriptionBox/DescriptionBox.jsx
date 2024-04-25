import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (132)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
            E-commerce has revolutionized the way we shop, offering convenience, variety, 
            and accessibility like never before. From the comfort of our homes or on the go, 
            customers can browse through a vast array of products and services at their fingertips. 
            With secure payment gateways and swift delivery options, e-commerce platforms provide a seamless shopping experience, 
            fostering trust and reliability among consumers. Moreover, e-commerce empowers businesses of all sizes, 
            enabling them to reach a global audience, optimize their marketing strategies, and tailor offerings to meet 
            the diverse needs and preferences of their customers, driving growth and innovation in the digital marketplace.
            </p>
            <p>
            E-commerce provides product details, pricing, reviews, and shipping information, 
            facilitating convenient online shopping experiences for consumers while enabling 
            businesses to reach a broader audience and optimize sales strategies.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox