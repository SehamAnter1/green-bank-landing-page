import React from 'react'

export default function Values() {
    const data = [
  { value: "16y", label: "Years Experience" },
  { value: "250+", label: "Merchant Partner" },
  { value: "18+", label: "Experience" },
  { value: "10.2k+", label: "Worldwide Clients" }
];

  return (
    <section className='container'>
        <div className="flex flex-wrap max-sm:gap-4 justify-center items-center text-center p-[64px] rounded-[32px] bg-[#3D544D]/20 backdrop-blur-sm">

      {data?.map((item)=>(
          <div className="grid gap-2 sm:min-w-[278px] ">
         <h2 className="text_48 font-bold">{item.value}</h2>
         <span className="text-foreground">{item.label}</span>
        </div>
      ))}
      </div>
    </section>
  )
}
