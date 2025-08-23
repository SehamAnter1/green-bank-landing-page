import React from 'react'
import { app_store_icon, google_play_icon } from '../../assets/Icons'
import { store_img } from '../../assets/images/Images'

export default function Download_App() {
    return (
        <section className='container'>
            <div className="flex gap-10 max-md:flex-wrap justify-between items-center">
                <div className="grid gap-[32px]">
                    <div className="grid gap-[20px]">
                    <h2 className='font-bold text_48'>Easy Way to manage your finances</h2>
                    <p className="text_20 text-muted-foreground">Easy to use mobile app that support on android and ios.</p>
                    </div>
                    <div className="flex max-sm:justify-between gap-[24px] items-center">
                        {app_store_icon}
                        {google_play_icon}
                    </div>
                </div>
                <img src={store_img} className='w-full max-w-[580px]' alt="mobile mockup" />
            </div>
        </section>
    )
}
