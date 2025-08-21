import React, { useState } from 'react'
import { minus_icon } from '../../assets/Icons';

export default function FAQ_Item({question,anwser}) {
    const [isOpen,setIsOpen]=useState(false);
  return (
     <div className="grid gap-2">
                <h2 className='font-medium text_24'>{question}</h2>
                <p className='text-muted-foreground'>{anwser}</p>
                {isOpen?
                minus_icon():
                plus_icon()}
              </div>

  )
}
