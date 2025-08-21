import React from 'react'

export default function FAQ_Item() {
  return (
     <div className="grid gap-2">

                <h2 className='font-medium text_24'>{item?.title}</h2>
                <p className='text-muted-foreground'>{item?.description}</p>
              </div>
              
  )
}
