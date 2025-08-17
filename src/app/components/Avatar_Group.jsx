import React from 'react'
import { person_1, person_2, person_3 } from '../../assets/images/Images'

export default function Avatar_Group() {
   const images=[person_1,person_2,person_3]
  return (
    <div className='flex'>
        {images?.map((img,i)=>(
            <img src={img} className={`w-[48px] h-[48px] ${i&&'ms-[-10px]'} object-cover rounded-full`} alt="person avatar" />
        ))}
      
    </div>
  )
}
