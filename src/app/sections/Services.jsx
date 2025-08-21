import React from 'react'
import { security_icon } from '../../assets/Icons'

export default function Services() {
  const offers = [{
    icon: security_icon(),
    title: "Security Guarantee ",
    description: "Your data and funds will be securely protected."

  }, {}, {}]
  return (
    <section className='container'>
      <div className="grid gap_50">
        <h2 className="font-bold title_40">What do we offer?</h2>
        {offers?.map((item) => (
          <div className="flex items-start gap-[24px]">
            <div className="">
              {item?.icon}
            </div>
            <div className="grid">

              <h2>{item?.title}</h2>
              <p>{item?.description}</p>
            </div>
          </div>
        ))

        }
      </div>
    </section>
  )
}
