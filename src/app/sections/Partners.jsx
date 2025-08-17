import React from 'react'
import { logo_0, logo_1, logo_2, logo_3, logo_4, logo_5 } from '../../assets/images/Images'

export default function Partners() {
    const logos = [logo_0,logo_1,logo_2,logo_3,logo_4,logo_5]
return (
  <section className="container">
      <div className="carousel-wrapper">
        <div className="carousel-track">
          {[...logos, ...logos].map((logo, index) => (
            <div className="card" key={index}>
              <img
                src={logo}
                className="w-[150px] h-auto object-contain"
                alt={`partner-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    )
}
