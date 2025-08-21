import React from 'react'
import { investment_icon, method_icon, security_icon } from '../../assets/Icons'

export default function Services() {
  const offers = [
    {
      icon: security_icon(),
      title: "Security Guarantee ",
      description: "Your data and funds will be securely protected."
    },
    {
      icon: investment_icon(),
      title: "Investing ",
      description: "Your data and funds will be securely protected."
    },
    {
      icon: method_icon(),
      title: "Multiple Method",
      description: "Your data and funds will be securely protected."
    }]
  return (
    <section className='container'>
      <div className="grid gap_50">
        <h2 className="font-bold title_40 text-center">What do we offer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {offers?.map((item) => (
            <div className="flex items-start gap-[24px] md:max-w-[320px] lg:max-w-[392px] mx-auto">
              <div className="bg-[#3D544D] flex items-center justify-center rounded-[12px] lg:rounded-[24px] w-full h-full max-w-[48px] max-h-[48px]  lg:max-w-[64px] lg:max-h-[64px]">
                {item?.icon}
              </div>
              <div className="grid gap-2">

                <h2 className='font-medium text_24'>{item?.title}</h2>
                <p className='text-muted-foreground'>{item?.description}</p>
              </div>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  )
}
