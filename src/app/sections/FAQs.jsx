import React from 'react'

export default function FAQs() {
    const data=[
        {
            question:'What credit score do I need to apply for a credit card?',
            answer:'The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.',
        }
    ]
  return (
     <section className='container'>
      <div className="grid gap_50 max-w-[1020px]">
        <h2 className="font-bold title_40 text-center">FAQs</h2>
    <div className="grid">

      {data?.map((item)=>{
          
    })}
    </div>
    </div>
      </section>
  )
}
