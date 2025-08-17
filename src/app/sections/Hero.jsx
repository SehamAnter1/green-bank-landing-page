import React from 'react'
import { credit_card } from '../../assets/images/Images'
import { btn_arrow_icon, hero_vector_icon } from '../../assets/Icons'
import Button from '../components/Button'
import Avatar_Group from '../components/Avatar_Group'

export default function Hero() {
  return (
    <section className='container'>
      <div className="flex">

      <div className="grid content-start gap-[31px]">
      <h2 className="text-[56px] relative font-bold ">
        Discover the Perfect Credit Card for You
      <span className="absolute start-[-10px]">

      {hero_vector_icon()}
      </span>
      </h2>
      <p className="text-muted-foreground max-w-[498px] text-[18px]">
        Discover the power of our secure and rewarding credit cards. Explore our range of credit cards and take control of your finances today.
      </p>
     <Button variant='primary' text={"Get Started"}>
      {btn_arrow_icon()}
      </Button>
      <div className="flex gap-4">
      <Avatar_Group/>
      <div className="grid max-w-[177px]">
        <h2 className="font-bold">10.2k+</h2>
        <span className="text-muted-foreground">Active users around the wordls</span>
      </div>
      </div>
      </div>
      <img src={credit_card} alt="credit card" className='h-[439px] ms-[-10px]' />
      </div>
    </section>
  )
}
