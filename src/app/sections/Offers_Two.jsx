import React from 'react'
import { btn_arrow_icon } from '../../assets/Icons'
import { offer_2_img } from '../../assets/images/Images'
import Button from '../components/Button'

export default function Offers_Two() {
  return (
    <section className='container'>
         <div className="flex items-center">
           <img src={offer_2_img} alt="credit card" className='max-lg:hidden max-w-[695px] ' />
   
           <div className="grid content-start gap-[12px] sm:gap-[20px] lg:gap-[31px]">
             <h2 className="text_48 relative font-bold ">
               Discover the Perfect Credit Card for You
             
             </h2>
             <p className="text-muted-foreground max-498px] text_20">
               Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.
             </p>
             <Button variant='primary' text={"Get Started"}>
               {btn_arrow_icon()}
             </Button>
         
           </div>
         </div>
       </section>
  )
}
